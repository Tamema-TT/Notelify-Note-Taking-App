const addToDb = (note, storageName) =>{
    let noteStorage = getNotes(storageName);
    const id = Math.floor((Math.random() * 100000)+1);
    noteStorage[id] = note;
    localStorage.setItem('note-storage', JSON.stringify(noteStorage));
}
const addUser = (name, email, password) => {
    let userStorage = getNotes("users");
    const id = Math.floor((Math.random() * 100000)+1);
    userStorage[id] = {name, email, password};
    localStorage.setItem('users', JSON.stringify(userStorage));
}
const loggedUser = (loggedEmail, loggedPassword) => {
    let userStorage = getNotes("users");
    for (const id in userStorage) {
        const email = userStorage[id].email;
        const password = userStorage[id].password;
        if(email === loggedEmail && password === loggedPassword){
            const loggedStorage = {...userStorage[id], id};
            sessionStorage.setItem("logged_user", JSON.stringify(loggedStorage));
            return true;
        }
    }
    return false;
}

const logoutUser = () => {
    sessionStorage.clear();
}

const getNotes = (storageName) => {
    let noteStorage = {};
    const storedNotes = localStorage.getItem(storageName);
    if(storedNotes){
        noteStorage = JSON.parse(storedNotes);
    }
    return noteStorage;
}

const getFields = id => {
    const storedNotes = getNotes('note-storage');
    const updateFields = storedNotes[id];
    const {title, body, date} = updateFields;
    return {title, body, date};
}

const updateDone = (id, updateNote) => {
    const {title, body} = updateNote;
    let storedNotes = getNotes('note-storage');
    storedNotes[id].title = title;
    storedNotes[id].body = body;
    localStorage.setItem('note-storage', JSON.stringify(storedNotes));
}

const removeFromDb = (id, permanent, storageName ) => {
    const storedNotes = getNotes(storageName);
    if(permanent === false) {
        addToTrash(id, storedNotes[id]);
    }
    delete storedNotes[id];
    localStorage.setItem(storageName, JSON.stringify(storedNotes));
}

const addToTrash = (id, trash) => {
    let trashStorage = getNotes('trash-storage');
    trashStorage[id] = trash;
    localStorage.setItem('trash-storage', JSON.stringify(trashStorage));
}

const getSearchResult = keyword => {
    let storedNotes = getNotes('note-storage');
    let result = [];
    for (const id in storedNotes) {
        const title = storedNotes[id].title.toLowerCase()
        const body = storedNotes[id].body.toLowerCase()
        if(title.includes(keyword) || body.includes(keyword)){
            result.push(storedNotes[id]);
        }
    }
    return result;
}

export {
    addToDb, 
    getNotes,
    removeFromDb,
    getFields,
    updateDone,
    addToTrash,
    getSearchResult,
    addUser,
    loggedUser,
    logoutUser,
}
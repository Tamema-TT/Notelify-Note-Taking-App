import { useState } from 'react';
import { addToDb } from '../utilities/fakedb';

const useNote = () => {
    const [note, setNote] = useState({
        title: '',
        body: '',
        date: ''
    });
    const handleNote = e => {
        const newNote = {...note};
        if(!note.date) {
            const today = new Date();
            const day = today.getDate();
            const month = today.toLocaleString('default', { month: 'long' });
            const year = today.getFullYear();
            const currentDate = `${day} ${month}, ${year}`;
            note.date = currentDate;
            newNote['date'] = currentDate;
        }
        newNote[e.target.name] = e.target.value;
        setNote(newNote);
    }
    const saveNote = handleClose => {
        addToDb(note, 'note-storage');
        handleClose();
    }
    return [note, handleNote, saveNote];
};

export default useNote;
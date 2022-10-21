import { letterSpacing } from '@mui/system';
import  { useEffect, useState } from 'react';
import { getNotes } from '../utilities/fakedb';

const useNotes = (sName) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = getNotes(sName);
        const savedNotes = [];
        for (const id in storedNotes) {
            const note = {...storedNotes[id], 'id': id }
            savedNotes.push(note);
        }
        setNotes(savedNotes);
    }, [notes]);

    return [notes, setNotes];
};

export default useNotes;
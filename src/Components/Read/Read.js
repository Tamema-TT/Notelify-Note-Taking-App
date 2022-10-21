import React from 'react';
import useNotes from '../../hooks/useNotes';
import Sidebar from '../Sidebar/Sidebar';
import ViewNotes from '../ViewNotes/ViewNotes';

const Read = () => {
    const [notes, setNotes] = useNotes('note-storage');
    const page = 'read';
    return (
        <>
        <Sidebar></Sidebar>
        <ViewNotes
            notes={notes}
            page={page}
        ></ViewNotes>
        </>
    );
};

export default Read;
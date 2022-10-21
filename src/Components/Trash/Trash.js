import React from 'react';
import useNotes from '../../hooks/useNotes';
import Sidebar from '../Sidebar/Sidebar';
import ViewNotes from '../ViewNotes/ViewNotes';

const Trash = () => {
    const [notes, setNotes] = useNotes('trash-storage');
    const page = 'trash';
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

export default Trash;
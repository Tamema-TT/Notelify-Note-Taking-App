import React from 'react';
import { Container } from '../Sidebar/Sidebar.styled';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Items, ItemsText } from './Notes.styled';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const history = useNavigate();
    const handleNavigate = (route) => {
        history(route);
    };
    return (
        <Container>
            <Items onClick={() => handleNavigate("/read")}>
                <StickyNote2OutlinedIcon></StickyNote2OutlinedIcon>
                <ItemsText>All Notes</ItemsText>
            </Items>
            <Items onClick={() => handleNavigate("/trash")}>
                <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                <ItemsText>Trash</ItemsText>
            </Items>
        </Container>
    );
};

export default Notes;
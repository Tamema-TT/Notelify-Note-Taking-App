import React from 'react';
import Add from '../Add/Add';
import Header from '../Header/Header';
import Notes from '../Notes/Notes';
import User from '../User/User';
import { Nav, Line, DivStyle } from './Sidebar.styled';

const Sidebar = () => { 
    return (
        <Nav>
            <DivStyle>
                <Header></Header>
                <Line></Line>
                <User></User>
                <Add></Add>
                <Notes></Notes>
            </DivStyle>
        </Nav>
    );
};

export default Sidebar;
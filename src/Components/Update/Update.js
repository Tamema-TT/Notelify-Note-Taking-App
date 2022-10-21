import { Box, TextField } from '@mui/material';
import React from 'react';
import { Container } from '../Sidebar/Sidebar.styled';
import { Link, useParams } from 'react-router-dom';
import { getFields, updateDone } from '../../utilities/fakedb';
import { useState } from 'react';
import { ReadWrap } from '../Read/Read.styled';
import { FieldContainer, UpdateBtn } from './Update.styled';
import Sidebar from '../Sidebar/Sidebar';

const Update = () => {
    const { id } = useParams();
    const fields = getFields(id);

    const [updateNote, setUpdateNote] = useState({
        title: fields.title,
        body: fields.body
    });

    const handleUpdate = e => {
        const newUpdate = {...updateNote};
        newUpdate[e.target.name] = e.target.value;
        setUpdateNote(newUpdate);
    };
    
    return (
        <>
            <Sidebar></Sidebar>
            <ReadWrap>
                <Box component="form" noValidate autoComplete="off">
                    <Container>
                        <FieldContainer>
                            <TextField
                                sx = {{
                                    '& label.Mui-focused': {
                                        color: 'green',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: '2px solid #7D6E83'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'yellow',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#5fad56',
                                        },
                                    },
                                }}
                                id="outlined-name"
                                name="title"
                                label="Title"
                                value={updateNote.title}
                                onChange={handleUpdate}
                                fullWidth
                            />
                        </FieldContainer>
                        
                        <FieldContainer>
                            <TextField
                                sx = {{
                                    '& label.Mui-focused': {
                                        color: 'green',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: '2px solid #7D6E83'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'yellow',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#5fad56',
                                        },
                                    },
                                }}
                                id="outlined-multiline-static"
                                name="body"
                                label="Your Note"
                                value={updateNote.body}
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={handleUpdate}
                                inputProps={{color: 'red'}}
                                fullWidth
                            />
                        </FieldContainer>
                        <Link to="/read">
                            <FieldContainer>
                                <UpdateBtn onClick={() => updateDone(id, updateNote)}>
                                    Update
                                </UpdateBtn>
                            </FieldContainer>
                        </Link>
                    </Container>
                </Box>
            </ReadWrap>
        </>
    );
};

export default Update;
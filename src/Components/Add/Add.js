import React, { useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import {AddBtn, BootstrapDialog, FormFieldContainer, FormWrapper} from './Add.styled';
import { Container } from '../Sidebar/Sidebar.styled';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import useNote from '../../hooks/useNote';
import { UpdateBtn } from '../Update/Update.styled';

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Add = () => {
    const [open, setOpen] = useState(false);
    const [note, handleNote, saveNote] = useNote({});
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <AddBtn variant='contained' onClick={handleClickOpen}>
                <AddOutlinedIcon></AddOutlinedIcon>
                <Typography>Add New Note</Typography>
            </AddBtn>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <FormWrapper>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Take a note
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Box component="form" noValidate autoComplete="off" fullwidth>
                            <Container>
                                <FormFieldContainer>
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
                                        variant="outlined"
                                        onBlur={handleNote}
                                        fullWidth
                                    />
                                </FormFieldContainer>
                                
                                <FormFieldContainer>
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
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        onBlur={handleNote}
                                        fullWidth
                                    />
                                </FormFieldContainer>
                                <FormFieldContainer>
                                    <UpdateBtn onClick={() => saveNote(handleClose)}>
                                        Save Note
                                    </UpdateBtn>
                                </FormFieldContainer>
                            </Container>
                        </Box>
                    </DialogContent>
                </FormWrapper>
            </BootstrapDialog>
        </Container>
    );
};

export default Add;
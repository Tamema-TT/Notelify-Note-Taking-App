import React from 'react';
import Search from '../Search/Search';
import { NoNotes, ReadWrap, CusNoNotesDiv } from '../Read/Read.styled';
import SingleNote from '../SingleNote/SingleNote';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import NoData from '../../Images/no notes.png'

const ViewNotes = ({notes, page}) => {
    return (
        <ReadWrap>
            {
                notes.length > 0
                ?
                <Container>
                    {
                        page === 'read' ?
                        <Search></Search>
                        :
                        null
                    }
                    <Container>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {
                                notes.map(note => <SingleNote
                                    key={note.id}
                                    note={note}
                                    page={page}
                                ></SingleNote>)
                            }
                        </Grid>
                    </Container>
                </Container>
                :
                <CusNoNotesDiv>
                    <img src={NoData} alt=''/>
                    <NoNotes>No notes!!!</NoNotes>
                </CusNoNotesDiv>
            }
        </ReadWrap>
    );
};

export default ViewNotes;
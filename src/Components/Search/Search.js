import React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { StylePaper } from './Search.styled';
import { Grid, Tooltip } from '@mui/material';
import { useState } from 'react';
import { getSearchResult } from '../../utilities/fakedb';
import { Container } from '../Sidebar/Sidebar.styled';
import ViewNotes from '../ViewNotes/ViewNotes';
import SingleNote from '../SingleNote/SingleNote';

const Search = () => {
    const [searchkey, setSearchkey] = useState('');
    const [result, setResult] = useState([]);
    const handleSearch = (e) => {
        setSearchkey(e.target.value);
    }
    let temp = [];
    const searchResult = () => {
        temp = getSearchResult(searchkey);
        console.log(temp);
        setResult(temp);
        console.log('main', result);
    }
    const page = 'read';
    return (
        <Container>
            <StylePaper component="form">
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Title Here"
                    onChange={handleSearch}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Tooltip title="Search">
                    <IconButton onClick={searchResult} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Tooltip>
            </StylePaper>
            {
                temp.length > 0 ?
                    <Container>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {
                                temp.map(note => <SingleNote
                                    // key={note.id}
                                    note={note}
                                    page={page}
                                ></SingleNote>)
                                
                            }
                        </Grid>
                    </Container>
                :
                    null
            }
        </Container>
    );
}

export default Search;
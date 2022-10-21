import React from 'react';
import { CardActions, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import { ColorDiv, StyleCard } from './SingleNote.styled';
import { removeFromDb, getFields } from '../../utilities/fakedb';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';

const SingleNote = ({note, page}) => {
    const {id, title, body, date} = note;
    return (
        <Grid item xs={4}>
            <StyleCard sx={{ borderRadius: '16px' }}>
                <CardHeader
                    title={title}
                    subheader={date}
                />
                <CardContent>
                    <Typography 
                        sx = {{
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            height: '100px',
                            WhiteSpace: "nowrap"
                        }}
                        variant="body2">{body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {
                        page === 'read'
                        ?
                        <Tooltip title="Edit">
                            <Link to={"/update/"+id}>
                                <IconButton aria-label="update" onClick={() => getFields(`${id}`)}>
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        :
                        null
                    }
                    <Tooltip title="Delete">
                        <IconButton onClick={() =>
                            {
                                page === 'read'
                                ?
                                removeFromDb(`${id}`, false, 'note-storage')
                                :
                                removeFromDb(`${id}`, true, 'trash-storage')
                            }
                        }
                            aria-label="delete">
                            <DeleteSweepOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    {
                        page === 'read'
                        ?
                        <Tooltip title="See More">
                            <Link to={"/more/"+id}>
                                <IconButton aria-label="more">
                                    <ReadMoreIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        :
                        null
                    }
                </CardActions>
            </StyleCard>
            <ColorDiv></ColorDiv>
        </Grid>
    );
};

export default SingleNote;
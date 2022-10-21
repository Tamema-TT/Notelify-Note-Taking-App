import { CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import { ColorDiv, StyleCard } from '../SingleNote/SingleNote.styled';
import { removeFromDb, getFields } from '../../utilities/fakedb';
import { Link, useParams } from 'react-router-dom';
import { ReadWrap } from '../Read/Read.styled';
import { MoreWrap } from './SeeMore.styled';
import Sidebar from '../Sidebar/Sidebar';

const SeeMore = () => {
    const { id } = useParams();
    const {title, body, date} = getFields(id);
    return (
        <>
            <Sidebar></Sidebar>
            <ReadWrap>
                <MoreWrap>
                    <StyleCard sx={{ borderRadius: '16px' }}>
                        <CardHeader
                            title={title}
                            subheader={date}
                        />
                        <CardContent>
                            <Typography variant="body2">{body}</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Tooltip title="Edit">
                                <Link to={"/update/"+id}>
                                    <IconButton aria-label="update" onClick={() => getFields(`${id}`)}>
                                        <EditOutlinedIcon />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton onClick={() => removeFromDb(`${id}`, false, 'note-storage')}
                                    aria-label="delete">
                                    <DeleteSweepOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </StyleCard>
                    <ColorDiv></ColorDiv>
                </MoreWrap>
            </ReadWrap>
        </>
    );
};

export default SeeMore;
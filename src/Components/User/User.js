import React from 'react';
import { faUserPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { CusUser, FaUser, UserName, UserPp } from './User.styled';
import { Container } from '../Sidebar/Sidebar.styled';
import {Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import userPp from '../../Images/user-pp.jpg';
import { loggedUser, logoutUser } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const logoutUserC = () => {
        logoutUser();
        navigate("/");
    }
    
    return (
        <Container>
            <CusUser>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <UserPp src={userPp} alt='' />
                    </IconButton>
                </Tooltip>
                <UserName>Tamema</UserName>
            </CusUser>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                <MenuItem>
                    <FaUser icon={faUser} />
                    My Profile
                </MenuItem>
                <MenuItem>
                    <FaUser icon={faUserPen} />
                    Edit Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={logoutUserC}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default User;
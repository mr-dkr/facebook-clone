import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import AddIcon from '@material-ui/icons/Add';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import { ForumRounded } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from './firebase';

function Header() {
    
    const [{user},dispatch] = useStateValue();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = () => {
        auth.signOut();

    }


    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeRoundedIcon fontSize="large" />

                </div>
                <div className="header__option">

                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">

                    <StorefrontRoundedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SupervisedUserCircleRoundedIcon fontSize="large" />
                </div>

                <div className="header__option">

                    <SportsEsportsOutlinedIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton className="header__rightIcon">
                    <AddIcon />
                </IconButton>
                <IconButton className="header__rightIcon">
                    <ForumRounded />
                </IconButton>
                <IconButton className="header__rightIcon">
                    <NotificationsActiveRoundedIcon />
                </IconButton>
                <IconButton className="header__rightIcon">
                    <ExpandMoreIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                    <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={signOut}>Sign out</MenuItem>
                        </Menu>
                </IconButton>
            </div>
        </div>
    )
}

export default Header

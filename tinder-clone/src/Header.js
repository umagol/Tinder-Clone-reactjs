import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return <div className="header">
        <IconButton>
            <PersonIcon fontSize="larger" className="header_icon" />
        </IconButton>

        <img
            src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg"
            class="header_logo"
            alt="Tinder Logo"
        />
        <IconButton>
            <ForumIcon fontSize="larger" className="header_icon" />
        </IconButton>
    </div>
}
export default Header;
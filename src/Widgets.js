import React from 'react'
import './Widgets.css'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__top">
                <h4>Sponsored</h4>
            </div>
            <div className="widgets__center">
                <h4>Birthdays</h4>
            </div>
            <div className="widgets__bottom">
            <h4>Contacts</h4>

                <div className="widgets__bottomOptions">
                    <div className="widgets__bottomOption">
                        <VideoCallRoundedIcon/>
                    </div>
                    <div className="widgets__bottomOption">
                        <SearchRoundedIcon/>
                    </div>
                    <div className="widgets__bottomOption">
                        <MoreHorizRoundedIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widgets

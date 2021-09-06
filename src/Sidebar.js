import { Avatar } from '@material-ui/core'
import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from './StateProvider';
function Sidebar() {

    const [{user},dispatch] = useStateValue('');

    return (

        <div className="sidebar">
            <SidebarRow src={user?.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalRoundedIcon} title="Covid-19 Information Centre"/>
            <SidebarRow Icon ={PeopleRoundedIcon} title="Friends"/>
            <SidebarRow Icon ={BookmarkRoundedIcon} title="Saved"/>
            <SidebarRow Icon ={PaymentRoundedIcon} title="FacebookPay"/>
            <SidebarRow Icon ={SupervisedUserCircleRoundedIcon} title="Groups"/>
            <SidebarRow Icon ={StorefrontRoundedIcon} title="Marketplace"/>
            <SidebarRow Icon ={OndemandVideoRoundedIcon} title="Videos"/>
            <SidebarRow Icon ={EventRoundedIcon} title="Events"/>
            <SidebarRow Icon ={ExpandMoreRoundedIcon} title="More"/>


        </div>
    )
}

export default Sidebar

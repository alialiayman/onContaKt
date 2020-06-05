import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppHeader from '../shared/components/AppHeader/AppHeader';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import { IHeaderConfig } from '../shared/components/interfaces';

import logo from './logo-dark.png';


const config: IHeaderConfig = {
    logo,
    elevation: 2,
    user: {
        isLoggedIn: false,
    },
    sideMenu: {
        title: 'HajOnSoft',
        items: [
            {
                 title: 'Dashboard', icon: DashboardOutlinedIcon,
                menuItems: [
                    {  title: 'Ticketing' , icon: LabelOutlinedIcon},
                    {  title: 'Rooming' , icon: HotelOutlinedIcon},
                    {  title: 'Other' , icon: ImportExportOutlinedIcon},
                ]
            },
            {
                title: 'Customers', icon: EmojiPeopleOutlinedIcon,
                menuItems: [
                    {  title: 'Prospects', icon: NaturePeopleOutlinedIcon },
                    {  title: 'Confirmed' , icon: PeopleIcon},
                    {  title: 'Archived' , icon: SupervisedUserCircleIcon},
                ]
            },
            {  title: 'Sub Agents' , icon: AssistantOutlinedIcon},
            {  title: 'Ticket Agents' , icon: LoyaltyOutlinedIcon},
            {  title: 'Accounting', icon: AccountTreeOutlinedIcon }
        ]
    },
    buttons: [
        {
           title: 'Ayman Ali', icon: AccountCircleIcon,
            menuItems: [
                { title: 'Manage Account', icon: SettingsOutlinedIcon },
                { title: 'Sign out', icon: ArrowForwardOutlinedIcon },
            ]
        },
    ],
    bookmarks: [
        {title: 'Home', icon: HomeOutlinedIcon },
        {title: 'Features', icon: ArtTrackOutlinedIcon },
        {title: 'Pricing', icon: AttachMoneyOutlinedIcon },
        {title: 'Download', icon: CloudDownloadOutlinedIcon },
        {title: 'Contact', icon: ContactPhoneOutlinedIcon },

    ],
}

const HajonsoftHeader: React.FC = () => {

    const [headerConfig, setHeaderConfig] = useState(config);
    const handleOnSignIn = ()=> {
        setHeaderConfig(prev=> ({...prev,user: {isLoggedIn: true}}));
        setTimeout(() => {
        setHeaderConfig(prev=> ({...prev,user: {isLoggedIn: false}}));
            
        }, 2000);
    }

    return (
        <AppHeader config={headerConfig} onSignIn={handleOnSignIn} />
    )
}

export default HajonsoftHeader;
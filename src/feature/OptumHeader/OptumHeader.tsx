import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppHeader from '../shared/components/AppHeader/AppHeader';
import { IHeaderConfig } from '../shared/components/interfaces';

import logo from './optum-logo-105x30.png';

const config: IHeaderConfig = {
    logo,
    elevation: 0,
    user: {
        isLoggedIn: true,
    },
    sideMenu: {
        title: 'HajOnSoft',
        items: [
            {
                name: 'dashboard', title: 'Dashboard', icon: HelpOutlineOutlinedIcon,
                menuItems: [
                    { name: 'item1', title: 'Ticketing' , icon: HelpOutlineOutlinedIcon},
                    { name: 'item2', title: 'Rooming' , icon: HelpOutlineOutlinedIcon},
                    { name: 'item3', title: 'Exports' , icon: HelpOutlineOutlinedIcon},
                ]
            },
            {
                name: 'item4', title: 'Customers', icon: HelpOutlineOutlinedIcon,
                menuItems: [
                    { name: 'item2', title: 'Prospects', icon: HelpOutlineOutlinedIcon },
                    { name: 'item1', title: 'Confirmed' , icon: HelpOutlineOutlinedIcon},
                    { name: 'item3', title: 'Archived' , icon: HelpOutlineOutlinedIcon},
                ]
            },
            { name: 'item5', title: 'Sub Agents' , icon: HelpOutlineOutlinedIcon},
            { name: 'item5', title: 'Ticket Agents' , icon: HelpOutlineOutlinedIcon},
            { name: 'item5', title: 'Accounting', icon: HelpOutlineOutlinedIcon }
        ]
    },
    toprightButtons: [
        { name: 'image-viewer', title: '', icon: LibraryBooksOutlinedIcon },
        {
            name: 'help', title: 'Help', icon: HelpOutlineOutlinedIcon,
            menuItems: [
                { name: 'instructions', title: 'Instruction ', icon: PlaylistAddCheckOutlinedIcon },
                { name: 'tutorial', title: 'Tutorial', icon: BookOutlinedIcon },
                { name: 'feedback', title: 'Feedback', icon: ArrowForwardOutlinedIcon },
            ]
        },
        {
            name: 'apps', title: 'Optum Applications', icon: AppsOutlinedIcon, width: '350px',
            menuItems: [
                { name: 'pv-match', title: 'PV Match ', icon: PlaylistAddCheckOutlinedIcon },
                { name: 'controled-substance', title: 'Controled Substance', icon: BookOutlinedIcon },
                { name: 'application-name', title: 'Application Name', icon: ArrowForwardOutlinedIcon },
            ]
        },
        {
            name: 'account', title: 'Ayman Ali', icon: AccountCircleOutlinedIcon,
            menuItems: [
                { name: 'manage-account', title: 'Manage Account', icon: SettingsOutlinedIcon },
                { name: 'sign-out', title: 'Sign out', icon: ArrowForwardOutlinedIcon },
            ]
        },
    ],
}


const OptumHeader: React.FC = () => {

    return (
        <AppHeader config={config} />
    )
}

export default OptumHeader;
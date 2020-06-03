import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppHeader from '../shared/components/appHeader/AppHeader/AppHeader';
import { IHeaderConfig } from '../shared/components/appHeader/AppHeader/interfaces';

import logo from './optum-logo-105x30.png';

const config: IHeaderConfig = {
    logo,
    elevation: 0,
    sideMenu: {
        title: 'IRIS Plus',
        items: [
            {
                name: 'accordion-item', title: 'Accordion Item',
                menuItems: [
                    { name: 'item1', title: 'Sub Menu Item 1' },
                    { name: 'item2', title: 'Sub Menu Item 2' },
                    { name: 'item3', title: 'Sub Menu Item 3' },
                ]
            },
            { name: 'item4', title: 'Menu Item' },
            { name: 'item5', title: 'Menu Item' }
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
                { name: 'controled-substance', title: 'Controled Substance', icon: BookOutlinedIcon},
                { name: 'application-name', title: 'Application Name', icon: ArrowForwardOutlinedIcon },
            ]
        },
        {
            name: 'account', title: 'James Johnson', icon: AccountCircleOutlinedIcon,
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
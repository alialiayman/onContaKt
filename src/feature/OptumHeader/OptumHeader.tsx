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
                name: 'accordion-item', title: 'Accordion Item', color: "secondary",
                menuItems: [
                    { name: 'item1', title: 'Sub Menu Item 1', color: "secondary" },
                    { name: 'item2', title: 'Sub Menu Item 2', color: "secondary" },
                    { name: 'item3', title: 'Sub Menu Item 3', color: "secondary" },
                ]
            },
            { name: 'item4', title: 'Menu Item', color: "secondary" },
            { name: 'item5', title: 'Menu Item', color: "secondary" }
        ]
    },
    toprightButtons: [
        { name: 'image-viewer', title: '', icon: LibraryBooksOutlinedIcon, color: "default" },
        {
            name: 'help', title: 'Help', icon: HelpOutlineOutlinedIcon, color: "default",
            menuItems: [
                { name: 'instructions', title: 'Instruction ', icon: PlaylistAddCheckOutlinedIcon, color: "secondary" },
                { name: 'tutorial', title: 'Tutorial', icon: BookOutlinedIcon, color: "secondary" },
                { name: 'feedback', title: 'Feedback', icon: ArrowForwardOutlinedIcon, color: "secondary" },
            ]
        },
        {
            name: 'apps', title: 'Optum Applications', icon: AppsOutlinedIcon, color: "default", width: '350px',
            menuItems: [
                { name: 'pv-match', title: 'PV Match ', icon: PlaylistAddCheckOutlinedIcon, color: "secondary" },
                { name: 'controled-substance', title: 'Controled Substance', icon: BookOutlinedIcon, color: "secondary" },
                { name: 'application-name', title: 'Application Name', icon: ArrowForwardOutlinedIcon, color: "secondary" },
            ]
        },
        {
            name: 'account', title: 'James Johnson', icon: AccountCircleOutlinedIcon, color: "default",
            menuItems: [
                { name: 'manage-account', title: 'Manage Account', icon: SettingsOutlinedIcon, color: "secondary" },
                { name: 'sign-out', title: 'Sign out', icon: ArrowForwardOutlinedIcon, color: "secondary" },
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
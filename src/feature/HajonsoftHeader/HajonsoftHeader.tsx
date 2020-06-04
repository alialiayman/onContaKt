import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import BrightnessAutoOutlinedIcon from '@material-ui/icons/BrightnessAutoOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import AppHeader from '../shared/components/AppHeader/AppHeader';
import { IHeaderConfig } from '../shared/components/interfaces';

import logo from './logo-dark.png';


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
        { name: 'image-viewer', title: '', icon: PeopleOutlineIcon },
        {
            name: 'help', title: 'Help', icon: HelpOutlineOutlinedIcon,
            menuItems: [
                { name: 'instructions', title: 'Instruction ', icon: PlaylistAddCheckOutlinedIcon },
                { name: 'tutorial', title: 'Tutorial', icon: BookOutlinedIcon },
                { name: 'feedback', title: 'Feedback', icon: ArrowForwardOutlinedIcon },
            ]
        },
        {
            name: 'apps', title: 'Optum Applications', icon: FreeBreakfastOutlinedIcon, width: '350px',
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

const HajonsoftHeader: React.FC = () => {

    return (
        <AppHeader config={config} />
    )
}

export default HajonsoftHeader;
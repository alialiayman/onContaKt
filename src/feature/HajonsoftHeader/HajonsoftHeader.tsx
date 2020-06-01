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
import AppHeader from '../shared/components/appHeader/AppHeader/AppHeader';
import { IHeaderConfig } from '../shared/components/appHeader/AppHeader/interfaces';

import logo from './logo-dark.png';



const config: IHeaderConfig = {
    logo,
    elevation: 0,
    sideMenu: {
        title: 'HajOnSoft',
        items: [
            {
                name: 'customers', title: 'Customers', color: "secondary", icon: PeopleOutlineIcon,
                menuItems: [
                    { name: 'haj', title: 'HAJJ', color: "secondary" },
                    { name: 'umrah', title: 'Umrah', color: "secondary" },
                    { name: 'visa', title: 'Visa', color: "secondary" },
                ]
            },
            { name: 'packages', title: 'Packages', color: "secondary", icon: AirplanemodeActiveIcon},
            { name: 'accounting', title: 'Accounting', color: "secondary", icon: AttachMoneyIcon }
        ]
    },
    toprightButtons: [
        {name: 'language', title: 'Language', icon: TranslateOutlinedIcon, color: "inherit", 
        menuItems: [
            { name: 'english', title: 'English', icon: LanguageOutlinedIcon, color: "secondary" },
            { name: 'arabic', title: 'العربيه ', icon: BrightnessAutoOutlinedIcon, color: "secondary" },
            { name: 'french', title: 'Française', icon: FreeBreakfastOutlinedIcon, color: "secondary" },
        ]
    },
        {
            name: 'help', title: 'Help', icon: HelpOutlineOutlinedIcon, color: "inherit",
            menuItems: [
                { name: 'instructions', title: 'Instruction ', icon: PlaylistAddCheckOutlinedIcon, color: "secondary" },
                { name: 'tutorial', title: 'Tutorial', icon: BookOutlinedIcon, color: "secondary" },
                { name: 'feedback', title: 'Feedback', icon: ArrowForwardOutlinedIcon, color: "secondary" },
            ]
        },
        {
            name: 'account', title: 'James Johnson', icon: AccountCircleOutlinedIcon, color: "inherit",
            menuItems: [
                { name: 'manage-account', title: 'Manage Account', icon: SettingsOutlinedIcon, color: "secondary" },
                { name: 'sign-out', title: 'Sign out', icon: ArrowForwardOutlinedIcon, color: "secondary" },
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
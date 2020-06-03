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
    sideMenu: {
        title: 'HajOnSoft',
        items: [
            {
                name: 'customers', title: 'Customers', icon: PeopleOutlineIcon,
                menuItems: [
                    { name: 'haj', title: 'HAJJ' },
                    { name: 'umrah', title: 'Umrah' },
                    { name: 'visa', title: 'Visa' },
                ]
            },
            { name: 'packages', title: 'Packages', icon: AirplanemodeActiveIcon},
            { name: 'accounting', title: 'Accounting', icon: AttachMoneyIcon }
        ]
    },
    toprightButtons: [
        {name: 'language', title: 'Language', icon: TranslateOutlinedIcon, 
        menuItems: [
            { name: 'english', title: 'English', icon: LanguageOutlinedIcon },
            { name: 'arabic', title: 'العربيه ', icon: BrightnessAutoOutlinedIcon },
            { name: 'french', title: 'Française', icon: FreeBreakfastOutlinedIcon },
        ]
    },
        {
            name: 'help', title: 'Help', icon: HelpOutlineOutlinedIcon,
            menuItems: [
                { name: 'instructions', title: 'Instruction ', icon: PlaylistAddCheckOutlinedIcon },
                { name: 'tutorial', title: 'Tutorial', icon: BookOutlinedIcon },
                { name: 'feedback', title: 'Feedback', icon: ArrowForwardOutlinedIcon },
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


const HajonsoftHeader: React.FC = () => {

    return (
        <AppHeader config={config} />
    )
}

export default HajonsoftHeader;
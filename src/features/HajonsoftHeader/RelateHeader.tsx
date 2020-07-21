import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import PeopleIcon from '@material-ui/icons/People';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import React from 'react';
import AppHeader from '../shared/components/AppHeader/AppHeader';
import { IHeaderConfig } from '../shared/components/interfaces';
import logo from './logo-dark.png';



const config: IHeaderConfig = {
    logo,
    elevation: 2,
    sideMenu: {
        title: 'Relate',
        items: [
            {
                title: 'Dashboard', icon: DashboardOutlinedIcon,
                menuItems: [
                    { title: 'Ticketing', icon: LabelOutlinedIcon },
                    { title: 'Rooming', icon: HotelOutlinedIcon },
                    { title: 'Other', icon: ImportExportOutlinedIcon },
                ]
            },
            {
                title: 'Customers', icon: EmojiPeopleOutlinedIcon,
                menuItems: [
                    { title: 'Prospects', icon: NaturePeopleOutlinedIcon },
                    { title: 'Confirmed', icon: PeopleIcon },
                    { title: 'Archived', icon: SupervisedUserCircleIcon },
                    { title: 'Import', icon: MergeTypeOutlinedIcon },
                ]
            },
            { title: 'Sub Agents', icon: AssistantOutlinedIcon },
            { title: 'Ticket Agents', icon: LoyaltyOutlinedIcon },
            { title: 'Accounting', icon: AccountTreeOutlinedIcon }
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
        { route: '/', title: 'Home', icon: HomeOutlinedIcon },
        { route: '/#features', title: 'Features', icon: ArtTrackOutlinedIcon },
        { route: '/#pricing', title: 'Pricing', icon: AttachMoneyOutlinedIcon },
        { route: '/#download', title: 'Download', icon: CloudDownloadOutlinedIcon },
        { route: '/#contact', title: 'Contact', icon: ContactPhoneOutlinedIcon },
    ],
}

const RelatetHeader: React.FC = () => {

    return (
        <AppHeader config={config} />
    )
}

export default RelatetHeader;
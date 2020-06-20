import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import AppHeader from '../features/shared/components/AppHeader/AppHeader';
import logo from './optum-logo-105x30.png'

export default {
  title: 'App Header',
  component: AppHeader,
};


const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      dark: '#00396C',
      main: '#316BBE',
      light: '#83C8FF',
    },
    secondary: {
      main: '#C25608',
    },
    error: {
      main: '##E32315'
    },
    success: {
      main: '#627D32'
    },
    action: {
      selected: 'rgba(0,0,0,0)',
    }
  },
  //@ts-ignore
  gradient: {
    primary: {
      main: `linear-gradient(90deg, #C3373F 0%, #E6A30B 100%)`,
    }
  }
});


const config = {
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


export const optumDefault = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppHeader config={config}/>
    </ThemeProvider>
  )
};

const muiTheme = createMuiTheme();


export const muiDefault = () => {

  return (
    <ThemeProvider theme={muiTheme}>
      <AppHeader config={config}/>
    </ThemeProvider>
  )
};
import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Drawer, Theme, Collapse, List, ListItem, ListItemText, ListItemIcon, Popper, Grow, ClickAwayListener, Divider, Card } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import headerOptum from './headerOptum.png';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FindReplaceOutlinedIcon from '@material-ui/icons/FindReplaceOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    color: '#636363',
    zIndex: theme.zIndex.drawer + 1,
  },
  bottomBorder: {
    height: '2px',
    width: '100%',
    background: 'linear-gradient(90deg, #C3373f 0%, #E6A30B 100%)',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    marginTop: '80px',
    textAlign: 'left',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuList: {
    width: '100%',
  },
  menuItem: {
    '&:hover': {
      borderLeft: '2px solid #C3373f',
      backgroundColor: '#f5f5f5',
      color: '#222222',
    },


  },
  root: {
    height: 180,
  },
  rootList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
}));
const AppHeader = () => {

  const classes = useStyles();
  const [state, setState] = useState({ drawerOpen: false, sidebar: { selectedItem: '', anchorElement: null }, helpMenu: { open: false, anchorElement: null }, appMenu: { open: false, anchorElement: null }, accountMenu: { open: false, anchorElement: null } });


  const handleMenuClose = (e: any) => {
    setState((p) => ({ ...p, helpMenu: { open: false, anchorElement: e.currentTarget }, appMenu: { open: false, anchorElement: e.currentTarget }, accountMenu: { open: false, anchorElement: e.currentTarget }, }));
  };


  const handleToggleHelpButton = (e: any) => {
    setState((p) => ({ ...p, helpMenu: { open: !p.helpMenu.open, anchorElement: e.currentTarget }, appMenu: { open: false, anchorElement: e.currentTarget }, accountMenu: { open: false, anchorElement: e.currentTarget } }));
  };

  const handleToggleAppButton = (e: any) => {
    setState((p) => ({ ...p, appMenu: { open: !p.appMenu.open, anchorElement: e.currentTarget },  helpMenu: { open: false, anchorElement: e.currentTarget }, accountMenu: { open: false, anchorElement: e.currentTarget } }));
  };
  const handleToggleAccountButton = (e: any) => {
    setState((p) => ({ ...p, accountMenu: { open: !p.accountMenu.open, anchorElement: e.currentTarget }, appMenu: { open: false, anchorElement: e.currentTarget }, helpMenu: { open: false, anchorElement: e.currentTarget } }));
  };


  return (
    <React.Fragment>

      <AppBar position="fixed" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar >
          <Grid container justify="space-between" alignItems="center">
            <Grid item justify="flex-start" alignItems="center" >
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setState(p => ({ ...state, drawerOpen: !p.drawerOpen }))}>
                <MenuIcon />
              </IconButton>
              <img src={headerOptum} alt="logo" />
            </Grid>
            <Grid item justify="flex-end">

              <IconButton color="inherit" aria-label="menu">
                <LibraryBooksOutlinedIcon />
              </IconButton>

              <IconButton color="inherit" aria-label="menu">
                <HelpOutlineOutlinedIcon onClick={(e) => handleToggleHelpButton(e)} />
              </IconButton>

              <IconButton color="inherit" aria-label="menu">
                <AppsOutlinedIcon onClick={(e) => handleToggleAppButton(e)} />
              </IconButton>

              <IconButton color="inherit" aria-label="menu">
                <AccountCircleOutlinedIcon onClick={(e) => handleToggleAccountButton(e)} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <div className={classes.bottomBorder}>

        </div>
      </AppBar>

      <Popper open={state.helpMenu.open} anchorEl={state.helpMenu.anchorElement} role={undefined} transition disablePortal style={{ width: '250px', marginLeft: '-200px' }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <ClickAwayListener onClickAway={handleMenuClose}>

              <Card>

                <List style={{ marginTop: '30px' }} component="nav" >
                  <React.Fragment>
                    <Typography variant="h5" style={{ marginLeft: '16px', textAlign: 'left' }}>
                      Help
          </Typography>
                    <Divider />
                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <PlaylistAddCheckOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Instructions" />

                    </ListItem>

                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <BookOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Tutorial" />

                    </ListItem>
                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <ArrowForwardOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Feedback" />

                    </ListItem>
                  </React.Fragment>
                </List>
              </Card>
            </ClickAwayListener>

          </Grow>
        )}
      </Popper>

      <Popper open={state.appMenu.open} anchorEl={state.appMenu.anchorElement} role={undefined} transition disablePortal style={{ width: '250px', marginLeft: '-200px' }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <ClickAwayListener onClickAway={handleMenuClose}>

              <Card>

                <List style={{ marginTop: '30px' }} component="nav" >
                  <React.Fragment>
                    <Typography variant="h5" style={{ marginLeft: '16px', textAlign: 'left' }}>
                      Optum Applications
          </Typography>
                    <Divider />
                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <PlaylistAddCheckOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="PV Match" />

                    </ListItem>

                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <BookOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Controled Substance" />

                    </ListItem>
                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <ArrowForwardOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Application Name" />

                    </ListItem>
                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <ArrowForwardOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Application Name" />

                    </ListItem>
                  </React.Fragment>
                </List>
              </Card>
            </ClickAwayListener>

          </Grow>
        )}
      </Popper>

      <Popper open={state.accountMenu.open} anchorEl={state.accountMenu.anchorElement} role={undefined} transition disablePortal style={{ width: '250px', marginLeft: '-200px' }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <ClickAwayListener onClickAway={handleMenuClose}>

              <Card>

                <List style={{ marginTop: '30px' }} component="nav" >
                  <React.Fragment>
                    <Typography variant="h5" style={{ marginLeft: '16px', textAlign: 'left' }}>
                      James Johnson
          </Typography>
                    <Divider />
                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <SettingsOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Manage Account" />

                    </ListItem>

                    <ListItem button  className={classes.menuItem}>
                      <ListItemIcon>
                        <ArrowForwardOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary="Sign out" />

                    </ListItem>
                   </React.Fragment>
                </List>
              </Card>
            </ClickAwayListener>

          </Grow>
        )}
      </Popper>

      <Drawer anchor="left" open={state.drawerOpen} className={classes.drawer} variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <Typography variant="h5" style={{ marginLeft: '16px' }}>
            IRIS Plus
          </Typography>
          <List
            component="nav"
            className={classes.rootList}
          >
            <ListItem button  className={classes.menuItem}>
              <ListItemIcon>
                <PermContactCalendarOutlinedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Member Search" />

            </ListItem>
            <Collapse in={state.sidebar.selectedItem === "member-search"} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested + ' ' + classes.menuItem}>
                  <ListItemIcon>
                    <SearchOutlinedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Basic" />
                </ListItem>

                <ListItem button className={classes.nested + ' ' + classes.menuItem}>
                  <ListItemIcon>
                    <FindReplaceOutlinedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Advanced" />
                </ListItem>
                <ListItem button className={classes.nested + ' ' + classes.menuItem}>
                  <ListItemIcon>
                    <FindReplaceOutlinedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Eligibility" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.menuItem}>
              <ListItemIcon>
                <LocalHospitalOutlinedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItem>
            <ListItem button className={classes.menuItem}>
              <ListItemIcon>
                <FreeBreakfastIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Relax" />
            </ListItem>
          </List>

        </div>
      </Drawer>
    </React.Fragment>

  )
}

export default AppHeader;
import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Drawer, Theme, Collapse, List, ListItem, ListItemText, ListItemIcon, Popper, Grow, ClickAwayListener, Divider, Card, CardContent, CardHeader } from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { IHeaderConfig, IMenuItem, IButtonState } from './interfaces'
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    color: '#636363',
    height: '54px',
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: '3px solid',
    borderImageSlice: 1,
    borderImageSource: 'linear-gradient(90deg, #C3373f 0%, #E6A30B 100%)',
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
    color: '#636363',
    paddingLeft: '16px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#222222',
    },
  },
  menuItemSelected: {
    borderLeft: '2px solid #C3373f',
    color: '#222222',
  },
  buttonItem: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#222222',
    },
  },
  submenuItem: {
    color: '#636363',
    textAlign: 'left',
    '&root': {
      border: '1px solid silver',
    },
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#222222',
    },
  },
  submenuItemSelected: {
    color: '#222222',
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
const AppHeader = ({ config }: { config: IHeaderConfig }) => {

  const classes = useStyles();
  let history = useHistory();
  const [state, setState] = useState({ drawerOpen: false, sidebar: { selectedItem: '', selectedSubItem: '', anchorElement: null }, buttons: [] });

  const handleButtonMenuClose = (e: any, b: any) => {
    setState((p) => {
      const newState = { ...p };
      newState.buttons.forEach((s: IButtonState) => {
        if (s.name === b.name)
          s.open = false;
      });
      return newState;
    });
  };

  const handleButtonClick = (e: any, button: IMenuItem) => {
    setState((prev: any) => {
      let newButtonsStates: IButtonState[] = [...prev.buttons];
      let buttonState: IButtonState = prev.buttons.find((b: { name: string }) => b.name === button.name)!;
      if (!buttonState) {
        buttonState = { name: button.name, open: true, anchorElement: e.currentTarget };
      } else {
        buttonState.open = !buttonState.open;
        newButtonsStates = newButtonsStates.filter((b: { name: string }) => b.name !== button.name);
      }
      newButtonsStates.push(buttonState);
      return { ...prev, buttons: newButtonsStates };
    });
  };

  const handleButtonItemClick = (e: any, button: IMenuItem, parentButton: IMenuItem) => {
    history.push(button.name);
    setState((p) => {
      const newState = { ...p };
      newState.buttons.forEach((s: IButtonState) => {
        if (s.name === parentButton.name)
          s.open = false;
      });
      return newState;
    });
  };

  const handleSidebarItemClick = (e: any, sidebarItemName: string) => {
    history.push(sidebarItemName);
    setState((p) => {
      if (p.sidebar.selectedItem === sidebarItemName) {
        return { ...p, sidebar: { ...p.sidebar, selectedItem: '', anchorElement: e.currentTarget, selectedSubItem: '' } };
      } else {
        return { ...p, sidebar: { ...p.sidebar, selectedItem: sidebarItemName, anchorElement: e.currentTarget, selectedSubItem: '' } };
      }
    }
    )
  };

  const handleSidebarSubItemClick = (e: any, sidebarSubItemName: string) => {
    history.push(sidebarSubItemName);
    setState((p) => {
      if (p.sidebar.selectedSubItem === sidebarSubItemName) {
        return { ...p, sidebar: { ...p.sidebar, selectedSubItem: '' } };
      } else {
        return { ...p, sidebar: { ...p.sidebar, selectedSubItem: sidebarSubItemName } };

      }
    }
    )
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" color="inherit" elevation={config.elevation || 0} className={classes.appBar}>
        <Toolbar >
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container justify="flex-start" alignItems="center" >
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setState(p => ({ ...state, drawerOpen: !p.drawerOpen }))}>
                  <MenuIcon />
                </IconButton>
                <img src={config.logo} alt="logo" style={{height: '30px'}}/>
              </Grid>
            </Grid>

            <Grid item>
              {config.toprightButtons.map(b =>
                (
                  <React.Fragment key={`k${b.name}`}>
                    <IconButton color="inherit" aria-label={`top button ${b.title}`} key={b.name} onClick={(e) => handleButtonClick(e, b)}>
                      <b.icon color={b.color || "inherit"} />
                    </IconButton>
                    {b.menuItems &&
                      <Popper key={`popper${b.name}`}
                        open={state.buttons.some((p: { name: string, open: boolean }) => b.menuItems && p.name === b.name && p.open)}
                        anchorEl={() => {
                          const btnState: any = state.buttons.find((btn: IButtonState) => btn.name === b.name);
                          if (btnState && btnState.anchorElement) {
                            return btnState.anchorElement!;
                          }
                          return null;
                        }}
                        role={undefined}
                        transition
                        disablePortal
                        style={{ width: b.width || '280px', marginLeft: '-200px' }}>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <ClickAwayListener onClickAway={(e) => handleButtonMenuClose(e, b)}>
                              <Card elevation={1}>
                                <CardHeader title={b.title} style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }} >
                                </CardHeader>
                                <Divider />
                                <CardContent>
                                  <List component="nav" >
                                    <React.Fragment>
                                      {b.menuItems && b.menuItems.map(mi => (
                                        <ListItem key={`${b.name}${mi.name}`}
                                          button
                                          className={classes.buttonItem}
                                          onClick={(e) => handleButtonItemClick(e, mi, b)}
                                        >
                                          <ListItemIcon>
                                            {mi.icon ?
                                              <mi.icon color={mi.color} /> : <ArrowForwardOutlinedIcon color="secondary" />}
                                          </ListItemIcon>
                                          <ListItemText primary={mi.title} />
                                        </ListItem>
                                      ))}
                                    </React.Fragment>
                                  </List>
                                </CardContent>

                              </Card>
                            </ClickAwayListener>
                          </Grow>
                        )}
                      </Popper>
                    }
                  </React.Fragment>

                )
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={state.drawerOpen} className={classes.drawer} variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <Typography variant="h5" style={{ marginLeft: '16px' }}>
            {config.sideMenu.title}
          </Typography>

          <List
            component="nav"
            className={classes.rootList}
          >
            {config.sideMenu.items && config.sideMenu.items.map(it => (
              <React.Fragment key={it.name}>
                <ListItem
                  button
                  className={classes.menuItem + ' ' + (state.sidebar.selectedItem === it.name ? classes.menuItemSelected : '')}
                  onClick={(e) => handleSidebarItemClick(e, it.name)}
                  selected={state.sidebar.selectedItem === it.name}
                >
                  {it.icon &&
                    <ListItemIcon >
                      <it.icon color={it.color} />
                    </ListItemIcon>
                  }
                  <ListItemText primary={it.title} />

                </ListItem>
                <Collapse in={it.menuItems && state.sidebar.selectedItem === it.name} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {it.menuItems?.map(mi => (
                      <ListItem key={mi.name}
                        button
                        className={classes.nested + ' ' + classes.submenuItem + ' ' + (state.sidebar.selectedSubItem === mi.name ? classes.submenuItemSelected : '')}
                        selected={state.sidebar.selectedSubItem === mi.name}
                        onClick={(e) => handleSidebarSubItemClick(e, mi.name)}
                      >
                        {mi.icon &&
                          <ListItemIcon>
                            <ListItemIcon>
                              <mi.icon color={mi.color} />
                            </ListItemIcon>
                          </ListItemIcon>}
                        <ListItemText primary={mi.title} style={{ textAlign: 'left' }} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default AppHeader;
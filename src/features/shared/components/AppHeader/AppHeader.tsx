import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Drawer, Theme, Collapse, List, ListItem, ListItemText, ListItemIcon, Popper, Grow, ClickAwayListener, Divider, Card, CardContent, CardHeader, useScrollTrigger, Slide, Button } from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';
import { HashLink as Link } from 'react-router-hash-link';

import { IHeaderConfig, IMenuItem, IButtonState } from '../interfaces'
import { useHistory } from "react-router-dom";
import useUserState from '../../../SignIn/redux/useUserState';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    color: theme.palette.common.white,
    height: '48px',
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: '2px solid',
    borderImageSlice: 1,
    borderImageSource: 'linear-gradient(90deg, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.light + ' 100%)',
  },
  toolBar: {
    marginTop: '0',
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
    fontSize: '0.875rem',
    paddingLeft: '16px',
  },
  menuItemSelected: {
    borderLeft: '2px solid ' + theme.palette.primary.main,
    color: '#222222',
  },
  buttonItem: {
    '&:hover': {
      color: '#222222',
    },
  },
  submenuItem: {
    color: theme.palette.grey[700],
    textAlign: 'left',
    '&root': {
      border: '1px solid silver',
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
      color: '#222222',
    },
  },
  submenuItemSelected: {
    color: '#222222',
    background: theme.palette.common.white,
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

const AppHeader = ({ config, onSignIn }: { config: IHeaderConfig, onSignIn: any }) => {
  const classes = useStyles();
  const { isLoggedIn } = useUserState();

  let history = useHistory();
  const [state, setState] = useState({ drawerOpen: false, sidebar: { selectedItem: '', selectedSubItem: '', anchorElement: null }, buttons: [] });

  const handleButtonMenuClose = (e: any, b: any) => {
    setState((p) => {
      const newState = { ...p };
      newState.buttons.forEach((s: IButtonState) => {
        if (s.key === (b.name || b.title))
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
        buttonState = { key: button.name || button.title, open: true, anchorElement: e.currentTarget };
      } else {
        buttonState.open = !buttonState.open;
        newButtonsStates = newButtonsStates.filter((b: { key: string }) => b.key !== (button.name || button.title));
      }
      newButtonsStates.push(buttonState);
      return { ...prev, buttons: newButtonsStates };
    });
  };

  const handleButtonItemClick = (e: any, button: IMenuItem, parentButton: IMenuItem) => {
    history.push(button.name || button.title.replace(/ /g, '-').toLowerCase());
    setState((p) => {
      const newState = { ...p };
      newState.buttons.forEach((s: IButtonState) => {
        if (s.key === (parentButton.name || parentButton.title))
          s.open = false;
      });
      return newState;
    });
  };

  const handleSidebarItemClick = (e: any, sidebarItemName: string) => {
    history.push(sidebarItemName.replace(/ /g, '-').toLowerCase());
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
    history.push(sidebarSubItemName.replace(/ /g, '-').toLowerCase());
    setState((p) => {
      if (p.sidebar.selectedSubItem === sidebarSubItemName) {
        return { ...p, sidebar: { ...p.sidebar, selectedSubItem: '' } , drawerOpen: false};
      } else {
        return { ...p, sidebar: { ...p.sidebar, selectedSubItem: sidebarSubItemName }, drawerOpen: false };

      }
    }
    )
  };


  const handleBookmarkClick = (e: any, bm: IMenuItem) => {
    ((bm.name || bm.title) && history.push((bm.route || bm.name || bm.title).replace(/ /g, '-').toLowerCase()));
  }
  const handleSignInClick = (e: any, bm: IMenuItem) => {
    ((bm.name || bm.title) && history.push((bm.name || bm.title).replace(/ /g, '-').toLowerCase()));
    onSignIn();
  }


  return (
    <HideOnScroll>
      <div>
        <AppBar position="fixed" color="inherit" elevation={config.elevation || 0} className={classes.appBar}>
          <Toolbar className={classes.toolBar} variant="dense">
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Grid container justify="flex-start" alignItems="center" >
                  {isLoggedIn && <IconButton edge="start" aria-label="menu" onClick={() => setState(p => ({ ...state, drawerOpen: !p.drawerOpen }))}>
                    <MenuIcon />
                  </IconButton>}
                  <img src={config.logo} alt="logo" style={{ maxHeight: '30px' }} />
                </Grid>
              </Grid>
              {isLoggedIn &&
                <Grid item>
                  {config.buttons.map(b =>
                    (
                      <React.Fragment key={`topButton/${b.name || b.title}`}>
                        <IconButton aria-label={`top button ${b.title}`} key={b.name} onClick={(e) => handleButtonClick(e, b)}>
                          <b.icon />
                        </IconButton>
                        {b.menuItems &&
                          <Popper key={`popper${b.name || b.title}`}
                            open={state.buttons.some((p: IButtonState) => b.menuItems && p.key === (b.name || b.title) && p.open)}
                            anchorEl={() => {
                              const btnState: any = state.buttons.find((btn: IButtonState) => btn.key === b.name || b.title);
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
                                  <Card elevation={1} >
                                    <CardHeader title={b.title} style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }} >
                                    </CardHeader>
                                    <Divider />
                                    <CardContent style={{ padding: '0px' }} >
                                      <List component="nav">
                                        <React.Fragment>
                                          {b.menuItems && b.menuItems.map(mi => (
                                            <ListItem key={`topButton/menuItm/${b.name || b.title}${mi.name || mi.title}`}
                                              button
                                              className={classes.buttonItem}
                                              onClick={(e) => handleButtonItemClick(e, mi, b)}
                                            >
                                              <ListItemIcon>
                                                {mi.icon ?
                                                  <mi.icon /> : <ArrowForwardOutlinedIcon color="secondary" />}
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
              }
              {!isLoggedIn &&
                <Grid container style={{ width: '90%' }} justify="space-around" alignItems="center" wrap="nowrap">

                  {config.bookmarks && config.bookmarks.map(bm =>
                    <React.Fragment>
                      <Grid item style={{ width: '100%' }} >
                        <Link smooth to={bm.route || ''}><bm.icon /> {bm.title}</Link>
                      </Grid>
                    </React.Fragment>
                  )}
                  <Grid container justify="flex-end">
                    <Button variant="contained"
                      color="primary"
                      endIcon={<LockIcon />}
                      size="small" onClick={(e) => handleSignInClick(e, { name: 'sign-in', title: 'Sign In' })}>Sign In</Button>>
                    </Grid>
                </Grid>
              }
            </Grid>
          </Toolbar>
        </AppBar>

        {isLoggedIn && 
        <Drawer anchor="left" open={state.drawerOpen} variant="persistent" >
          <div className={classes.drawerContainer} >
            <Typography variant="h5" style={{ marginLeft: '16px', fontSize: '1.125rem' }}>
              {config.sideMenu.title}
            </Typography>

            <List
              component="nav"
              className={classes.rootList}
            >

              {config.sideMenu.items && config.sideMenu.items.map(it => (
                <React.Fragment key={`${it.name || it.title}`}>
                  <ListItem
                    button
                    className={classes.menuItem + ' ' + (state.sidebar.selectedItem === (it.name || it.title) ? classes.menuItemSelected : '')}
                    onClick={(e) => handleSidebarItemClick(e, it.name || it.title)}
                    selected={state.sidebar.selectedItem === (it.name || it.title)}
                  >
                    {it.icon &&
                      <ListItemIcon >
                        <it.icon />
                      </ListItemIcon>
                    }
                    <ListItemText primary={it.title} />

                  </ListItem>
                  <Collapse in={it.menuItems && state.sidebar.selectedItem === (it.name || it.title)} unmountOnExit>
                    <List component="div" disablePadding>
                      {it.menuItems?.map(mi => (
                        <ListItem key={mi.name || mi.title}
                          button
                          className={classes.nested + ' ' + classes.submenuItem + ' ' + (state.sidebar.selectedSubItem === (mi.name || mi.title) ? classes.submenuItemSelected : '')}
                          selected={state.sidebar.selectedSubItem === (mi.name || mi.title)}
                          onClick={(e) => handleSidebarSubItemClick(e, mi.name || mi.title)}
                        >
                          {mi.icon &&
                            <ListItemIcon>
                              <ListItemIcon>
                                <mi.icon />
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
        }
      </div>
    </HideOnScroll>
  )
}
const HideOnScroll = (props: any) => {
  const scrolledUp = useScrollTrigger();
  const { children } = props;

  return (
    <Slide direction="left" in={!scrolledUp}>
      {children}
    </Slide>
  );
}

export default AppHeader;
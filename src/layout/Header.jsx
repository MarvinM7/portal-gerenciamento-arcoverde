import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 50,
  },
  icon: {
    fontSize: 40,
    color: '#FFF',
    cursor: 'pointer'
  }
}));

const Header = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  const openProfile = () => {
    console.log('open profile')
  }

  const logout = () => {
    dispatch({type: 'LOGOUT'})
  }

  const openLink = (url) => {
    setShowMenu(null);
    history.push(url);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={(e) => setShowMenu(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={showMenu}
            keepMounted
            open={Boolean(showMenu)}
            onClose={() => setShowMenu(null)}
          >
            <MenuItem onClick={() => openLink('/employee/consultation')}>Servidores</MenuItem>
            <MenuItem onClick={() => openLink('/employee/consultation')}>Relatórios</MenuItem>
            <MenuItem onClick={() => openLink('/employee/consultation')}>Declaração</MenuItem>
            <MenuItem onClick={() => openLink('/employee/consultation')}>Financeiro</MenuItem>
          </Menu>
          <img
            src={process.env.PUBLIC_URL + '/imgs/logo fundo branco.png'}
            alt="Logo"
            className={classes.logo}
          />
          <div className={classes.title}></div>
          <PermIdentityIcon
            className={classes.icon}
            style={{marginRight: 20}}
            onClick={openProfile}
          />
          <ExitToAppIcon
            className={classes.icon}
            onClick={logout}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
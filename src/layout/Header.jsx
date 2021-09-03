import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import AppBar from '@material-ui/core/AppBar';
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
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
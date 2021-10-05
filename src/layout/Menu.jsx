import React from 'react';

import { useHistory } from 'react-router-dom';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { HomeOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const MenuDrawer = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const anchor = 'left';
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const menu = [
    {
      id: 1,
      link: '/servidor/consulta',
      title: 'Servidores',
      icon: <PeopleIcon />
    },
    {
      id: 2,
      link: '/',
      title: 'Relatórios',
      icon: <ListAltIcon />
    },
    {
      id: 3,
      link: '/',
      title: 'Declaração',
      icon: <DescriptionIcon />
    },
    {
      id: 4,
      link: '/',
      title: 'Financeiro',
      icon: <AttachMoneyIcon />
    }, {
      id: 5,
      link: '/',
      title: 'Tela inicial',
      icon: <HomeOutlined />
    }
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map(item => {
          return (
            <React.Fragment key={item.id}>
              <ListItem
                className="pointer"
                onClick={() => openLink(item.link)}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              <Divider />
            </React.Fragment>
          )
        })}
      </List>
    </div>
  );

  const openLink = (url) => {
    props.close();
    history.push(url);
  }

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={props.show}
      onClose={props.close}
      onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
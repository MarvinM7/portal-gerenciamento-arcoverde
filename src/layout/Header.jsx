import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
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
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/imgs/wave1.svg`}
        alt={''}
        style={{"maxWidth":"100%", "minWidth": "100%", "zIndex":"-1", "position":"absolute", "opacity": "85%"}}
      />
      <img
        src={`${process.env.PUBLIC_URL}/imgs/wave.svg`}
        style={{"maxWidth":"100%", "minWidth": "100%", "zIndex":"-1", "position":"absolute", "opacity": "85%"}}
      />
      <Row>
        <Col>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/logo.png`}
            style={{marginLeft: 20, marginTop: 20}}
            alt={'Logo'}
          />
        </Col>
        {user
          ?<Col className='text-end'>
              <div style={{marginTop: 10, marginRight: 10}}>
                <PermIdentityIcon
                  style={{fontSize: 50, color: '#FFF'}}
                  onClick={openProfile}
                />
                <ExitToAppIcon
                  style={{fontSize: 50, color: '#FFF'}}
                  onClick={logout}
                />
              </div>
            </Col>
          :null
        }
      </Row>
    </div>
  )
}

export default Header;
// import React from 'react';
// import {Navbar, Nav, NavItem } from 'react-bootstrap';
// import { hot } from 'react-hot-loader'
// import 'theme/globalStyle';
//
// class Header extends React.Component {
//   render() {
//     return (
//       <Navbar collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//           <img src={require('../assets/logooo.PNG')} alt="Logo"/>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <Nav>
//           </Nav>
//           <Nav pullRight>
//             <NavItem eventKey={1} href="/about">
//             About
//             </NavItem>
//             <NavItem eventKey={2} href="/portfolio">
//             Portfolio
//             </NavItem>
//             <NavItem eventKey={3} href="#">
//               Contact
//             </NavItem>
//             <NavItem eventKey={4} href="/Resume-TayyabKamal.pdf">
//               Download CV
//             </NavItem>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   }
// }
// export default hot(module)(Header);


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  title:{
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Kirang Haerang",
    fontSize: 44
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuButton1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  abc: {
    label: "Download"
  },
  list: {
    width: 250,
  },
  drawerIcons: {
    fontFamily: "",
  },
  drawerText: {
    fontSize: 24,
  },
};

class Header extends React.Component {

  state = {
      drawer: false,
      about: false,
      portfolio: false,
      contact: false,
    };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.drawerIcons}>
                <i class="fas fa-info-circle"></i>
              </Icon>
            </ListItemIcon>
            <ListItemText  className={classes.drawerText} primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.drawerIcons}>
                <i class="fas fa-folder"></i>
              </Icon>
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.drawerIcons}>
                <i class="fas fa-phone"></i>
              </Icon>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.drawerIcons}>
                <i class="fas fa-arrow-circle-down"></i>
              </Icon>
            </ListItemIcon>
            <ListItemText primary="Download Resume" />
          </ListItem>
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar color="primary">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('drawer', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={this.state.drawer}
              onClose={this.toggleDrawer('drawer', false)}
              onOpen={this.toggleDrawer('drawer', true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('drawer', false)}
                onKeyDown={this.toggleDrawer('drawer', false)}
              >
                {sideList}
              </div>
            </SwipeableDrawer>
            <h4 className={classes.title}>M Tayyab Kamal</h4>
            <div className={classes.menuButton1}>
              <IconButton color="inherit" aria-label="Menu">
                <i class="fab fa-instagram"></i>
              </IconButton>
              <IconButton color="inherit" aria-label="Menu">
                <i class="fab fa-github"></i>
              </IconButton>
              <IconButton color="inherit" aria-label="Menu">
                <i class="fab fa-twitter"></i>
              </IconButton>
              <IconButton color="inherit" aria-label="Menu">
                  <i class="fab fa-linkedin-in"></i>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Comonents
import LeftDrawer from './left-drawer.jsx';

//Actions
// import { logout } from '../../actions/user/logout';

// Styles
import './nav-bar.scss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import FaceIcon from 'material-ui-icons/Face';
import Menu, { MenuItem } from 'material-ui/Menu';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      anchorEl: undefined,
      menuOpen: false
    };
  }

  toggleDrawer(){
    this.setState({
      open: !this.state.open
    });
  }

  handleDropdownMenu = event => {
    this.setState({ menuOpen: true, anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({open: false});
  }

  handleDropdownClose() {
    this.setState({menuOpen: false});
  }

   logout() {
    this.setState({menuOpen: false});

    this.props.actions.logout();
  }

  render(){
    return (
      <div className='nav-bar'>
        <AppBar position="fixed">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={() => this.toggleDrawer()}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        <LeftDrawer open={this.state.open} handleClose={this.handleClose.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(){
    return {
        //loggedInUser: state.loggedInUser
    };
}

function matchDispatchToProps(){
    return {
        // actions: bindActionCreators({ logout: logout }, dispatch)
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
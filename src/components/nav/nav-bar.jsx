// Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Comonents
import LeftDrawer from './left-drawer.jsx';

//Actions
// import { logout } from '../../actions/user/logout';

//Services
import themeService from '../../services/theme/theme-service';

// Styles
import './nav-bar.scss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class NavBar extends React.Component {
  teamColors = null;

  constructor(props){
    super(props);

    this.state = {
      open: false,
      anchorEl: undefined,
      menuOpen: false
    };

    this.themeService = themeService;
    this.teamColors = this.themeService.getTeamColors();
  }

  toggleDrawer(){
    this.setState({
      open: !this.state.open
    });

    this.teamColors = this.themeService.getTeamColors();
  }

  handleClose() {
    this.setState({open: false});
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
        <LeftDrawer teamColors={this.teamColors} open={this.state.open} handleClose={this.handleClose.bind(this)} />
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
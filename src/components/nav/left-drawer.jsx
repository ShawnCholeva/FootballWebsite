// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './left-drawer.scss';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MailIcon from 'material-ui-icons/Mail';

export default class LeftDrawer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        open: false
    };
}

handleClose() {
    this.props.handleClose();
}

render() {
    return (
        <div >
            <Drawer
                docked={false}
                width={200}
                open={this.props.open}
                onRequestClose={() => this.handleClose()}
            >
                <List className="drawerContainer" style={{backgroundColor: this.props.teamColors.primary}} disablePadding>
                    <Link to="/teams" style={{textDecoration: 'none'}} onClick={() => this.handleClose()}>
                        <ListItem className="menuItemContainer">
                            <ListItemIcon>
                                <MailIcon style={{color: this.props.teamColors.secondary}}/>
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography className="menuItemText" style={{color: this.props.teamColors.secondary}}>Teams</Typography>}/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
        );
    }
}
// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './left-drawer.scss';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MailIcon from 'material-ui-icons/Mail';

export default class LeftDrawer extends React.Component {
constructor(props) {
    super(props);
    this.state = {open: false};
}

handleClose() {
    this.props.handleClose();
}

render() {
    return (
        <div>
            <Drawer
                docked={false}
                width={200}
                open={this.props.open}
                onRequestClose={() => this.handleClose()}
            >
                <List disablePadding>
                    <Link to="/dashboard" onClick={() => this.handleClose()}>
                        <ListItem button>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Screen 1" />
                        </ListItem>
                    </Link>
                    <Link to="/ico" onClick={() => this.handleClose()}>
                        <ListItem button>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Screen 2" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
        );
    }
}
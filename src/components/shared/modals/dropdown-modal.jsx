import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

//Components
//import Dropdown from '../dropdowns/dropdown.jsx';

export default class DropdownModal extends Component {

  selection = null;

  constructor(props) {
    super(props);
    this.state = {
      open: true
    };

    this.options = this.props.modalConfig;
    // This is the collection being passed in for the dropdown
    //console.log(this.options.items);
  }

  handleRequestClose = (didSelect) => {
    this.props.onResult(didSelect, this.selection);
    this.setState({ open: false });
  };

  //TODO: Refactor this with Dropdown and set selection on dropdown change instead of this
  setSelection(selection){
      this.selection = selection;
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.options.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.options.description}
            </DialogContentText>
            {/*<Dropdown />*/}
            <Button onClick={() => this.setSelection('Saints')} color="primary">
              Saints
            </Button>
            <Button onClick={() => this.setSelection('Cowboys')} color="primary">
              Cowboys
            </Button><Button onClick={() => this.setSelection('Falcons')} color="primary">
              Falcons
            </Button><Button onClick={() => this.setSelection('Steelers')} color="primary">
              Steelers
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleRequestClose(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleRequestClose(true)} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
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
  state = {
    open: true
  };

  handleRequestClose = (picked) => {
      if(picked){
        const teamName = 'Cowboys';
        var cols = document.getElementsByClassName('replaceable-image');
        for(var i=0; i<cols.length; i++) {
            cols[i].style.backgroundImage = `url("src/images/${teamName}/${teamName}_Home_${i + 1}.jpg")`;
            cols[i].style.opacity = '0.65';
        }
      }else {
          const teamName = 'Saints';
            var cols = document.getElementsByClassName('replaceable-image');
        for(var i=0; i<cols.length; i++) {
            cols[i].style.backgroundImage = `url("src/images/${teamName}/${teamName}_Home_${i + 1}.jpg")`;
            cols[i].style.opacity = '0.65';
        }
      }
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {'Select your favorite team!'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This will customize the site to your favorite team!  If you decide not to pick one, we will just default
              it to my favorite team.  The Saints!
            </DialogContentText>
            {/*<Dropdown />*/}
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
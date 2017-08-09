// Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Components
import DropdownModal from '../../shared/modals/dropdown-modal.jsx';

// Styles
import './home.scss';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       favoriteTeam: localStorage.getItem('favTeam')
    };

    if(this.state.favoriteTeam === null){
      //console.log(this.state.favoriteTeam);
    }else {
      //console.log(this.state.favoriteTeam);
    }
  }

  render() {
    const favoriteTeam = this.state.justRegistered;
    console.log(favoriteTeam);
    return (
            <div>
              {!favoriteTeam ? <DropdownModal /> : null}
              <div className="section1">
              <div className="bgimg-1 replaceable-image">
                <div className="caption">
                  <span className="border">SCROLL DOWN</span>
                </div>
              </div>
              </div>

              <div className="darkContainer">
                <h3 className="alignTextCenter">Parallax Demo</h3>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
              </div>

              <div className="bgimg-2 replaceable-image">
                <div className="caption">
                  <span className="border transparentContainer">LESS HEIGHT</span>
                </div>
              </div>

              <div style={{position:'relative'}}>
                <div className="darkContainer">
                  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
              </div>

              <div className="bgimg-3 replaceable-image">
                <div className="caption">
                  <span className="border transparentContainer">SCROLL UP</span>
                </div>
              </div>

              <div style={{position:'relative'}}>
                <div className="darkContainer">
                  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
              </div>

              <div className="bgimg-4 replaceable-image">
                <div className="caption">
                  <span className="border transparentContainer">THE END</span>
                </div>
              </div>
            </div>
    );
  }
}

function mapStateToProps(){
    return {
        //registerUser: state.registerUser
    };
}

export default connect(mapStateToProps)(Home);
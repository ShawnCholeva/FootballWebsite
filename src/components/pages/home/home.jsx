// Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Components
import DropdownModal from '../../shared/modals/dropdown-modal.jsx';
import themeService from '../../../services/theme/theme-service';

// Styles
import './home.scss';

class Home extends React.Component {

  favoriteTeam = 'Saints';

  teams = [];

  constructor(props){
    super(props);
    this.state = {
       favoriteTeam: localStorage.getItem('favTeam')
    };

    this.themeService = themeService;
    this.teams = this.themeService.getTeamNames();

    this.modalOptions = {
      title: 'Select your favorite team!',
      description: `This will customize the site to your favorite team! 
                    If you decide not to pick one, we will just default it to my favorite team.  The Saints!`,
      items: this.teams
    };
  }

  componentDidMount(){
    if(this.state.favoriteTeam ){
      this.themeService.addTeamThemeToElements(true);
    }
  }

  updateTeamTheme(didSelect, team){
    if(didSelect && team != null){
      this.favoriteTeam = team;
    }

    localStorage.setItem('favTeam', this.favoriteTeam);

    this.themeService.addTeamThemeToElements();
  }

  render() {
    const favoriteTeam = this.state.favoriteTeam;

    return (
            <div>
              {favoriteTeam ? <DropdownModal modalConfig={this.modalOptions} onResult={(didSelect, team) => this.updateTeamTheme(didSelect, team)}/>
                             : null}
              <div className="section1">
                <div className="bgimg-1 replaceable-image">
              </div>
              </div>

              <div className="darkContainer">
                <h3 className="alignTextCenter">Parallax Demo</h3>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
              </div>

              <div className="section2">
                <div className="bgimg-2 replaceable-image">
                  {/* <div className="caption">
                    <span className="border transparentContainer">LESS HEIGHT</span>
                  </div> */}
                </div>
              </div>

              <div style={{position:'relative'}}>
                <div className="darkContainer">
                  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
              </div>

              <div className="section3">
                <div className="bgimg-3 replaceable-image">
                  {/* <div className="caption">
                    <span className="border transparentContainer">SCROLL UP</span>
                  </div> */}
                </div>
              </div>

              <div style={{position:'relative'}}>
                <div className="darkContainer">
                  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
              </div>

              <div className="section4">
                <div className="bgimg-4 replaceable-image">
                  {/* <div className="caption">
                    <span className="border transparentContainer">THE END</span>
                  </div> */}
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
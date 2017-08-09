// Dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import NavBar from './nav/nav-bar.jsx';
import Home from './pages/home/home.jsx';
import NotFound from './routes/not-found.jsx';

class Root extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home}/>
                {/*<Route path='/register' exact component={Register}/>*/}
                <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(){
    return {
        //loggedInUser: state.loggedInUser
    };
}

export default connect(mapStateToProps)(Root);
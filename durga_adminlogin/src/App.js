
import React, { Component } from 'react'
import Adminlogin from "./components/Adminlogin";
import Forgotpassword from "./components/Forgotpassword";
import { bindActionCreators } from "redux";
import * as adminActions from "./actionCreators/adminlogin";
import './App.css';
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from "react-redux";

class App extends Component {

  handleAdminLogin = (loginUser) => {
    this.props.actions.login(loginUser);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact
            path="/"
            render={props =>
              <Adminlogin
                handleAdminLogin={this.handleAdminLogin}
                url={this.props.url}
              />} />
          <Route path="/Forgotpassword"
            render={props => (
              <Forgotpassword />
            )}
          />
          <Route path="/Adminlogin"
            render={props => (
              <Adminlogin />
            )
            }
          />
        </Switch>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    url: state.url
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adminActions, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

import React, { Component } from 'react';
import {  Route, Switch ,Redirect} from 'react-router-dom';

// import PaginationAssign from "./PaginationAssign/PaginationAssign";
import Resume from "./Component/SignIn/Resume" ;
import Blog from "./Component/Profile/Profile";
import ADD from "./Component/Addnote/ADD"
class App extends Component {
  
  
  render() {
    return (
      <div >
        {/* <PaginationAssign  students={this.state.students} /> */}
       
        {/* <ADD /> */}
      <Switch>
        <Route  exact path="/" component={Resume} />
        <Route  path="/resume" component={Resume} />
        <Redirect from='/resume' to="/blog" />  
        {/* <Redirect  to="/" /> */}
        <Route path="/blog" component={Blog}/>
      </Switch> 
      {/* <Footer/> */}
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import NavBar from '../components/Navigation/NavBar';

import { Route } from 'react-router-dom';

import AboutMe from '../components/AboutMe/AboutMe';
import Stories from '../components/Stories/Stories';
import Software from '../components/Software/Software';



class App extends Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <Route path="/about" exact component={AboutMe}/>
        <Route path="/stories" exact component={Stories}/>
        <Route path="/software" exact component={Software}/>

      </div>
    );
  }
}

export default App;



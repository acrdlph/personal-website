import React, { Component, Suspense } from 'react';
import NavBar from '../components/Navigation/NavBar';
import classes from './App.module.css';

import { Route, Switch } from 'react-router-dom';

import Software from '../components/Software/Software';
import Meet from '../components/Meet/Meet';

const Stories = React.lazy(() => import('../components/Stories/Stories'))
const About = React.lazy(() => import('../components/About/About'))


class App extends Component {

  render() {
    return (
      <React.Fragment>       
        <NavBar />
        <div className={classes.main}>
        <Switch>
          <Route 
            path="/about" 
            render={()=> (
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            )} />
          <Route 
            path="/stories" 
            render={()=> (
              <Suspense fallback={<div>Loading...</div>}>
                <Stories />
              </Suspense>
            )} />
          <Route path="/software" component={Software} />
          <Route path="/meet" exact component={Meet} />
        </Switch>
        <p>
          {this.getVirtualParams(1,1)}
        </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;



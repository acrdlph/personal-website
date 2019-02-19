import React, { Component, Suspense } from 'react';
import NavBar from '../components/Navigation/NavBar';
import classes from './App.module.css';

import { Route, Switch } from 'react-router-dom';

import About from '../components/About/About';
import Software from '../components/Software/Software';
import Meet from '../components/Meet/Meet';

const Stories = React.lazy(() => import('../components/Stories/Stories'))

class App extends Component {


// the scripts Logan wrote help us get m and n from the bancor formula
// using those values we can now get the minimum "virtualMint" that initializes the curve on a negligibly higher level
// (without distorting the slope) in order to circumvent the problem that Bancor formula doesn't work when supply and reserve equal 0.
getVirtualParams = (m, n) => {
  // first approach (for most cases, because usually curves start flat): 
  // A. set vReserve to the smallest acceptable value which is 1 (= 1 x fullERC20 token/10^18)
  // B. set vSupply to the token amount which if bought would have led to that reserve being in the contract
  // (again expressed in granular units of fullERC20/10^18)
  let vReserve = 1;
  let vSupply = (((n+1)/(m*10**18))^(1/(n+1)))*10**18; // this can be reverse calculated by setting the integral of a mx^n function to 1 with the appropriate decimals
  // but if the curve is very steep, the token amount needed to get 1 unit of reserve could be smaller than 1!
  // then we need to go the other way around:
  // A) set the virtual token amount to the smallest possible acceptable value namely 1
  // B) calculate the corresponding reserve, which will necessarily be bigger than 1 since the price function is always increasing (m>0):
  // if (vSupply < 1) {
  //   vSupply = 1;
  //   vReserve = (m/(n+1))*(1/10**18)^(n+1);
  // }
  console.log('vSupply: ', vSupply, 'vReserve: ', vReserve);
}


  render() {
    return (
      <React.Fragment>       
        <NavBar />
        <div style={{background: 'yellow', display: 'flex', fontSize: '60px', fontWeight: 'bold', paddingTop: '30px', paddingBottom: '20px', textAlign: 'center'}}>
        <p style={{ margin: 'auto'}}>
          UNDER CONSTRUCTION 🚧
        </p>
        </div>

        <div className={classes.main}>
        <Switch>
          <Route path="/about" exact component={About} />
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



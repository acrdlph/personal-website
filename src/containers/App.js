import React, { Component } from 'react';
import classes from './App.module.css'


class App extends Component {
  render() {
    return (
      <div className="">
        <header className={classes['main-header']}>

          <div>
            <h1>
              Achill Rudolph
            </h1>
          </div>

          <nav className={classes['main-nav']}>
            <ul className={classes['main-nav__items']}>
              <li className={classes['main-nav__item']}>
                <a href="packages/index.html">About Me</a>
              </li>
              <li className={classes['main-nav__item']}>
                <a href="customers/index.html">Storytelling</a>
              </li>
              <li className={classes['main-nav__item']}>
                <a href="start-hosting/index.html">Software & Entrepreneurship</a>
              </li>
              <li className={classes['main-nav__item']}>
                <a href="start-hosting/index.html">Meet Me</a>
              </li>
              <li className={classes['main-nav__item']}>
                <a href="start-hosting/index.html">Token</a>
              </li>
              <li className={classes['main-nav__item']}>
                <a href="start-hosting/index.html">Wall</a>
              </li>
            </ul>
          </nav>
        </header>


      </div>
    );
  }
}

export default App;



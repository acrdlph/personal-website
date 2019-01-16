import React from 'react';
import classes from './Stories.module.css'
import SideMenu from '../SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import Films from './Films/Films';

const menuItems = [
  {
    title: {
      name: 'Film',
      titleLink: ''
    },
    items: [
      {
        name: 'Infiniti',
        link: 1
      },
      {
        name: 'Better Life',
        link: 2
      },
      {
        name: 'El Nacimiento del Rio Hacha',
        link: 3
      },
      {
        name: 'Rs.50',
        id: 4
      }
    ]
  },
  {
    title: {
      name: 'YouTube',
      titleLink: ''
    },
    items: [
      {
        name: 'Season 2',
        id: 4
      },
      {
        name: 'What A Wonderful Day',
        id: 5
      },
      {
        name: 'Challenge Challenge',
        id: 6
      }
    ]
  },
  {
    title: {
      name: 'LiveStream',
      titleLink: ''
    },
    items: [
      {
        name: 'Twitch',
        id: 4
      }
    ]
  }
]


const stories = (props) => (
  <React.Fragment>
    <SideMenu items={menuItems} />
    <Route path="/stories/film/:filmId" component={Films} />
  </React.Fragment>
  //   <div>

  //     <div>
  //       <h3>
  //         Film
  //       </h3>
  //       <div>
  //         <p>
  //           infiniti
  //         </p>
  //         <p>
  //           better life
  //         </p>
  //         <p>
  //           El Nacimiento <br/>del Rio Hacha
  //         </p>
  //         <p>
  //           Rs. 50
  //         </p>
  //       </div>
  //     </div>

  //     <div>
  //       <h3>
  //         Youtube
  // </h3>
  //       <div>
  //         <p>
  //           Season 2
  //   </p>
  //   <p>
  //           Wonderful Days
  //   </p>
  //   <p>
  //           Challenge Challenge
  //   </p>
  //       </div>
  //     </div>

  //     <div>
  //       <h3>
  //         Livestream
  // </h3>
  //       <div>
  //         <p>
  //           hi this is me.
  //   </p>
  //       </div>
  //     </div>

  //   </div>
)

export default stories;
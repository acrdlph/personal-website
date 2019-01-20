import React from 'react';
import classes from './Stories.module.css'
import SideMenu from '../SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import Films from './Films/Films';
import Exclusive from './Films/Film/Exclusive';

const menuItems = [
  {
    title: {
      name: 'Film',
      titleLink: ''
    },
    items: [
      {
        name: 'Infiniti',
        link: 249237368
      },
      {
        name: 'Better Life',
        link: 184543907
      },
      {
        name: 'El Nacimiento del Rio Hacha',
        link: 164152908
      },
      {
        name: 'Rs. 50',
        link: 150431419
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
      name: 'Backstage',
      titleLink: ''
    },
    items: [
      {
        name: 'Exclusive Premium Content',
        link: 'exclusive'
      }
    ]
  }
]


const stories = (props) => (
  <React.Fragment>
    <SideMenu items={menuItems} />
    <Route path="/stories/backstage/exclusive" exact component={Exclusive}/>
    <Route path="/stories/film/:filmId" component={Films} />
  </React.Fragment>
)

export default stories;
import React from 'react';
import classes from './About.module.css'
import SideMenu from '../SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import Chapter from './Chapter/Chapter';
import Intro from './Intro';


const menuItems = [
  {
    title: {
      name: 'My story',
      titleLink: 'mystory'
    },
    items: [
      {
        name: 'Origins',
        link: 'origins'
      },
      {
        name: 'School',
        link: 'school'
      },
      {
        name: 'My first real job',
        link: 'my-first-real-job'
      },
      {
        name: 'The academic dream',
        link: 'the-academic-dream'
      },
      {
        name: 'Getting off-track',
        link: 'getting-off-track'
      },
      {
        name: 'A new start',
        link: 'a-new-start'
      },
      {
        name: 'Humble beginnings',
        link: 'humble-beginnings'
      },
      {
        name: 'I am a developer now?!',
        link: 'i-am-a-developer-now'
      },
      {
        name: 'Hitting rock-bottom',
        link: 'hitting-rock-bottom'
      },
      {
        name: 'No endings in life',
        link: 'no-endings-in-life'
      }
    ]
  }
]

const about = (props) => (
  <React.Fragment>
    <SideMenu items={menuItems} />
    <Route path="/about/mystory" exact component={Intro} />
    <Route path="/about/mystory/:chapter" exact component={Chapter} />
  </React.Fragment>
)

export default about;

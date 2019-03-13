import React from 'react';
import classes from './Stories.module.css'
import SideMenu from '../SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import Films from './Films/Films';
import YouTube from './YouTube/YouTube';
import Exclusive from './Films/Film/Exclusive';
import ShowReel from './Films/ShowReel';


const menuItems = [
  {
    title: {
      name: 'Film',
      titleLink: 'film'
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
        name: 'How to Build a Startup in 20 hours',
        link: 1
      },
      {
        name: 'Ocean Drive',
        link: 169782539
      },
      {
        name: 'How To Have A Good Life',
        link: 168545612
      },
      {
        name: 'El Nacimiento del Rio Hacha',
        link: 164152908
      },
      {
        name: 'Casino Royal',
        link: 166138135
      },
      {
        name: 'Rs. 50',
        link: 150431419
      },
      {
        name: 'Continua',
        link: 164646926
      }
      ,
      {
        name: 'Nam',
        link: 167770804
      },
      {
        name: `BERLIN A PARIS DE L'AUTO-STOP`,
        link: 127055578
      },
      {
        name: `Eat Sleep Rave`,
        link: 101383540
      }
    ]
  },
  {
    title: {
      name: 'YouTube',
      titleLink: 'youtube'
    },
    items: [
      {
        name: 'Season 2',
        link: 'season2'
      },
      {
        name: 'Public Transport 3.0',
        link: 'publictransport30'
      },
      {
        name: 'Challenge Challenge',
        link: 'challengechallenge'
      },
      {
        name: 'What A Wonderful Day',
        link: 'whatawonderfulday'
      },
      {
        name: 'Off-day',
        link: 'offday'
      }
    ]
  },
  {
    title: {
      name: 'Backstage',
      titleLink: 'backstage'
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
    <Route path="/stories/film" exact component={ShowReel} />
    <Route path="/stories/film/:filmId" exact component={Films} />
    <Route path="/stories/youtube/:seasonId" exact component={YouTube} />
  </React.Fragment>
)

export default stories;
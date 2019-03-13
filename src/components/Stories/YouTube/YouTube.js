import React from 'react';

const seasons = [
  {id: 'challengechallenge',
  episodes: ['dA5S1PiUTds', 'EfSvMMoiwZM']}
];


const youTube = (props) => {
    const season = seasons.find(el => el.id == props.match.params.seasonId)
    const episodes = season.episodes.map(el => <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>);
    return (
        <div style={{ width: '100%' }}>
          {episodes}       
        </div>
    )
}

export default youTube;
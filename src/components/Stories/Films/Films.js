import React from 'react';
import classes from './Films.module.css';
import Film from './Film/Film';

//overview filmId: 171234733
const film = (props) => {
    console.log(props.match.params.filmId)
    return (
        <div style={{ width: '100%' }}>
            <Film id={props.match.params.filmId} />
            {/* <Film url="https://player.vimeo.com/video/249237368" />
            <Film url="https://player.vimeo.com/video/184543907" />
            <Film url="https://player.vimeo.com/video/168545612" />
            <Film url="https://player.vimeo.com/video/164152908" />
            <Film url="https://player.vimeo.com/video/169782539" />
            <Film url="https://player.vimeo.com/video/167770804" />
            <Film url="https://player.vimeo.com/video/166138135" />
            <Film url="https://player.vimeo.com/video/150431419" /> */}
        </div>
    )
}

export default film;
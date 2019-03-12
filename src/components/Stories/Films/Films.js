import React from 'react';
import classes from './Films.module.css';
import Film from './Film/Film';

//overview filmId: 171234733
const film = (props) => {
    return (
        <div style={{ width: '100%' }}>
            <Film id={props.match.params.filmId} />
        </div>
    )
}

export default film;
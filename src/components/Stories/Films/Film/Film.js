import React from 'react';
import classes from './Film.module.css'

const film = (props) => (
    <div className={classes.film}>
        <div>
            <iframe
                src={"https://player.vimeo.com/video/" + props.id}
                width="768"
                height="432"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true">
            </iframe>
        </div>

        <div className={classes.film__description}>
            <p className={classes.film__title}>
                {props.filmtitle} hallo
            </p>
            <p>
                {props.filmDescription} das ist die beschreibung und wenn sie etwas laenger wird, dann sieht es so aus.
             </p>
        </div>
    </div>

)

export default film;
import React from 'react';
import classes from './Film/Film.module.css'

const showReel = (props) => (
    <div className={classes.film}>

        <div className={classes.film__description}>
            <p className={classes.film__title}>
                test
            </p>
            <p>
                Intro text..
             </p>
        </div>
        <div>
            <iframe
                src={"https://player.vimeo.com/video/" + '171234733'}
                width="768"
                height="432"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true">
            </iframe>
        </div>

    </div>

)

export default showReel;
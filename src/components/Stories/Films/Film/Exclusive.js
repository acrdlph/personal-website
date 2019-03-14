import React from 'react';
import classes from './Film.module.css'

const exclusive = (props) => (
    <div className={classes.film}>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <iframe src="http://localhost:3001/#/production/0xf7c037215b858aB713B98fB572eB634c60e4c8cb" width="900" height="500"></iframe>
        </div>
    </div>

)

export default exclusive;
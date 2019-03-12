import React from 'react';
import classes from './Film.module.css'
import axios from 'axios';

class Film extends React.Component {
    state = {
        loadedPost: null,
        title: '',
        description: '',
        id: ''
    }

    componentDidMount = () => {
        this.getFilm();
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.id !== prevProps.id) {
            this.getFilm();
        }
    }

    getFilm = () => {
        const instance = axios.create({
            baseURL: 'https://api.vimeo.com/videos/',
            headers: { 'Authorization': 'Bearer ' + '48dc7f7b3a8dd5841bb7f64cdae34cc2' }
        })
        instance.get(`/${this.props.id}`).then(response => {
            this.setState({ loadedPost: true, description: response.data.description, title: response.data.name });
        });
    }

    render() {

        return (
            <div className={classes.film}>

                <div className={classes.film__description}>
                    <p className={classes.film__title}>
                        {this.state.title}
                    </p>
                    <p>
                        {this.state.description}
                    </p>
                </div>
                <div>
                    <iframe
                        src={"https://player.vimeo.com/video/" + this.props.id}
                        width="768"
                        height="432"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true">
                    </iframe>
                </div>

            </div>
        )
    }

}

export default Film;
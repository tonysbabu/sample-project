import React, {Component} from 'react';

export default class Button extends Component {

    componentDidMount() {
        console.log('component mounted');
    }

    render() {
        return (
            <button type='button' style={{'width': '50px', height: '50px'}}>Click</button>
        )

    }
    }    
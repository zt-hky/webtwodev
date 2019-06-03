import React, { Component } from 'react';
import Information from '../components/Information';
import Relation from '../components/Relation';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <Relation></Relation>
                    <Information></Information>
                </footer>
            </div>
        );
    }
}

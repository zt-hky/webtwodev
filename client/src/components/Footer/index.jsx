import React, { Component } from 'react';
import Information from '../Information';
import Relation from '../Relation';


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

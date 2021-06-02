import React, { Component } from 'react';
import { CvItems } from './CvItems';

export default class Cv extends Component {
    render(){
        return (
            <div id="timeline-content">
                <h1>Lebenslauf</h1>
                <ul className="timeline">
                    {CvItems.map((item, index) =>{
                        return(
                            <li key={index} className={item.style} data-date={item.date}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
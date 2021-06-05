import React, { Component } from 'react';
import { CvItems } from './CvItems';

export default class Cv extends Component {
    render(){
        return (
            <div>
                <div className="typewriter">
                    <h1>Lebenslauf</h1>
                </div>
                <div id="timeline-content">
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
            </div>
        )
    }
}
import React, { Component } from 'react';
import { CvItems } from './CvItems'

class Cv extends Component {
    render(){
        return (
            <div>
                <ul>
                    {CvItems.map((item, index) =>{
                        return(
                            <li key={index} className={index % 2 === 0 ? item.styleLeft : item.styleRight}>
                            <h1>{item.title}</h1>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Cv
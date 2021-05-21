import React, { Component } from 'react';
import { PortfolioItems } from './PortfolioItems';
import './Portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                {PortfolioItems.map((item, index) =>{
                    return(
                        <div key={index} className="image">
                            <img src={item.image} alt="placeholder" className=""/>
                            <div className="overlay">
                                <a className="portfolio-title">{item.title}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

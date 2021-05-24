import React, { Component } from 'react';
import { PortfolioItems } from './PortfolioItems';
import './Portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div /*class="portfolio"*/>
                <div className="portfolio">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="images/img_avatar.png" alt="Avatar"/>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect und Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="images/img_avatar.png" alt="Avatar" />
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect und Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="images/img_avatar.png" alt="Avatar"/>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect und Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>  
                </div>
            </div>
        )
    }
}

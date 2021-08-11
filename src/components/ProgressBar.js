import React, { Component } from 'react';
import { SkillItems } from './SkillItems';
import {useState, useEffect } from 'react';

export default class ProgressBar extends Component {

    

    render(){
        /** Variables Progress Bar*/
        const percentComplete = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
        let strokeWidth = 5;
        const colors = { progress: 'red', base: '#eee' };
        const box = 100
        const radius = (box - strokeWidth) / 2
        const circumference = radius * 2 * Math.PI
        const offset = calculateOffset();


        // Completion Radial Progress Bar for each Skill
        function calculateOffset(){
            let offset = [];
            for(let i = 0; i <= percentComplete.length; i++){
                offset[i] = circumference - circumference / 100 * percentComplete[i];
            }
            return(offset);
        }
        
        /** Variables Radial Orientation*/
        const numbers = ["CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", ];
        const step = (2*Math.PI)/numbers.length;
        let angle = 0;
        const circleX = 100;
        const circleY = 100;
        const radRadius = 200;
        const list = calculateRadial();


        // Radial Position for each Skill-Element
        function calculateRadial(){
            let radial = [];
            for(let i = 0; i <= numbers.length; i++){
                angle += step;
                radial[i] = angle;
            }
            return(radial);
        }
        
        
        // @Todo: evtl als ersatz für css
        function getWindowWidth() {
            const {innerWidth : width} = window;
            return(width);
        }
        
        console.log(getWindowWidth());

        return (
            <div className="skills">
                <div><h1 className="skill-title">Skills</h1></div>      
                <ul className="radial-list">
                    {numbers.map((number, index) =>{
                        return(
                        <li key={number.toString()}>
                        
                        <svg className="radial" viewBox={`0 0 ${box} ${box}`} style={{top:Number(Math.round(circleX + radRadius* Math.cos(list[index])-150)), left:Number(Math.round(circleY + radRadius * Math.sin(list[index])-209))}}>
                        
                        {['base', 'progress'].map(id => {
                            const color = id === 'progress' ? ( percentComplete[index] === 100 ? '#24e410' : '#2392f7') : colors[id]
                            return (
                                <circle
                                    strokeWidth={strokeWidth}
                                    r={radius}
                                    cx={box / 2}
                                    cy={box / 2}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={id === 'progress' ? offset[index].toString() : '0'}
                                    fill="transparent"
                                    stroke={color}
                                />                            
                            )
                        })}

                        <text textAnchor="middle" x="50%" y="55%">{numbers[index]}</text>
                        
                        </svg>

                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { SkillItems } from './SkillItems';

export default class ProgressBar extends Component {

    render(){
        /** Progress Bar */
        const percentComplete = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
        let strokeWidth = 5;
        const colors = { progress: 'red', base: '#eee' };
        const box = 100
        const radius = (box - strokeWidth) / 2
        const circumference = radius * 2 * Math.PI

        const offset = [];

        for(let i = 0; i <= percentComplete.length; i++){
            offset[i] = circumference - circumference / 100 * percentComplete[i];
        }
        //console.log(offset);

        /** Radial orientation*/
        const numbers = ["CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", "CSS", ];
        
        //console.log(numbers);
        const step = (2*Math.PI)/numbers.length;
        let angle = 0;
        const circleX = 100;
        const circleY = 100;
        const radRadius = 200;

        const list = [];

        for(let i = 0; i <= numbers.length; i++){
        angle += step;
        list[i] = angle;
        }


        return (
            <div className="skills">
                <div><h1 className="skill-title">Skills</h1></div>      
                <ul className="radial-list">
                    {numbers.map((number, index) =>{
                        return(
                        <li key={number.toString()}>
                        
                        <svg className="radial" viewBox={`0 0 ${box} ${box}`} style={{ top:Number(Math.round(circleX + radRadius* Math.cos(list[index])-150)), left:Number(Math.round(circleY + radRadius * Math.sin(list[index])-209))}}>
                        
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

                        <text text-anchor="middle" x="50%" y="55%">{numbers[index]}</text>
                        
                        </svg>

                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
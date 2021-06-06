import React, { Component } from 'react';

export default class Skills extends Component {
 
  render(){
    const numbers = ["css", "html", "php", "react.js", "javascript", "node.js", "typescript", "java", "c#", "c++"];
    const step = (2*Math.PI)/numbers.length;
    let angle = 0;
    const circleX = 100;
    const circleY = 100;
    const radius = 200;

    const list = [];

    for(let i = 0; i <= numbers.length; i++){
      angle += step;
      list[i] = angle;
      console.log(list);
      console.log(numbers.length);
    }

    return(
      <div className="skills">
        <div><h1 className="skill-title">Skills</h1></div>      
        <ul className="radial-list">
          {numbers.map((number, index) =>{
            return(<li key={number.toString()} className="radial" style={{top:Number(Math.round(circleX + radius* Math.cos(list[index])-150)), left:Number(Math.round(circleY + radius * Math.sin(list[index])-203))}}>{number}</li>)
          })}
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class Skills extends Component {
 
  render(){
    const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    const step = (2*Math.PI)/numbers.length;
    let angle = 0;
    const circleX = 100;
    const circleY = 100;
    const radius = 90;

    const list = [];

    for(let i = 0; i <= numbers.length; i++){
      angle += step;
      list[i] = angle;
      console.log(list);
      console.log(numbers.length);
    }

    return(
      <div className="skills">
        <ul className="radial-list">
          {numbers.map((number) =>{
            return(<li key={number.toString()} className="radial" style={{top:Number(Math.round(circleX + radius* Math.cos(list[number]))), left:Number(Math.round(circleY + radius * Math.sin(list[number])))}}>{number}</li>)
          })}
        </ul>
      </div>
    )
  }
}

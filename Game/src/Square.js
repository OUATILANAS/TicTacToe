import React from 'react';
import './App.css';

function Square(props) {
  let textColor = props.value === 'X' ? 'red' : 'blue';
  
  return (
    <button
      className="square"
      style={{
        fontSize: "40px",
        width: "80px",
        height: "80px",
        verticalAlign: "top",
        outline: "none",
        background: "#ffffff",
        color: textColor
      }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;

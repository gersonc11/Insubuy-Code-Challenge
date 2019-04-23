import React from 'react';

var buttonStyle = {
    margin: '10px 10px 10px 0'
  };

/*Button.jsx */
const Button = (props) => {
    return (
        <button
            style={buttonStyle}
            onClick={props.action}>
            {props.title}
        </button>
    )
}

export default Button;
import React from "react";

function Card(props) {

  return (
    //   creating basic layout of quote card
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Price:</strong> {props.price}
          </li>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Type:</strong> {props.type}
          </li>
          <li>
            <strong>Section:</strong> {props.section}
          </li>
        </ul>
      </div>
      <span className="select">𝘅</span>
    </div>
  );
}

export default Card;

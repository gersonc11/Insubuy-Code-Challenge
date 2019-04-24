import React, { Component } from "react";
import Card from './cards';
import quotes from '../../mockData/mockData';

class PolicyCard extends Component {
//  setting state to array of quotes
    state = {
        quotes : quotes.quotes
    };
    render() {
        return (
            <div className="card">
            <h1>Policies</h1>
            {/* going through array of quotes and displaying each one in the card format  */}
            {this.state.quotes.map((quote , i) => (
                    <Card 
                    key = {i}
                    price = {quote.price}
                    name = {quote.name}
                    description = {quote.description}
                    type = {quote.type}
                    section = {quote.section}
                     />
                ))}
            </div>
        );
    }
}

export default PolicyCard;

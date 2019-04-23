import React, { Component } from 'react';  
import FormContainer from './FormContainer';

class Form extends Component {  
  render() {
    return (
      <div className="container">
        <h3>Travel Insurance</h3>
        <FormContainer />
      </div>
    );
  }
}

export default Form; 
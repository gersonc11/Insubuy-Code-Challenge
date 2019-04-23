import React, { Component } from 'react';

/* Import Components */
import Input from './Input';
import Select from './Select';
import Button from './Button'

class FormContainer extends Component {
    constructor(props) {
        super(props);

        // setting the original state for the form 
        this.state = {
            traveler: {
                policyMax: '',
                age: '',
                startDate: '',
                endDate: '',
                citizenship: '',
                mailState: ''

            },

            policyMaxOptions: ["50,000", "100,000", "250,000", "500,000"],
            mailStateOptions: ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", " North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this)

    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                traveler: {
                    ...prevState.traveler, [name]: value
                }
            }
        }, () => console.log(this.state.traveler)
        )
    }

    // logic to handle form submission
    handleSubmit(e) {

        e.preventDefault();
    }

    // Logic for resetting the form
    handleClearForm(e) {
        this.setState = {
            traveler: {
                policyMax: '',
                age: '',
                startDate: '',
                endDate: '',
                citizenship: '',
                mailState: ''
            }
        }
        e.preventDefault()
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>

                {/* Selection of Policy Maximum*/}
                <Select title={'Policy Maximum'}
                    name={'policyMax'}
                    options={this.state.policyMaxOptions}
                    placeholder={'Choose your policy maximum'}
                    handleChange={this.handleInput} />
                {/* Name of the user */}
                <Input type={'text'}
                    title={'Age'}
                    name={'age'}
                    placeholder={'Enter your Age'}
                    handleChange={this.handleInput} />
                {/* Input for Age */}
                <Input type={'text'}
                    title={'Start Date'}
                    name={'startDate'}
                    placeholder={'Start Date'}
                    handleChange={this.handleInput} />
                {/* Input for Age */}
                <Input type={'text'}
                    title={'End Date'}
                    name={'endDate'}
                    placeholder={'Start Date'}
                    value={this.state.traveler.endDate}
                    handleChange={this.handleInput} />
                     {/* Input for Age */}
                <Input type={'text'}
                    title={'Citizenship'}
                    name={'citizenship'}
                    placeholder={'Enter your Country of Citizenship'}
                    value={this.state.traveler.citizenship}
                    handleChange={this.handleInput} />
                     {/* Input for Age */}
                <Input type={'text'}
                    title={'Mailing State'}
                    name={'mailState'}
                    placeholder={'Choose State'}
                    value={this.state.traveler.mailState}
                    handleChange={this.handleInput} />
                <Button /> { /*Submit */}
                <Button title={'Reset'}
                action={this.handleClearForm} /> {/* Clear the form */}
            </form>
        );
    }
}

export default FormContainer;
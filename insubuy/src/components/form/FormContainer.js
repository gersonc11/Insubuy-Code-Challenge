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
                policyMax: 0,
                age: '',
                startDate: '',
                endDate: '',
                citizenship: '',
                mailState: ''

            },
            policyMaxOptions: ["50,000", "100,000", "250,000", "500,000"]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }


    handleInput(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState(prevState => {
            return {
                traveler: {
                    ...prevState.traveler, [name]: value
                }
            }
        }, () => console.log(this.state.traveler))
    }

    // logic to handle form submission
    handleSubmit(e) {

        e.preventDefault();
    }

    // Logic for resetting the form
    handleClearForm(e) {
        e.preventDefault()

        this.setState(prevState => {
            return {
                traveler: {
                    ...prevState.traveler,
                    policyMax: '',
                    age: '',
                    startDate: '',
                    endDate: '',
                    citizenship: '',
                    mailState: ''
                }
            }
        })
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>

                {/* Selection of Policy Maximum*/}
                <Select title={'Policy Maximum'}
                    name={'policyMax'}
                    options={this.state.policyMaxOptions}
                    placeholder={'Choose your policy maximum'}
                    value={this.state.traveler.policyMax}
                    handleChange={this.handleInput}
                    required={true} />
                {/* Name of the age */}
                <Input type={'text'}
                    title={'Age'}
                    name={'age'}
                    placeholder={'Enter your Age'}
                    value={this.state.traveler.age}
                    handleChange={this.handleInput}
                    required={true} />
                {/* Input for start date */}
                <Input type={'date'}
                    title={'Start Date'}
                    name={'startDate'}
                    placeholder={'Start Date'}
                    value={this.state.traveler.startDate}
                    handleChange={this.handleInput}
                    required={true} />
                {/* Input for end date */}
                <Input type={'date'}
                    title={'End Date'}
                    name={'endDate'}
                    placeholder={'Start Date'}
                    value={this.state.traveler.endDate}
                    handleChange={this.handleInput}
                    required={true} />
                {/* Input for citizenship */}
                <Input type={'text'}
                    title={'Citizenship'}
                    name={'citizenship'}
                    placeholder={'Enter your Country of Citizenship'}
                    value={this.state.traveler.citizenship}
                    handleChange={this.handleInput}
                    required={true} />
                {/* Input for mailing state */}
                <Input type={'text'}
                    title={'Mailing State'}
                    name={'mailState'}
                    placeholder={'Choose State'}
                    value={this.state.traveler.mailState}
                    handleChange={this.handleInput} />
                { /*Submit */}
                <Button title={'Submit'}
                />
                {/* Clear the form */}
                <Button title={'Reset'}
                    action={this.handleClearForm} />
            </form>
        );
    }
}

export default FormContainer;
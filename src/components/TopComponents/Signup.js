import React from 'react';
import './Signup.css';

export default class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            phoneNo: null
        };
    }
    

    render(){
    
        const { email, password, phoneNo } = this.state;

    return (
        <form className="signup-details" onSubmit={this.handleSubmit}>
            <input 
            className="input-field1" 
            type="email" name="email" 
            placeholder="Email" 
            value={email}
            onChange={this.handleChange}
            required
            />

            <input 
            className="input-field2" 
            type="number" 
            name="number" 
            placeholder="Phone no." 
            value={phoneNo}
            onChange={this.handleChange}
            required

            />
            <input 
            className="input-field3" 
            type="password" 
            name="password" 
            placeholder="Set a password" 
            value={password}
            onChange={this.handleChange}
            required

            />
            <input className="get-started" type="submit" value="Get Started" />
        </form>
      );
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit= event =>{
        console.log("Submitting");
        console.log(this.state);
    };
}

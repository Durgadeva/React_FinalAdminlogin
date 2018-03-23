import React, { Component } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

class Forgotpassword extends Component {
    render() {
        return (
            <form >
                <div className="container">
                    <h1>Forgot Password</h1>
                    <hr></hr>
                    <div>
                        <label><b>Enter your account mail id</b></label>
                        <input type="text" placeholder="Enter your account mail id" name="email" required />
                        <button type="submit">Reset Password</button>
                        <span className="psw"><Link to="/Adminlogin">Back to login</Link></span>
                    </div>
                </div>
            </form>
        );
    }
}

export default Forgotpassword;
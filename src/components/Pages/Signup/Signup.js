import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Signup.css';

const Signup = () => {
    const { handleSignupSignin, handleNameChange, handleEmailChange, handlePasswordChange , error} = useAuth();
    
    return (
        <div>
            <div className="signup-section">
                <h1>Sign Up</h1>
            </div>
            <div className="container my-3">
                <div className="signup-form p-5">
                    <form className="w-50 ms-5 my-auto signupform-area" onSubmit={handleSignupSignin}>
                        <div className="row ">
                            <label className="col-sm-2 col-form-label-lg" htmlFor="specificSizeInputName">Name</label>
                            <div className="col-sm-12">
                                <input onBlur={handleNameChange} type="text" className="form-control" id="specificSizeInputName"/>
                            </div>
                        </div>
                        <div className="row ">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label-lg">Email</label>
                            <div className="col-sm-12">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label-lg">Password</label>
                            <div className="col-sm-12">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3 " required/>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger"><small>{error}</small></div>
                        <div className="row mb-3 text-light"><p>Already an user? <Link to='/signin' style={{color: "white"}}>Sign In Here!</Link></p> </div>
                        <button type="submit" className="btn primary-btn px-2 py-1 fs-5 ">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
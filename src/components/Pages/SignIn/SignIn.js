import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignIn.css';
const SignIn = () => {
    const { signInUsingGoogle, handleSignupSignin, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }
   
    return (
        <div>
            <div className="signin-section">
                <h1>Sign In</h1>
            </div>
            <div className="container my-3">
                <div className="signin-form p-5">
                    <form className="w-50 ms-5 my-auto signinform-area" onSubmit={handleSignupSignin}>
                        <div className="row ">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label-lg">Email</label>
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="inputEmail3" required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label-lg">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-2 text-danger"><small>{error}</small></div>
                        <div className="row  text-light"><p>New User? <Link to='/signup' style={{ color: "white" }}>Sign Up Here!</Link></p> </div>

                        <button className="btn primary-btn  px-2 py-1 fs-5 ">Sign in</button><span className="mx-3">or</span>
                        <button onClick={handleGoogleSignIn} className="btn primary-btn px-2 py-1 fs-5 ">Sign In Using Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignIn;
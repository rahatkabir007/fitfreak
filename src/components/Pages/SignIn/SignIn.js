import React from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../../firebase/Firebase.init';
import useAuth from '../../../hooks/useAuth';
import './SignIn.css';

initializeAuthentication();
const SignIn = () => {
    const { signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, handleResetPassword, error, toggleLogin, isLogin } = useAuth();
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
                <h1>{!isLogin ? "Sign Up" : "Sign In"}</h1>
            </div>
            <div className="container my-3">
                <div className="signin-form p-5">
                    <form className="w-50 ms-5 my-auto signinform-area" onSubmit={handleRegistration}>
                        <h3 style={{ color: "red", fontSize: "40px" }}>Please {isLogin ? 'Sign In' : 'Sign Up'}</h3>
                        {!isLogin && <div className="row ">
                            <label className="col-sm-2 col-form-label-lg" htmlFor="specificSizeInputName">Name</label>
                            <div className="col-sm-12">
                                <input onBlur={handleNameChange} type="text" className="form-control" id="specificSizeInputName" />
                            </div>
                        </div>}
                        <div className="row ">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label-lg">Email</label>
                            <div className="col-sm-12">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label-lg">Password</label>
                            <div className="col-sm-12">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3 " required />
                            </div>
                        </div>
                        <div className="row mb-3 text-danger"><small>{error}</small></div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Have An Account?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={handleResetPassword} className="mb-2" style={{ color: "white", backgroundColor: "transparent", border: "none" }}>Reset Password</button>
                        <div>
                            <button type="submit" className="btn primary-btn px-2 py-1 fs-5 mb-2">{isLogin ? 'Sign In' : 'Sign Up'}</button> <span className="px-2">OR</span> <button onClick={handleGoogleSignIn} className="btn primary-btn px-2 py-1 fs-5 mb-2">Google Sign In</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
export default SignIn;
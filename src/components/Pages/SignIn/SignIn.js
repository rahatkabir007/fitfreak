import React from 'react';
import './SignIn.css';
const SignIn = () => {
    return (
        <div>
            <div className="signin-section">
                <h1>Sign In</h1>
            </div>
            <div className="container my-3">
                <div className="signin-form p-5">
                    <form className="w-50 ms-5 my-auto signinform-area">
                        <div className="row ">
                            <label for="inputEmail3" className="col-sm-2 col-form-label-lg">Email</label>
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label-lg">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <div className="col-sm-10 ">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label class="form-check-label" for="gridCheck1">
                                        Example checkbox
                                    </label>
                                </div>
                            </div>
                        </div> */}
                        <button type="submit" className="btn primary-btn  px-2 py-1 fs-5 ">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignIn;
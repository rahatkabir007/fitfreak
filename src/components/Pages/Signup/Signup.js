import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div>
            <div className="signup-section">
                <h1>Sign Up</h1>
            </div>
            <div className="container my-3">
                <div className="signup-form p-5">
                    <form className="w-50 ms-5 my-auto signupform-area">
                        <div className="row ">
                            <label className="col-sm-2 col-form-label-lg" for="specificSizeInputName">Name</label>
                            <div className="col-sm-12">
                                <input type="text" class="form-control" id="specificSizeInputName"/>
                            </div>
                        </div>
                        <div className="row ">
                            <label for="inputEmail3" className="col-sm-2 col-form-label-lg">Email</label>
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label-lg">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-5 col-form-label-lg">Re-type Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <div className="col-sm-10 ">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label class ="form-check-label" for="gridCheck1">
                                    Example checkbox
                                    </label>
                                </div>
                            </div>
                        </div> */}
                        <button type="submit" className="btn primary-btn px-2 py-1 fs-5 ">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
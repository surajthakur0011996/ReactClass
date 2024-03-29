import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({    
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

function Register() {
    return (
        <>
    <div className="bg-gradient-primary">
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div classNameName="card-body p-0"> 
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <Formik
                          initialValues={{
                            email: '',
                            password: '',
                          }}
                          validationSchema={SignupSchema}
                          onSubmit={values => {
                            console.log(values);
                          }}
                        >
                          {({ errors, touched ,handleSubmit}) => (
                            <form className="user" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                <Field name='email' type="email" className="form-control form-control-user" id="email"
                                        placeholder="Email Address" />
                                         {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div> : null}
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password" />
                                    </div>
                                </div>
                                <a href="login.html" className="btn btn-primary btn-user btn-block">
                                    Register Account
                                </a>
                                <hr />
                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                            </form>
                            )}
                        </Formik>
                            <hr />
                            <div className="text-center">
                                <a className="small">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <Link className="small" to='/login'>Already have an account? Login!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
        </>
    );
}

export default Register;

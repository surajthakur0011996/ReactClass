import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/http';

const SignupSchema = Yup.object().shape({    
  // username: Yup.string().username('Invalid username').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid username format').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
    username:Yup.string().required()
});

function Login() {
  
    const [showPassword, setShowPassword] = useState(false); 
    const navigate=useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <>
    <div className="bg-gradient-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          {errorMessage && <div>{errorMessage}</div>} 
                        </div>
                        <Formik
                        
                          initialValues={{
                            username: '',
                            password: '', 
                          }}
                          validationSchema={SignupSchema}
                          onSubmit={async (values) => {
                            const data={
                              username:values.username, 
                              password:values.password
                            }
                            
                             await login(data).then(response => {
                              console.log(response);
                              if(response){
                              navigate('/dashboard');
                              localStorage.setItem("token","dasdaDAsdsafas")
                            }
                            // else { 
                            //   alert("TEST01 ");
                            // }
                             } ).catch(
                              err => { 
                                setErrorMessage('Invalid username and password');
                             
                              }
                             );   

                                             
                             

                          }}
                        >
                          
                          {({ errors, touched, handleSubmit }) => (
                            
                            <form className="user" onSubmit={handleSubmit}>
                            
                              <div className="form-group">
                                <Field
                                  name="username"
                                  type="text"
                                  className="form-control form-control-user"
                                  id="username"
                                  
                                  aria-describedby="usernameHelp"
                                  placeholder="Enter username Address..."
                                />
                                {errors.username && touched.username ? <div className='text-danger'>{errors.username}</div> : null}
                              </div>
                              <div className="form-group">
                                <Field
                                  name="password"
                                  id="password"
                                  type={showPassword ? 'text' : 'password'} className="form-control form-control-user" placeholder="Password"
                                />
                                <button
                                      className="btn btn-outline-secondary"
                                      type="button"
                                      onClick={() => setShowPassword(!showPassword)}
                                    >
                                      {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                {errors.password && touched.password && <div  className='text-danger'>{errors.password}</div>}
                              </div>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                  <input type="checkbox" className="custom-control-input" id="customCheck" />
                                  <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-primary btn-user btn-block">
                                Login
                              </button> 
                            
                              
                              <hr />
                              <a href="index.html" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw"></i> Login with Google
                              </a>
                              <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                              </a>
                            </form>
                          )}
                        </Formik>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                          <Link className="small" to='/register'>Create an Account!</Link>
                        </div>
                        
                        
                      </div>
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

export default Login;

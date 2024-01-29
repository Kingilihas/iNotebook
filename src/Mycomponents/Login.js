import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// useNavigate hook is used to navigate the specified component 
const Login = (props) => {
    const host = "http://localhost:5000"
    const [details, setDetails] = useState({ email: '', password: '' })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        if(details.email===' ')
        console.log("llfl");

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email: details.email, password: details.password })

        });

        const json = await response.json();

        console.log(json);

        if (json.sucess) {
            localStorage.setItem('authToken', json.authToken);
            navigate('/') // navigate to / ( home component );
            props.showAlert('successfully logged in');

        }
        else {
            props.showAlert('Invalid details please check');
        }


    }

    // This fuction is use navigate to signup page 
    const moveSignup=() => {
        navigate('/signup')
    }

    const onChange = (e) => {
         
        
        setDetails({ ...details, [e.target.name]: e.target.value })

    

    }

    return (

        // prevous form created by harry bhai 


        // <form onSubmit={handleSubmit} className="container " >
        //     <div className="form-group my-3"  >
        //         <label htmlhtmlFor="email">Email address</label>
        //         <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value={details.email} />

        //     </div>
        //     <div className="form-group my-3">
        //         <label htmlhtmlFor="password">Password</label>
        //         <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange} value={details.password} />
        //     </div>

        //     {/* <button type="submit" className="btn btn-primary" ></button> */}


        //     <Link className="btn btn-primary my-2 " to="/Login" role="button" style={{width:'20vw'}} >Login</Link>
        //     <Link className="btn btn-primary my-2" to="/Signup" role="button" style={{width:'20vw'}}>Sign Up</Link>

        // </form>


        // modified form created by me
        <>
       <h2 className="mt-4 text-center">iNotebook - A World Class Online Note Saving Platform</h2>
        <div className="d-flex justify-content-center align-items-center ">
            
            <div className="container-fluid h-custom mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                        <h4 className="text-center mb-4">Sign into your account </h4>


                            <div className="form-outline mb-4">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value={details.email} />

                            </div>


                            <div className="form-outline mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password could not numeric.." onChange={onChange} value={details.password} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>

                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-md">Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" onClick={moveSignup}
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
</>

    )
}

export default Login

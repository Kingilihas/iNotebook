import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const host = "http://localhost:5000"
    const [details, setDetails] = useState({ name: '', email: '', password: '', cpassword: '' })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();

        const { name, email, password, cpassword } = details

        if (password === cpassword) {



            const response = await fetch(`${host}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ name, email, password })

            });

            const json = await response.json();

            console.log(json);

            if (json.success) {
                localStorage.setItem('authToken', json.authToken);
                navigate('/') // navigate to / ( home component );
                props.showAlert('successfully logged in');

            }
            else {
                props.showAlert('Invalid Details please check');
            }


        }
        else {
            props.showAlert('password does not match');
            setDetails({ name: '', email: '', password: '', cpassword: '' })
        }


    }

    const onChange = (e) => {

        setDetails({ ...details, [e.target.name]: e.target.value })

        console.log(details.email);

    }

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                className="w-100" style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem;" }}
                                alt="Sample photo" />
                            <div className="card-body p-md-5">
                                <h3 className="mb-3   px-md-2">Sign Up For Free</h3>
                                <form onSubmit={handleSubmit} className="container my-1">
                                    <div className="form-group my-1"  >
                                        <label htmlFor="email">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={onChange} value={details.name} />

                                    </div>

                                    <div className="form-group   my-3"  >
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value={details.email} />

                                    </div>


                                    <div className="form-group  my-3">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange} value={details.password} />
                                    </div>

                                    <div className="form-group  my-3">
                                        <label htmlFor="password">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpassword" name="cpassword" placeholder="Confirm Password" onChange={onChange} value={details.cpassword} />
                                    </div>

                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup

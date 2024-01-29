import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

   /*  
    use Location hook:
    This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.

    it comes under react router dom

    */
   


const Navbar = (props) => {

    let location = useLocation();
    // location is a object containg info about the location of current component

/* sample location object :
    Object { pathname: "/about", search: "", hash: "", state: null, key: "1v5fh3zj" }
​
hash: ""
​
key: "1v5fh3zj"
​
pathname: "/about"
​
search: ""
​
state: null
​
<prototype>: Object { … }


*/

let navigate=useNavigate();
    useEffect(() => {

        console.log(location) // return the current pathname 

    }, [location])

      
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        
        props.showAlert('Sucessfully Logged out')
        navigate('/login');
       
        
      }


    return (
        <>
            <nav className="navbar navbar-expand-lg  " style={{backgroundColor:'#2c2c59'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"  style={{color:'white'}} >iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"  style={{color:'white'}} >
                                <Link className={` nav-link ${location.pathname === "/" ? "active" : ""}`}   style={{color:'white'}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={` nav-link ${location.pathname === "/about" ? "active" : ""}`}  style={{color:'white'}} to="/about">About</Link>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                          
                        {localStorage.getItem('authToken')?
                        
                        <button className="btn btn-primary mx-2" onClick={handleLogout}>Log out</button>:" "
                        }
                        </form>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar

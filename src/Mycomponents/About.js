import React from 'react'
import '../Mycomponents/About.css'


const About = () => {

  return (
    <div>


      <section className="background-radial-gradient overflow-hidden">

        {/* 
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0\ " style={{ zIndex: "10" }}>
             
                <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                  About Us<br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}></span>
                </h1>
                <p className="mb-4 opacity-70" style={{ color: " hsl(218, 81%, 85%)" }}>
                  iNotebook is the multimedia application that can be used to store the private notes on the cloud.
                  You can add multiple information like bank details,personal information etc which can last long forever.
                </p>


           
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">

                  </div>
                </div>
              </div>

            </div>


          </div>
        </div> */}

        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight text-primary">
                  About Us <br />

                </h1>
                <p style={{ color: "hsl(218, 81%, 95%)" }}>
                iNotebook is the multimedia application that can be used to store the private notes on the cloud.
                  You can add multiple information like bank details,personal information etc which can last long forever.
                </p>
                <p style={{ color: "hsl(218, 81%, 95%)" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minima tempore nihil aspernatur aliquam quo quae pariatur laudantium impedit. Iure laborum incidunt ex eaque quia praesentium sed recusandae minus fuga, alias sint quas aspernatur neque iusto quo minima vero aut dolorum ipsa possimus. Voluptatum dignissimos dolorem et.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                  <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" className="img-fluid" alt="smaple image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>


  )
}

export default About

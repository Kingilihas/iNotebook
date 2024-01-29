import React from 'react'

export default function Alert(props) {
    return (
        <> 
        <div style={{height: '70px'}}>
        {props.alert.msg &&
               
               <div className="alert alert-success d-flex align-items-center" role="alert">

                   <div>
                       {props.alert.msg}
                   </div>
               </div>
           
       }
        </div>
           

        </>

    )
}


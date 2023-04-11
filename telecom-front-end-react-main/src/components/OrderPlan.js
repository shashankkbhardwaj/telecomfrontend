import React, { useEffect, useState } from 'react'




const OrderPlan = (props) => {

 
 
  return (
    <div>
      <div className="card my-3" style={{width: "60rem"}} >
        {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'98%',zIndex:'1'}} >
                  active
                </span> */}
  <div className="card-header">
  <h5> ₹{props.price} pack with {props.validity} days validity</h5>
  <footer className="blockquote-footer my-2"> Purchase Date: <cite title="Source Title">{props.activation}</cite></footer>

  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Unlimited Calling and 100 SMS/day  with {props.data} GB data per day</p>
      <footer className="blockquote-footer"> Expiry Date: <cite title="Source Title">{props.expiration}</cite></footer>
    </blockquote>
  </div>
</div>
    </div>
  )
}

export default OrderPlan

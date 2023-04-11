import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';



export default function PlanCard(props) {

let navigate = useNavigate();
const cart = useSelector((state) => state.cart);

  const handlePayment = async (e)=>{
        e.preventDefault();
      const response = await fetch("http://localhost:8010/regplan",{
            method: 'POST',
            headers: {
                'content-Type':'application/json'
            },
            body: JSON.stringify({mobNo: localStorage.getItem('username'),price: localStorage.getItem('price'), validity: localStorage.getItem('validity'), data: localStorage.getItem('data')})
        
        })
        const json = await response.json();
        console.log(json);
   
      if(json){
        toast.success(" Recharge Done ");
        navigate("/")
      }
      else{
        toast.error(" Failed Try Again")
        
      }
    }

    const handleClick = () =>{
      // dispatch(addToCart(element));

    localStorage.setItem('price',props.price)
    localStorage.setItem('validity',props.validity)
    localStorage.setItem('data',props.data)
    console.log(localStorage.getItem('price'))
    }

  const onChange = (e) =>{
    localStorage.setItem('username',(e.target.value));
}

  return (
    <>
    <div className="my-3">
    <div className="card" style={{width: "20rem"}}>
    <div className="card-body">
    {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}} >
                  65
                </span> */}
    <h2 className="card-title">@ ₹{props.price}</h2>
    <h5 className="card-title">{props.data} GB/day, {props.validity} days validity</h5>
    <p className="card-text"> Enjoy Unlimited Calling with {props.data} GB/day and 100 SMS/day for only {props.price}rs.</p>
    <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal">Recharge</button>

    {/* data-bs-toggle="modal" data-bs-target="#exampleModal" */}
  </div>
  </div>
</div>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Payment Gateway</h1>
      </div>
      <div className="modal-body">
      <form>
      {localStorage.getItem('username')?<div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mobile No.: </label>
        <div className="col-sm">
        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={localStorage.getItem('username')}/>
    </div>
  </div>:
  <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">Mob No:</label>
  </div>
  <div className="col-auto">
    <input type="username" id="username" className="form-control" onChange={onChange} name="username" minLength={10} maxLength={10} required/>
  </div>
</div>}
<div className="accordion my-2" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      ₹{localStorage.getItem('price')} pack with {localStorage.getItem('validity')} validity.
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Enjoy a whopping {localStorage.getItem('data')} GB per day data usage with unlimited calling for {localStorage.getItem('validity')} days at just Rs. {localStorage.getItem('price')}. You heard it right - this plan offers unlimited calls and high-speed internet usage without any restrictions.
      </div>
    </div>
  </div>
</div>
    </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handlePayment} >Make Payment</button>
      </div>
    </div>
  </div>
</div>


</>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { clearCart } from '../features/cartSlice';


const Cart = () => {
    const cart = useSelector((state) => state.cart);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    localStorage.setItem('number', localStorage.getItem('username'))


    const handlePayment = async (e)=>{
        e.preventDefault();
     {if(localStorage.getItem('planName')==="Mobile"){  
      const response = await fetch("http://localhost:8010/regplan",{
            method: 'POST',
            headers: {
                'content-Type':'application/json'
            },
            body: JSON.stringify({mobNo: localStorage.getItem('number'),price: localStorage.getItem('price'), validity: localStorage.getItem('validity'), data: localStorage.getItem('data')})
        
        })
        const json = await response.status;
        console.log(json);

        if(json==201){
          localStorage.removeItem ('planName')
          localStorage.removeItem('price')
          localStorage.removeItem('validity')
          localStorage.removeItem('data')
          localStorage.removeItem('number')
          toast.success(" Recharge Done ");
          navigate("/")
        }
        else{
          localStorage.removeItem('number')
          toast.error(" Failed Try Again")
          
        }
      }
      else if(localStorage.getItem('planName')==="Broadband"){
        const response = await fetch("http://localhost:8005/regbroadband",{
            method: 'POST',
            headers: {
                'content-Type':'application/json'
            },
            body: JSON.stringify({mobNo: localStorage.getItem('number'),price: localStorage.getItem('price'), validity: localStorage.getItem('validity'), data: localStorage.getItem('data')})
        
        })
        const json = await response.status;
        console.log(json);

        if(json==201){
          localStorage.removeItem ('planName')
          localStorage.removeItem('price')
          localStorage.removeItem('validity')
          localStorage.removeItem('data')
          localStorage.removeItem('number')
          toast.success(" Recharge Done ");
          navigate("/")
        }
        else{
          localStorage.removeItem('number')
          toast.error(" Failed Try Again")
          
        }
      }

      
    }
  }

    const onChange = (e) =>{
        localStorage.setItem('number',(e.target.value));
    }

    const handleClearCart = () =>{
      dispatch(clearCart());
      // console.log(cart.cartItems)
    }

  return (
   <>
    <div className='cart-container'>
        <h2>Plans Purchasing Cart</h2>
        {
            cart.cartItems.length ===0?(
                
                <div className="cart-empty">
                    <p>You do not have any plans to purchase</p>
                    <div className="start-shopping">
                    <Link to="/plans">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                        <span>Start Choosing Plan</span>
                    </Link>
                    </div>
                </div>
            ):(
            <div>
                <div className="titles">
                    <h3 className='plan-type'>Plan Type</h3>
                    <h3 className='price'>Price</h3>
                    <h3 className='validity'>Validity</h3>
                    <h3 className='Quantity'>Data</h3>

                </div>
                <div className="cart Items">
                    {
                        cart.cartItems?.map(cartItem => (
                            <div className="cart-item" key = {cartItem.id}>
                                <div className="cart-product">
                                    <div>
                                        <h3>{localStorage.getItem('planName')} Plan</h3>
                                        {/* <button>remove</button> */}
     
                                    </div>
                                </div>
                                <div className="cart-product-price">
                                    <div>
                                    <h3> ₹{cartItem.price}</h3>
                                </div>
                                </div>
                                
                                {/* <div className="cart-product-quantity">
                                    <button>-</button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button>+</button>
                                </div> */}
                                <div>
                                    <h3>{cartItem.validity}</h3>
                                </div>
                                <div >
                                   <h3>{cartItem.data} GB/Day</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="cart-summary">
                <button type="button" className="btn btn-outline-danger" onClick={() => handleClearCart()}> Clear Cart</button>
                    <div className='cart-checkout'>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal">CheckOut</button>
                        <div className="continue-shopping my-5">
                    <Link to="/plans">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                        <span>Continue Shopping</span>
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
            
            )
        }
      
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
            </div>:<>
            <div className="row g-3 align-items-center">
              <div> <h3> Guest User</h3> </div>
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">Mob No:</label>
            </div>
            <div className="col-auto">
              <input type="username" id="username" className="form-control shadow"  onChange={onChange} name="username" minLength={10} maxLength={10} required/>
            </div>
          </div>
          </>}
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
          <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handlePayment} >Make Payment</button>
                </div>
              </form>
                </div>
                
              </div>
            </div>
          </div>
          </>
  
  )
}

export default Cart

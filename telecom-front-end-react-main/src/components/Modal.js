import React from 'react'

const Modal = () => {
  return (
    <div>
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
    <input type="username" id="username" className="form-control"  name="username" minLength={10} maxLength={10} required/>
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
        <button type="button" className="btn btn-primary" >Make Payment</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal


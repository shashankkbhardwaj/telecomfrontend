import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const Account = () => {

    const [acc, setACC] = useState([]);
    const [loading, setLoading] = useState(true);
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    let navigate = useNavigate();


    const [credentials, SetCredentials] = useState({
      username: username,
      name:"",
      email:"",
      address:""
  })

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = () => {
      setLoading(true);
      fetch(`http://localhost:8001/user/${username}`,{
        headers: {
          'content-Type':'application/json',
          'Authorization': `Bearer ${token}`
      }})
      .then((response) => response.json())
      .then((data) => {
        setACC(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
   const handleChange = (e) =>{
    SetCredentials({...credentials,[e.target.name]: e.target.value})
    
}
const handleClick =async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:8001/user/${username}`,{
        method: 'PUT',
        headers: {
            'content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({username: credentials.username,
                              email: `${!credentials.email?acc.email:credentials.email}`,
                               name: `${!credentials.name?acc.name:credentials.name}`,
                              address:`${!credentials.address?acc.address:credentials.address}`})
    
    })
    const json = await response.text()
console.log(json);

if(json){
    toast.success("Change Success");
    fetchData();
}
else{
    toast.error("Invalid Credentials!!")
    
}
}



  return (
    <>
    <div className='account container'>
      <h1>Hi, {acc.name}.</h1>
  <form >
  <fieldset disabled>
    <legend>Your Personal Details:</legend>

    <div className="row mb-3">
    <div className="col">
    <label htmlFor="disabledTextInput" className="form-label">Name:</label>
    <input type="text" className="form-control" name="name" placeholder={acc.name} aria-label="Name"/>
    </div>
    <div className="col">
    <label htmlFor="disabledTextInput" className="form-label">Registered Mob.No:</label>
    <input type="text" readOnly className="form-control" id="staticMobNo" placeholder={acc.username}/>
    </div>
    </div>
    <div className="row mb-3">
      <div className="col">
      <label htmlFor="disabledTextInput" className="form-label">Email Id</label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder={acc.email}/>
    </div>
    <div className="col"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">Address:</label>
      <input type="text" id="disabledTextInput" className="form-control" rows="2"  placeholder={acc.address}/>
    </div>
  </fieldset>
</form>
<button  className="btn btn-outline-danger my-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Detail</button>

</div>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Personal Details:</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="form-floating">
      <input type="email" className="form-control my-2" id="floatingInputValue" name='name' defaultValue={acc.name} onChange={handleChange} />
      <label htmlFor="floatingInputValue">Name</label>
        </form>
        <form className="form-floating">
      <input type="email" className="form-control my-2" id="floatingInputValue" name='email' defaultValue={acc.email} onChange={handleChange} />
      <label htmlFor="floatingInputValue">Email</label>
        </form>
        <form className="form-floating">
      <input type="email" className="form-control" id="floatingInputValue" name='address' defaultValue={acc.address} onChange={handleChange}/>
      <label htmlFor="floatingInputValue">Address</label>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Account

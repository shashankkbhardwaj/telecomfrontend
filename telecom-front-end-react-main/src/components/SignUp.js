import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignUp = () => {

    const [credentials, SetCredentials] = useState({
        username:"",
        password:"",
        name:"",
        email:"",
        address:""
    })
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {username, password, name, email, address} = credentials;
        const response = await fetch("http://localhost:8001/user/add",{
            method: 'POST',
            headers: {
                'content-Type':'application/json'
            },
            body: JSON.stringify({username, password, name, email, address})
        
        })
        const json = await response.text();
    console.log(json);
   
    if(json){
        toast.success("Account Created");
        navigate("/login")
    }
    else{
        toast.error(" Credentials Invalid!!")
        
    }
    }

    const onChange = (e) =>{
        SetCredentials({...credentials,[e.target.name]: e.target.value})
    }




  return (
    <div className="signup col-lg-4 offset-sm-4 rounded border p-4 mt-5 shadow">
                <legend>Sign up</legend>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
  <label htmlFor="number" className="form-label">Mobile No.</label> 
  <input type="username" className="form-control" value={credentials.username} onChange={onChange} name="username" id="username" />
</div>
<div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label> 
  <input type="text" className="form-control" value={credentials.name} onChange={onChange} name="name" id="name" />
</div>

<div className="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={8} required/>
</div>

<div className="mb-3">
  <label htmlFor="name" className="form-label">Email</label> 
  <input type="text" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" />
</div>
  <div className="mb-3">
  <label htmlFor="address" className="form-label">Address</label> 
  <input type="text" className="form-control" value={credentials.address} onChange={onChange} name="address" id="address" />
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
  )
}
export default SignUp
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {

    const [credentials, SetCredentials] = useState({
        username:"",
        password:""
    })
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8001/authenticate",{
            method: 'POST',
            headers: {
                'content-Type':'application/json'
            },
            body: JSON.stringify({username: credentials.username,password: credentials.password})
        
        })
        const json = await response.text()
    console.log(json);
   
    if(json){
        toast.success("Login Success");
        localStorage.setItem('token',json);
        console.log(localStorage.getItem('token'))
        localStorage.setItem('username',credentials.username);
        navigate("/")
    }
    else{
        toast.error("Invalid Credentials!!")
        
    }
    }

    const onChange = (e) =>{
        SetCredentials({...credentials,[e.target.name]: e.target.value})
    }

  return (
    <div className="login col-lg-4 offset-sm-4 rounded border p-4 mt-5 shadow">
          <legend>Log In:</legend>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mobile No.</label> 
    <input type="username" className="form-control" value={credentials.username} onChange={onChange} name="username" id="username" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login

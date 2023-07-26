import profile from "../img/profile.png"
import "../css/admin.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [logData,setLogData]=useState({
    //     username:"",
    //     password:""
    // });
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [error,setError]=useState({
        username:"",
        password:""
    })
    const navigate=useNavigate();
    // const validate=()=>
    // {
    //     if(logData.username===""&&logData.password==="")
    //     {
    //         setError({
    //             username:"enter username",
    //             password:'enter password'
    //         })
    //         return false;
    //     }
    //     if(logData.username==="")
    //     {
    //         setError({
    //             username:"enter username",
    //             password:''
    //         })
    //         return false;
    //     }
    //     else if(logData.password==="")
    //     {
    //         setError({
    //             username:"",
    //             password:'enter password'
    //         })
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // }
  
const handleSubmit=e=>
{ 
 
    e.preventDefault();
    // if(validate()){



    fetch("https://hatsoffcareer.onrender.com/api/admin/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email":username,"password":password})
      }).then(res=>res.json()).then(data=>
    {
        if(data.success)
        {
           
            window.alert("success");
            localStorage.setItem("token",data.token)
            setError({
                username:"",
                password:""
            })
            
            // navigate("/admin")

        }
        else
        {

        }

    }).catch(err=>console.log("somthing went wrong ", err))
    // }
}
    return (
        <>
        
            <div className="login">
                <div className="card" style={{width: "30rem"}}>
                    <div className="profile-pic">
                        <img src={profile} alt="" />
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address<span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                // onChange={e=>setLogData({...logData,username:e.target.value})} 
                                onChange={e=>setUsername(e.target.value)}
                                
                                required/>
                                <span className="text-danger">{error.username}</span> 
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                //  onChange={e=>setLogData({...logData,password:e.target.value})} 
                                 onChange={e=>setPassword(e.target.value)}
                                 
                                 required/>
                                <span className="text-danger">{error.password}</span> 

                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

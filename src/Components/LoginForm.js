import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function () {
    const [creds, setcreds] = useState({email:"",password:""})
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const navigate = useNavigate();

   async function HandleSubmit(event)
    {
        event.preventDefault();
       let requestData = {
          
              email:creds.email,
              password:creds.password,
        }
        const response = await fetch('http://localhost:5000/loginuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(requestData)
        })
        const json = await response.json()
        
        if(!json.success)
        {
          console.log("error:",json);
          alert("Enter valid credentials")
        }
        else if(json.success)
        setShowSuccessAlert(true)
        navigate("/");
        return (
          <div>
            {showSuccessAlert && ( // Conditionally render the success alert
              <div class="alert alert-success" role="alert">
                <h2 class="alert-heading">Welcome Back!!! {requestData.email}</h2>
              </div>
            )}
      
            {/* Rest of your JSX */}
          </div>
        )
        
            
        }
      
    
    function onChange(event)
{
  setcreds({...creds,[event.target.name]:event.target.value})
  console.log(setcreds)
}
  return (
    <div>
        <section className="vh-100 bg-dark text-light" >
  <div className="container h-100" style={{backgroundColor: '#eee' }}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-white" style={{ borderRadius: '25px', backgroundColor: '#333' }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={HandleSubmit}>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw text-light"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" name='email' value={creds.email} onChange={onChange} className="form-control text-light" />
                      <label className="form-label text-light" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw text-light"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" name='password' value={creds.password} onChange={onChange} className="form-control text-light" />
                      <label className="form-label text-light" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label text-light" htmlFor="form2Example3">
                      I agree to all statements in <a href="#!" className="text-light">Terms of service</a>
                    </label>
                  </div>
                    <div className='container'>
                  <div className="d-flex justify-content-left mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary bg-success">Login</button>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <label className="form-check-label text-light">Don't have an account?</label><br/>
                    <Link to="/SignUp" className="m-3 btn btn-primary bg-danger"  >Register</Link>
                  </div>

                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1691911823~exp=1691912423~hmac=f666d89299c84abfbacfee8046ab5eb62443786f1eb99ab2e24aff9090c1af2d"
                  className="img-fluid" alt="Sample" />

              </div>
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

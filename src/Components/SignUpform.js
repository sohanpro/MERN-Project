import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function SignUpform() {
    const [creds, setcreds] = useState({name:"",email:"shsohan",mobile:"",password:"",repeatPassword:"",location:""})


   async function HandleSubmit(event)
    {
        event.preventDefault();
       let requestData = {
          name:creds.name,
              email:creds.email,
              mobile:creds.mobile,
              password:creds.password,
              repeatPassword:creds.repeatPassword,
              location:creds.location
        }
        const response = await fetch('http://localhost:5000/createuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(requestData)
        })
        const json = await response.json()
        console.log("Data:",requestData); 
        if(!json.success)
        {
          console.log(json);
          alert("Enter valid credentials")
        }
      
    }
    function onChange(event)
{
  setcreds({...creds,[event.target.name]:event.target.value})
  console.log(setcreds)
}
  return (
    <>
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
                    <i className="fas fa-user fa-lg me-3 fa-fw text-light"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name='name' value={creds.name} onChange={onChange} className="form-control text-light"></input>
                      <label className="form-label text-light" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

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
                      <input type="text" id="mobile" name='mobile' value={creds.mobile} onChange={onChange} className="form-control text-light" />
                      <label className="form-label text-light" htmlFor="form3Example4c">Mobile Number</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw text-light"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="location" name='location' value={creds.location} onChange={onChange} className="form-control text-light" />
                      <label className="form-label text-light" htmlFor="form3Example4c">Location</label>
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
                    <i className="fas fa-key fa-lg me-3 fa-fw text-light"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="Repeatpassword" name='repeatPassword' value={creds.repeatPassword} onChange={onChange} className="form-control text-light" />
                      <label className="form-label text-light" htmlFor="form3Example4cd">Repeat your password</label>
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
                    <button type="submit" className="btn btn-primary bg-success">Register</button>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <label className="form-check-label text-light">Already have a account! Please LogIn</label><br/>
                    <Link to="/Login" className="m-3 btn btn-primary bg-danger"  >Login</Link>
                  </div>

                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

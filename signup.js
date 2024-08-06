// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';
// import { useLocation } from 'react-router-dom'

// import user_icon from './Assets/person.jpeg';
// import email_icon from './Assets/e-mail.jpeg';
// import password_icon from './Assets/password.jpeg';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//   const [action, setAction] = useState("Sign Up");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state && location.state.showToast) {
//       toast.success('You have logged out successfully!');
//     }
//   }, [location.state]);

//   const handleLoginClick = () => {
//     if (action === "Login") {
//       // Navigate to the dashboard with state to show the toast
//       navigate('/dashboard', { state: { showToast: true } });
//     } else {
//       setAction("Login");
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt="user icon" />
//             <input type="text" placeholder='Name' />
//           </div>
//         )}
//         <div className="input">
//           <img src={email_icon} alt="email icon" />
//           <input type="email" placeholder='Email Id' />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="password icon" />
//           <input type="password" placeholder='Password' />
//         </div>
//       </div>
//       {action === "Sign Up" ? null : (
//         <div className="forget-password">Lost Password ?<span>Click Here!</span></div>
//       )}
//       <div className="submit-container">
//         <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
//         <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLoginClick}>Login</div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { signup } from "../services/apiservices";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,g
    });
  };
//comments
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/signup', {
        method:'POST',
        headers:{
          'Content-Type':'application/jsoon'
        }
      });
      console.log("response", response);
      alert("You have successfully Registered");
      navigate("/");
    } catch (error) {
      alert("Error during signup, please try again");
    }
  };

  return (
    <div className="main-container">
      <div className="signup-box p-5 shadow-lg">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first">First Name: </label>
            <input
              type="text"
              className="form-control"
              id="first"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              maxLength={10}
              minLength={3}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last">Last Name: </label>
            <input
              type="text"
              className="form-control"
              id="last"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="abcd@gmai.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              maxLength={12}
              minLength={8}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

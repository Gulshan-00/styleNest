import React, { useRef, useState } from "react";
import "./CSS/LoginSignup.css";
import { checkValidData } from "../Utils/Validate";

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});
  const [errorMessage, setErrorMessage]=useState(null);

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  const login = async () => {
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  } 

  // My Message validation for the sign in form.

  const email=useRef(null);
  const password=useRef(null);

  // const handleButtonClick=()=>{
  //   console.log(email.current.value);
  //   console.log(password.current.value);

  //   const errorMessage=checkValidData(email.current.value,password.current.value);
  //   console.log(errorMessage);
  //   setErrorMessage(errorMessage);
 

  // }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input ref={email} type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
          
          <input ref={password} type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>

        <p>{errorMessage}</p>

        {/* <button onClick={{handleButtonClick}} onClick={()=>{state==="Login"?login():signup()}} >Continue</button> */}



        <button
  onClick={() => {
    // Validate email and password for sign-up before proceeding
    const validationError = checkValidData(email.current.value, password.current.value);
    if (validationError) {
      setErrorMessage(validationError);
      return; // Prevent further execution if validation fails
    }

    // Call appropriate function based on state
    if (state === "Login") {
      login();
    } else {
      signup();
    }
  }}
>
  Continue
</button>


        {state==="Login"?
        <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        :<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;



// import React, { useRef, useState } from "react";
// import "./CSS/LoginSignup.css";
// import { checkValidData } from "../Utils/Validate";

// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState(null);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     // ... your login logic here
//   };

//   const signup = async () => {
//     const { username, email, password } = formData; // Destructure for clarity

//     // Basic validation using checkValidData function (assuming it returns an error message string)
//     const validationError = checkValidData(email, password);
//     if (validationError) {
//       setErrorMessage(validationError);
//       return; // Prevent further execution if validation fails
//     }

//     let dataObj;
//     try { // Wrap in a try-catch block for error handling
//       const response = await fetch("http://localhost:4000/signup", {
//         method: "POST",
//         headers: {
//           Accept: "application/form-data",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       dataObj = await response.json(); // Potential error handling with .catch()
//     } catch (error) {
//       console.error("Error during signup:", error);
//       setErrorMessage("An error occurred during signup. Please try again."); // User-friendly error message
//       return; // Prevent further processing
//     }

//     if (dataObj.success) {
//       localStorage.setItem("auth-token", dataObj.token);
//       window.location.replace("/");
//     } else {
//       setErrorMessage(dataObj.errors || "Signup failed. Please check your details."); // Handle both specific and generic errors
//     }
//   };

//   // Improved handleButtonClick function
//   const handleButtonClick = () => {
//     const { email, password } = formData; // Destructure for clarity

//     const validationError = checkValidData(email, password);
//     if (validationError) {
//       setErrorMessage(validationError);
//       return; // Prevent form submission if validation fails
//     }

//     // Call signup function on button click
//     signup();
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Sign Up" && (
//             <input
//               type="text"
//               placeholder="Your name"
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email address"
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//           />
//         </div>
//         <p>{errorMessage}</p>
//         <button onClick={handleButtonClick}>Continue</button>
//         {state === "Login" ? (
//           <p className="loginsignup-login">
//             Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Already have an account? <span onClick={() => setState("Login")}>Login here</span>
//           </p>
//         )}
//         <div className="loginsignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;




// import React, { useRef, useState } from "react";
// import "./CSS/LoginSignup.css";
// import { checkValidData } from "../Utils/Validate";

// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState(null);

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Login function remains unchanged (assuming it's handled elsewhere)

//   const signup = async () => {
//     const { username, email, password } = formData; // Destructure for clarity

//     // Basic validation using checkValidData function (assuming it returns an error message string)
//     const validationError = checkValidData(email, password);
//     if (validationError) {
//       setErrorMessage(validationError);
//       return; // Prevent further execution if validation fails
//     }

//     let dataObj;
//     try { // Wrap in a try-catch block for error handling
//       const response = await fetch("http://localhost:4000/signup", {
//         method: "POST",
//         headers: {
//           Accept: "application/form-data",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       dataObj = await response.json(); // Potential error handling with .catch()
//     } catch (error) {
//       console.error("Error during signup:", error);
//       setErrorMessage("An error occurred during signup. Please try again."); // User-friendly error message
//       return; // Prevent further processing
//     }

//     if (dataObj.success) {
//       localStorage.setItem("auth-token", dataObj.token);
//       window.location.replace("/");
//     } else {
//       setErrorMessage(dataObj.errors || "Signup failed. Please check your details."); // Handle both specific and generic errors
//     }
//   };

//   // Improved handleButtonClick function
//   const handleButtonClick = () => {
//     if (state !== "Sign Up") return; // Only handle click if in Sign Up state

//     const { email, password } = formData; // Destructure for clarity

//     const validationError = checkValidData(email, password);
//     if (validationError) {
//       setErrorMessage(validationError);
//       return; // Prevent form submission if validation fails
//     }

//     // Call signup function on button click
//     signup();
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Sign Up" && (
//             <input
//               type="text"
//               placeholder="Your name"
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email address"
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//           />
//         </div>
//         <p>{errorMessage}</p>
//         <button onClick={handleButtonClick}>Continue</button>
//         {state === "Login" ? (
//           <p className="loginsignup-login">
//             Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Already have an account? <span onClick={() => setState("Login")}>Login here</span>
//           </p>
//         )}
//         <div className="loginsignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


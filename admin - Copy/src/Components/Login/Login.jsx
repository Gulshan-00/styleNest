// import React from 'react';
// import { useState } from 'react';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorMessage(null); // Clear any existing error message

//     try {
//       await onLogin(username, password);
//     } catch (error) {
//       setErrorMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       {/* Login form with username, password fields, and submit button */}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </div>
//   );
// }

// export default Login;




// import React from 'react';
// import { useState } from 'react';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorMessage(null); // Clear any existing error message

//     try {
//       await onLogin(username, password);
//     } catch (error) {
//       setErrorMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       {/* Login form with username, password fields, and submit button */}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </div>
//   );
// }

// export default Login;




// ...........................................................................



import React from 'react';
import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

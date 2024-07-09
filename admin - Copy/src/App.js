// import { BrowserRouter } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Navbar from "./Components/Navbar/Navbar";
// import Admin from "./Pages/Admin";

// export const backend_url = 'http://localhost:4000';
// export const currency = '₹';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Admin />
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;







// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Navbar from "./Components/Navbar/Navbar";
// import Admin from "./Pages/Admin";
// import Login from "./Pages/Login";

// export const backend_url = 'http://localhost:4000';
// export const currency = '₹';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/admin" element={
//             <>
//               <Navbar />
//               <Admin />
//               <Footer />
//             </>
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={
          <>
            <Navbar />
            <Admin />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;





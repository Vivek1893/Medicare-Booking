// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { BrowserRouter } from "react-router-dom";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { AuthContextProvider } from "./context/AuthContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <authContextProvider>
//         <ToastContainer
//           theme="dark"
//           position="top-right"
//           autoClose={3000}
//           closeOnClick
//           pauseOnHover={false}
//         />
//         <App />
//       </authContextProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext.jsx"; // Corrected import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider> {/* Corrected component name */}
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </AuthContextProvider> {/* Corrected closing tag */}
    </BrowserRouter>
  </React.StrictMode>,
 
);

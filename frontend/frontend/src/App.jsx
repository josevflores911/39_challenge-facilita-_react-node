import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CreateClients from "./pages/CreateClients";
import ShowClient from "./pages/ShowClient";
import EditClient from "./pages/EditClient";
import DeleteClients from "./pages/DeleteClients";

const App = () => {
  return (
    <>
      <div className="bg-blue-400 text-white">header</div>
      <div  className="flex flex-row h-100px">
        <div  style={{ backgroundColor: 'black', width: '200px', color: 'white',height:'97vh' }}>
          <ul>
            <li className="p-4">option link 1</li>
            <li className="p-4">option link 2</li>
            <li className="p-4">option link 3</li>
          </ul>
        </div>
        <div className="w-full">
          <h2>***</h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients/create" element={<CreateClients />} />
            <Route path="/clients/details/:id" element={<ShowClient />} />
            <Route path="/clients/edit/:id" element={<EditClient />} />
            <Route path="/clients/delete/:id" element={<DeleteClients />} />
          </Routes>
        </div>
      </div>
      <div className="absolute w-full bottom-0 bg-blue-400 text-white">footer</div>
    </>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

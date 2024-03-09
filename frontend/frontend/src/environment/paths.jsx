import React from 'react';
import Home from "../pages/Home.jsx"
import CreateClients from "../pages/CreateClients.jsx";
import ShowClient from "../pages/ShowClient.jsx";
import EditClient from "../pages/EditClient.jsx";
import DeleteClients from "../pages/DeleteClients.jsx";




const routesConfig = [
  { path: '/', element: <Home/> },
  { path: '/clients/create', element: CreateClients  },
  { path: '/clients/details/:id', element: ShowClient },
  { path: '/clients/edit/:id', element: EditClient },
  { path: '/clients/delete/:id', element: DeleteClients  },
];

export default routesConfig;
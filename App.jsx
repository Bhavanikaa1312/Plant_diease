// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import Login from './components/Login';
import SignUp from './components/SignUp';
// import Search from './components/Search';
// import PlantDisease from './components/PlantDisease';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
  // {
  //   path: "/search",
  //   element: <Search />,
  // },
  // {
  //   path: "/plantdisease",
  //   element: <PlantDisease />,
  // },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;

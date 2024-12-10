import {
    createBrowserRouter,

  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import Details from "../pages/Details";





  const router = createBrowserRouter([
    {
      path: "/",
      element : <App/>,
      children : [

         {
            path : '/',
            element : <Home/>
         }
         ,

         {

          path : '/details/:name',
          element : <Details/>

         }
       



      


         
    
      




      ]
    
    },

   
  ]);

  export default router ;
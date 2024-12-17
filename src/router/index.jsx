import {
    createBrowserRouter,

  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import Details from "../pages/Details";
import Contact from "../pages/Contact";
import Photos from "../pages/Photos";
import ImageView from "../components/ImageView";
import Option from "../components/Option";





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

         },

         {
           
           path : '/images',
           element : <Photos/>
         }
         ,

         {

          path : '/contact',
          element : <Contact/>

         }
       
         ,

         {
           path : '/gallery',
           element: <Option/>
         }
         ,

         {

           path : '/image-view/:image',
           element : <ImageView/>
         }



      


         
    
      




      ]
    
    },

   
  ]);

  export default router ;
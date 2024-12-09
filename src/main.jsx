
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './router/index.jsx';
import { Provider } from 'react-redux';
import store from './Store/store.jsx'



createRoot(document.getElementById('root')).render(

  
  
  


   <Provider store={store}>

      <RouterProvider router={router}/>

   </Provider>

    



 
)

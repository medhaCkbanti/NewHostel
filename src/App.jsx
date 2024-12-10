
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import './App.css' ;
import FooterMain from "./components/FooterMain";



const App = () => {
    



  return (
    <>
  
        <Header />

        <main className="min-h-[calc(100vh-100px)] pt-24">
          <Outlet />
        </main>
        
        <FooterMain/>
        <Footer />
    
    </>
  );
};

export default App;

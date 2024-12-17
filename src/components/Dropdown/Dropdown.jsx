import React, { useState } from 'react';
import { aboutDropdown } from '../Navitems/Navitems';
import { Link } from 'react-router-dom';

const Dropdown = () => {

    const [dropdown,setDropdown] = useState(false) ;
    return (
        <>

<ul className={`about-submenu ${dropdown ? "clicked" : ""}`} onClick={() => setDropdown(!dropdown)}>


              {
                aboutDropdown.map((item) => {

                     return(
                          
                        <li key={item.id}>

                            <Link to={item.path} className={item.class} onClick={()=>setDropdown(false)}>
                            
                                  {item.title}

                             </Link>

                             
                        </li>
                     )
                })
              }
               
           </ul>
            
        </>
    );
};

export default Dropdown;
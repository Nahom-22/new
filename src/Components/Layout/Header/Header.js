import React from "react";
import '../../UI/Styles/header.css'
import Navbar from "./Navbar/Navbar";


const Header=()=>{

return(
    <React.Fragment>
        <div className="header-holder">
           <div className="header-items">
             <div className="header-left">
             </div>
             <div className="header-center">
                <h1>ShopIt</h1>
             </div>
             <div className="header-right">
               <Navbar />
             </div>
            </div>     
        </div>
    </React.Fragment>
)


}

export default Header

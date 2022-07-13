import React from "react";
const date=new Date().getFullYear();
function Footer(){
    return(
    <>
    <div className="bottom-container">
        <p>Copywright &copy; {date}</p>
    </div>
    </>
    )
}


export default Footer;
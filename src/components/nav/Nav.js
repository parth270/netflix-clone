import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";

const Nav = () => {

    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY>100) {
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])

  return (
    <div className={classes.nav} style={{backgroundColor:`${show?'#111':''}`}} >
      <img
        src="logo.png"
        alt="logo"
        className={classes.logo}
      />
      <img src="avtar.png" alt="avatar" className={classes.avatar}/>

    </div>
  );
};

export default Nav;

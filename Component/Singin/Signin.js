import React,{useState} from 'react'
import classes from "./Signin.module.css"
import img0 from "../../Assests/img1.png"

function Signin() {

    
  return (
    <section className={classes.section1}>
        <div className={classes.mainDiv}>
            <div className={classes.rightDiv}>
                
            <div className={classes.LogoHead}>
            <div><img className={classes.imgLogo} src="https://cdn.vectorstock.com/i/thumb-large/32/95/wave-background-of-doodle-hand-drawn-lines-vector-20693295.webp" height="70" width="80" alt="" /></div>
                
                <div className={classes.LogoHeading}>
                    <h3>Your Logo</h3>
                </div>
               
            </div>
            <div className={classes.signupHead}>
                <h1>SignUp</h1>
               
            </div>
            <div className={classes.signuph4}>
                <h4>Your Account</h4>
            </div>
            <div className={classes.inputField1}>
                <p className={classes.text1Div}>Placeholder id</p>
            </div>
            <div className={classes.input2}>
                <p className={classes.text1Div1}>Password</p>
            </div>
            <div className={classes.checkbox}>
                <input type="checkbox" />
               
            </div>
            <div className={classes.checkboxText0}>
                <p className={classes.checkboxText1}>Remember Me</p>
                </div>
            <div >
                <button className={classes.btn}>Sign In</button>
            </div>
            </div>
            <div className={classes.leftDiv}>
                <img src={img0} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Signin;
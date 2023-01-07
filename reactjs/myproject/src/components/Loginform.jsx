import React from "react";
import "./style.css"

const LoginForm = () => {
    return (
        <div className="box">
            <div className="form">
                <h2>Sign In</h2>
                <div class="inputbox">
                    <input type="text" required="required" />
                    <span>Username</span>

                    <i></i>
                </div>
                <div class="inputbox">
                    <input type="password" required="required" />
                    <span>password</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href='#'>Forget Password</a>
                    <a href='#'>Signup</a>
                </div>
                <input type="submit" value="Login"></input>
            </div>
        </div>


    )
}

export default LoginForm
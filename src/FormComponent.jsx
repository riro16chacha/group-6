import React from "react";
function Form(){
    return(
        <>
         <h1>Login Form</h1>
         <form>
           <input type="email"name="e-mail"placeholder="type your email" />
           <input type="password"name="password"placeholder="enter your password" />
           <button type="submit">Login</button>
         </form>
        </>
    )
}
export default Form
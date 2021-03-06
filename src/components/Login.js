import { useState } from 'react';
import "./Login.css"


const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className = "login">
            <form className = "login_form">
                <h1>Login here </h1>
                <input 
                    type="name" 
                    placeholder = "name" 
                    value = {name} 
                    onChange = {(e)=>setName(e.target.value)}/>
                <input 
                    type="email" 
                    placeholder = "email" 
                    value = {email} 
                    onChange = {(e)=>setEmail(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder = "password" 
                    value = {password} 
                    onChange = {(e)=>setPassword(e.target.value)}/>
                <button type = "submit" className= "submit_btn">Submit</button>
            </form>
        </div>
    )
}

export default Login

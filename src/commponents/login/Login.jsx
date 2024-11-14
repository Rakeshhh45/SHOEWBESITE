import { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Login() {
    const [action, setAction] = useState('');

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [registar, setRegistar] = useState(false);

    const registerLink = () => {
        setAction(' active');
    };
    const loginLink = () => {
        setAction('');
    };

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission and page reload
        let u = localStorage.getItem("username");
        let p = localStorage.getItem("password");

        if (username === u && password === p) {
            alert("Login Successfully...!!");
            setLogin(true);
            window.location.reload();
        } else {
            alert("Username or Password incorrect...!!");
        }
    }

    const handleRegistar = (event) => {
        event.preventDefault();
        if (name && email && pass) {
            localStorage.setItem("username", name)
            localStorage.setItem("email", email)
            localStorage.setItem("password", pass)
            alert("Account is created successfully !!")
            setRegistar(true)
            window.location.reload();
        } else {
            alert("All fields are required!");
        }

    };

    return (
        <>
            <div className="harsh">
                <div className={`loginform${action}`}>
                    <div className='form-box login'>
                        <form action="" onSubmit={handleLogin}>
                            <h1>Login Here</h1>
                            <div className='input-box'>
                                <input type="text" placeholder='Username' value={username} required onChange={(e) => { setUsername(e.target.value) }} />
                                <FaUser className='icon' />
                            </div>
                            <div className='input-box'>
                                <input type="password" placeholder='Password' value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                                <FaLock className='icon' />
                            </div>
                            <div className='remember-forgot'>
                                <label><input type="checkbox" required />Remember me</label>
                                <a href="#">Forgot Password</a>
                            </div>
                            <button type='submit'>login</button>
                            <div className='ragistar-link'>
                                <p>Don't have an account?<a href="#" onClick={registerLink}>Ragistar</a></p>
                            </div>
                        </form>
                    </div>

                    <div className='form-box ragistar'>
                        <form action="" onSubmit={handleRegistar}>
                            <h1>Registration Here</h1>
                            <div className='input-box'>
                                <input type="text" placeholder='Username' value={name} required onChange={(e) => { setName(e.target.value) }} />
                                <FaUser className='icon' />
                            </div>
                            <div className='input-box'>
                                <input type="email" placeholder='Email' value={email} required onChange={(e) => { setEmail(e.target.value) }} />
                                <FaEnvelope className='icon' />
                            </div>
                            <div className='input-box'>
                                <input type="password" placeholder='Password' value={pass} required onChange={(e) => { setPass(e.target.value) }} />
                                <FaLock className='icon' />
                            </div>
                            <div className='remember-forgot'>
                                <label><input type="checkbox" required />I agree to the tirms & conditions</label>
                            </div>
                            <button type='submit'>Ragister</button>
                            <div className='ragistar-link'>
                                <p>Already have an account?<a href="#" onClick={loginLink}>Login</a></p>
                                <NavLink to="login/Login.jsx"></NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
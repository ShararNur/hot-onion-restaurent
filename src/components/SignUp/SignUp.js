import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../resources/logo2.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    // ! working authentication

    const [newUser, setNewUser] = useState(true);


    //! Another approach for authentication

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/placeOrder')
        }
    }, [])

    const handleAction = (id) => {
        const authentication = getAuth();
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    console.log(response)
                    navigate('/placeOrder')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                }).catch((error) => {
                    if (error.code === 'auth/wrong-password') {
                        toast.error('Please check the Password');
                    }
                    if (error.code === 'auth/user-not-found') {
                        toast.error('Please check the Email');
                    }
                })
        }
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    console.log(response)
                    navigate('/placeOrder')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                }).catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        toast.error('Email Already in Use');
                    }
                })
        }
    }


    return (
        <div className="login-panel" >
            <ToastContainer />
            <main className="form-signIn text-center">
                <img className="mb-5 me-3" src={logo} alt="" height="57" />

                {newUser && <div className="form-floating mb-3">
                    <input name="name" type="text" className="form-control" id="floatingName" placeholder="Full Name" required />
                    <label for="floatingName">Name</label>
                </div>}

                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="floatingInput" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input name="password" type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>

                {newUser && <div className="form-floating mb-3">
                    <input name="checkPassword" type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" required />
                    <label for="floatingConfirmPassword">Confirm Password</label>
                </div>}

                {newUser ? <button className="w-100 btn btn-lg btn-danger" onClick={() => handleAction(2)}>Sign up</button>
                    : <button className="w-100 btn btn-lg btn-danger" onClick={() => handleAction(1)}>Log in</button>}

                {newUser ? <p className="mt-5 mb-3 text-danger">Have an account? <Link to="#" style={{ textDecoration: 'none' }} onClick={() => setNewUser(false)}>Log in</Link></p>
                    : <p className="mt-5 mb-3 text-danger">Don't have an account? <Link to="#" style={{ textDecoration: 'none' }} onClick={() => setNewUser(true)}>Sign up</Link> </p>}
            </main>
        </div>
    );
};

export default SignUp;
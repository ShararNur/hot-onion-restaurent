import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../resources/logo2.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.config'
import { CurrentUserContext, NewUserContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { initializeApp } from "firebase/app";
// // import firebaseConfig from './firebase.config';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// const app = initializeApp(firebaseConfig);

const Login = () => {

    //! Another approach for authentication
    // const [newUser, setNewUser] = useState(true);
    const [newUser, setNewUser] = useContext(NewUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loggedInUser, setLoggedInUser] = useContext(CurrentUserContext);
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken);

        if (authToken) {
            navigate('/placeOrder')
        }
    }, [])

    const handleAction = (id) => {
        const authentication = getAuth();
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    console.log(response);
                    setLoggedInUser(response);
                    navigate('/placeOrder');
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
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

            var confirmPassword = document.querySelector('.confirmPassword').value;

            if (password === "") {
                alert("Field cannot be empty.");
            }
            else if (password !== confirmPassword) {
                alert("Password didn't match try again.");
                return false
            }
            else if (password === confirmPassword) {
                createUserWithEmailAndPassword(authentication, email, password)
                    .then((response) => {
                        response.user.displayName = name;
                        response._tokenResponse.displayName = name;
                        // console.log(response.user.displayName)
                        console.log(response)
                        setLoggedInUser(response);
                        updateUserName(name)
                        navigate('/placeOrder')
                        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                    }).catch((error) => {
                        if (error.code === 'auth/email-already-in-use') {
                            toast.error('Email Already in Use');
                        }
                    })
            }
            return true
        }
    }

    const handleUserName = (e) => {
        setName(e.target.value);
    }

    const updateUserName = name => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            console.log('user name updated successfully');
        }).catch((error) => {
            // An error occurred
            console.log(error)
        });
    }



    return (
        <div className="login-panel" >
            <ToastContainer />
            <main className="form-signin text-center">
                {/* <h4>email: {email}</h4> */}
                <img className="mb-5 me-3" src={logo} alt="" height="57" />

                {newUser && <div className="form-floating mb-3">
                    <input name="name" type="text" className="form-control" id="floatingName" onChange={handleUserName} placeholder="Full Name" required />
                    <label for="floatingName">Name</label>
                </div>}

                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="floatingInput" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input name="password" type="password" className="form-control password" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>

                {newUser && <div className="form-floating mb-3">
                    <input name="checkPassword" type="password" className="form-control confirmPassword" id="floatingConfirmPassword" placeholder="Confirm Password" required />
                    <label for="floatingConfirmPassword">Confirm Password</label>
                </div>}

                {newUser ? <button className="w-100 btn btn-lg btn-danger button" onClick={() => handleAction(2)}>Sign up</button>
                    : <button className="w-100 btn btn-lg btn-danger button" onClick={() => handleAction(1)}>Log in</button>}

                {/* {loggedInUser?.email ? <button className="w-100 btn btn-lg btn-danger" onClick={logout}>Sign Out</button>
                        : <button className="w-100 btn btn-lg btn-danger" >Sign up</button>} */}
                {newUser ? <p className="mt-5 mb-3 text-danger">Have an account? <Link to="/login" style={{ textDecoration: 'none' }} onClick={() => setNewUser(false)}>Log in</Link></p>
                    : <p className="mt-5 mb-3 text-danger">Don't have an account? <Link to="/signUp" style={{ textDecoration: 'none' }} onClick={() => setNewUser(true)}>Sign up</Link> </p>}
            </main>
        </div>
    );
};

export default Login;
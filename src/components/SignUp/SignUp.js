import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../resources/logo2.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { auth } from '../../firebase.config'
import { UserContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: '',
    //     photo: '',
    // })

    // // const auth = getAuth();
    // // createUserWithEmailAndPassword(auth, email, password)
    // //     .then((userCredential) => {
    // //         // Signed in 
    // //         const user = userCredential.user;
    // //         // ...
    // //     })
    // //     .catch((error) => {
    // //         const errorCode = error.code;
    // //         const errorMessage = error.message;
    // //         // ..
    // //     });

    // const handleBlur = (e) => {
    //     let isFieldValid = true;
    //     // console.log(e.target.name === "email");
    //     if (e.target.name === "email") {
    //         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    //     }
    //     if (e.target.name === "password") {
    //         const isPasswordValid = e.target.value.length > 6;
    //         const passwordHasNumber = /\d{1}/.test(e.target.value);
    //         isFieldValid = isPasswordValid && passwordHasNumber;
    //     }
    //     if (isFieldValid) {
    //         const newUserInfo = { ...user };
    //         newUserInfo[e.target.name] = e.target.value;
    //         setUser(newUserInfo);
    //     }
    // }


    // const handleSubmit = (e) => {
    //     console.log(user.email, user.password);
    //     if (user.email && user.password) {
    //         const auth = getAuth();
    //         createUserWithEmailAndPassword(auth, user.email, user.password)
    //             .then((res) => {
    //                 // Signed in 
    //                 const newUserInfo = { ...user };
    //                 console.log(newUserInfo);
    //                 newUserInfo.error = '';
    //                 newUserInfo.success = true;
    //                 setUser(newUserInfo);
    //                 updateUserName(user.name)
    //                 // const user = userCredential.user;
    //                 // ...
    //             })
    //             .catch((error) => {
    //                 const newUserInfo = { ...user };
    //                 newUserInfo.error = error.message;
    //                 newUserInfo.success = false;
    //                 setUser(newUserInfo);
    //             });
    //     }
    //     e.preventDefault();
    // }

    // const handleSignOut = () => {
    //     const auth = getAuth();

    //     signOut(auth)
    //         .then((result) => {
    //             const SignedOutUser = {
    //                 isSignedIn: false,
    //                 name: '',
    //                 email: '',
    //                 photo: '',
    //                 error: '',
    //                 success: false
    //             }
    //             setUser(SignedOutUser)
    //         })
    //         .catch((error) => {

    //         })
    // }

    // const updateUserName = name => {
    //     const auth = getAuth();
    //     updateProfile(auth.currentUser, {
    //         displayName: name
    //     }).then(() => {
    //         // Profile updated!
    //         console.log('user name updated successfully');
    //     }).catch((error) => {
    //         // An error occurred
    //         console.log(error)
    //     });
    // }

    // ! working authentication

    // const [registerEmail, setRegisterEmail] = useState("");
    // const [registerPassword, setRegisterPassword] = useState("");
    // const [loginEmail, setLoginEmail] = useState('')
    // const [loginPassword, setLoginPassword] = useState('')
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(true);


    // onAuthStateChanged(auth, (currentUser) => {
    //     setLoggedInUser(currentUser);
    // })

    // const loginOrRegister = async (e) => {
    //     let user;
    //     try {
    //         if (newUser) {
    //             user = createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    //             console.log(loggedInUser)
    //         }
    //         else {
    //             user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    //             console.log(loggedInUser)
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    //     e.preventDefault();
    // }

    // // const login = async (e) => {
    // //     try {
    // //         const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    // //         console.log(user)
    // //     } catch (error) {
    // //         console.log(error.message)
    // //     }
    // //     e.preventDefault();
    // // }

    // const logout = async () => {
    //     await signOut(auth);
    // }

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
            <main className="form-signin text-center">
                {/* <h4>email: {email}</h4> */}
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

                {/* {loggedInUser?.email ? <button className="w-100 btn btn-lg btn-danger" onClick={logout}>Sign Out</button>
                        : <button className="w-100 btn btn-lg btn-danger" >Sign up</button>} */}
                {newUser ? <p className="mt-5 mb-3 text-danger">Have an account? <Link to="#" style={{ textDecoration: 'none' }} onClick={() => setNewUser(false)}>Log in</Link></p>
                    : <p className="mt-5 mb-3 text-danger">Don't have an account? <Link to="#" style={{ textDecoration: 'none' }} onClick={() => setNewUser(true)}>Sign up</Link> </p>}
            </main>
        </div>
    );
};

export default SignUp;
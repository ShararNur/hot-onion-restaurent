import React, { useContext } from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import logo from '../../resources/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext, NewUserContext } from '../../App';

const Header = () => {

    const [newUser, setNewUser] = useContext(NewUserContext);

    let navigate = useNavigate();

    const handleSignUp = () => {
        setNewUser(true)
        navigate("/signUp")
    }


    return (
        <div className="mb-2">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo}
                        height="35"
                        className="d-inline-block align-top"
                        alt="Red Onion logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <FontAwesomeIcon icon={faShoppingCart} className="me-4" />
                            {/* Convert them to React Router LINK tag  */}
                            <Link to="/login" className="me-4" style={{ textDecoration: 'none' }} onClick={setNewUser(false)}>Login</Link>
                            <Button variant="danger rounded-pill px-3" onClick={handleSignUp}>Sign up</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
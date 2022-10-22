import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../../../contexts/UserContext";
const Register = () => {
  const { createUser, updateuserProfile, verifyUserEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepeted, setAccepted] = useState(false);
  //terms & condiotion
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
      })
      .catch((e) => {
        setError(e);
        console.error(e);
        console.log(e.message);
      });
  };

  const handleEmailVerification = () => {
    verifyUserEmail()
      .then((res) => {
        toast.warning("Check your email for verification!");
      })
      .catch((err) => toast.warning("Something went wrong", err));
  };

  /*  verifyUserEmail()
          .then((res) => {
            toast.warning("Check your email for verification!");
          })
          .catch((err) => toast.warning("Something went wrong", err)); */

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateuserProfile(profile);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepeted}>
        Register
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;

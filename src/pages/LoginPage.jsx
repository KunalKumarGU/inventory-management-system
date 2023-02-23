import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(error);
      console.log(err);
    }
  };
  return (
    <div className="formWrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="mainText">IMS Login</h1>
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

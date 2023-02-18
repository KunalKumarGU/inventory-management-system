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
    <div className="registerPageWrapper">
      <form className="registerPageForm" onSubmit={handleSubmit}>
        <input type="email" placeholder="emmail" />
        <input type="password" placeholder="Password" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

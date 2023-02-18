import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const HomePage = (user) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Welcome Admin</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  );
};

export default HomePage;

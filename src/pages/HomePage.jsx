import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
// import { AuthContext } from "../context/AuthContext";
import {
  // getDatabase,
  ref,
  get,
  // onValue,
  // set,
  child,
  // push,
  // update,
} from "firebase/database";
import Data from "../components/Data";

const HomePage = (props) => {
  // const { currentUser } = useContext(AuthContext);
  // const [flowerCount, setFlowerCount] = useState(0);
  const [data, setData] = useState([]);
  const db = getFirestore();

  const ReadData = async (e) => {
    // e.preventDefault();
    const docSnap = await getDoc(doc(db, "Inventory", "Products"));
    setData(docSnap.data());
  };

  useEffect(() => {
    ReadData();
  }, []);

  // const WriteData = async (e) => {
  //   e.preventDefault();
  //   await setDoc(doc(db, "Inventory", "Products"), {
  //     Flowers: data,
  //   });
  // };

  return (
    <>
      <div className="navigationBar">
        Concise Decoration
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
      <Data data={data} />
    </>
  );
};

export default HomePage;

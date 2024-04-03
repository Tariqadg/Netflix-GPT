import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
     
    })
    .catch((error)=>{
    
      navigate("/error")
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            // photoURL: photoURL,
          })
        );
        navigate("/browse")

      } else {
        dispatch(removeUser());
        navigate("/")

      }
    });
  }, []);


  return (
    <div className="w-screen absolute px-4 bg-gradient-to-b from-black z-10  flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-2">
        <img className="w-12 h-12  " alt="usericon" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-6858252-5675148.png?f=webp&w=256" />
        <button className=" text-white" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;

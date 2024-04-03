import Header from "./Header";
import { useState, useRef } from "react";
import { CheckValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [IssignIn, setIsignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  // const [signupmsg, setsignupmsg] = useState(null);

  const name = useRef(null);

  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const HandleClickButton = () => {
    const message = CheckValidateData(
      email.current.value,
      password.current.value
    );

    seterrorMessage(message);
    if (message) return;
    // else setsignupmsg("account created");
    //create a new user sign in/sign up
    if (!IssignIn) {
      //signup

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { email, uid, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage + errorCode);
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage + errorCode);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsignIn(!IssignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgimage"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black  p-12 my-48 m-auto right-0 left-0 text-white bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-3xl p-2  m-1 ">
          {IssignIn ? "Sign in" : "Sign up"}{" "}
        </h1>
        {!IssignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4  w-11/12 bg-black  text-white bg-opacity-50"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4  w-11/12 bg-black  text-white bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4  w-11/12  bg-black text-white bg-opacity-50 border-solid border-white"
        />
        <p className="text-red-500 font-semibold ">{errorMessage}</p>
        {/* <p className="text-white font-semibold ">{signupmsg}</p>   */}

        <button
          className=" bg-red-700 p-4 my-6 w-11/12 cursor-pointer border-white rounded-sm"
          onClick={HandleClickButton}
        >
          {IssignIn ? "Sign in" : "Sign up"}
        </button>
        <p
          className="p-4 my-4  w-11/12 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {IssignIn
            ? "New to Netflix? Sign up now"
            : "Already a user : Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;

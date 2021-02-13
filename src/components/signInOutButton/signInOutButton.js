import { React, useContext } from "react";
import { DemoContext } from "../../context/demoContext/demoContext";

const SignInOutButton = () => {
  const [count] = useContext(DemoContext);
  let userSignedIn;
  if (count > 0) {
    userSignedIn = "Sign Out";
  } else {
    userSignedIn = "Sing In";
  }

  return <div>{userSignedIn}</div>;
};

export default SignInOutButton;

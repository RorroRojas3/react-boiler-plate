import { React, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { DemoContext } from "../../context/demoContext/demoContext";
import SignInOutModal from "../signInOutModal/signInOutModal";

const SignInOutButton = () => {
  const enableSignIn = () => {
    if (count === 0) {
      setModalShow(true);
    }
  };

  const [modalShow, setModalShow] = useState(false);
  const [count] = useContext(DemoContext);
  let isUserAuthenticated = count === 0 ? "Sign In" : "Sign Out";

  return (
    <div>
      <Button variant="dark" onClick={enableSignIn}>
        {isUserAuthenticated}
      </Button>
      <SignInOutModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default SignInOutButton;

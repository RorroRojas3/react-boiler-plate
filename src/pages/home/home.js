import { React, useContext } from "react";
import { DemoContext } from "../../context/demoContext/demoContext";
import { Button } from "react-bootstrap";

const Home = () => {
  const [count, setCount] = useContext(DemoContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Button variant="success" onClick={increment}>
        Increment
      </Button>{" "}
      <Button variant="danger" onClick={decrement}>
        Decrement
      </Button>{" "}
      {count}
    </div>
  );
};

export default Home;

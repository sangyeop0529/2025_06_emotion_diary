import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Header
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
    </div>
  );
};

export default Home;

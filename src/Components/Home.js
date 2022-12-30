import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">
        <b>Documents</b>
      </h1>
      <div className="home__firstLink">
        <Link to="./FirstDocument">
          {" "}
          - &nbsp;&nbsp;<b>Sample Document 1.pdf </b>
        </Link>
      </div>
      <div className="home__firstLink">
        <Link to='./SecondDocument'>
          {" "}
          - &nbsp;&nbsp;<b>Sample Document 2.pdf </b>
        </Link>
      </div>
      <div className="home__firstLink">
        <Link to='./ThirdDocument'>
          {" "}
          - &nbsp;&nbsp;<b>Sample Document 3.pdf</b>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import s from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";

const HomePage = () => {
  return (
    <div className={s.container}>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className={s.title}>Welcome to Your Personal Contact Book!</h1>
    </div>
  );
};

export default HomePage;

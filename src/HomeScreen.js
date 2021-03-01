import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/** nav bar here  */}
      <Nav />
      {/**here for the banner */}
      <Banner />
    </div>
  );
}

export default HomeScreen;

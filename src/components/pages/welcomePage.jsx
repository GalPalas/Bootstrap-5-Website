import React from "react";
import Showcase from "../showcase/showcase";
import Newsletter from "../newsletter/newsletter";
import Boxes from "../boxes/boxes";

function WelcomePage() {
  return (
    <div>
      <Showcase />
      <Newsletter />
      <Boxes />
    </div>
  );
}

export default WelcomePage;

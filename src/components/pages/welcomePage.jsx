import React from "react";
import Showcase from "../showcase/showcase";
import Newsletter from "../newsletter/newsletter";
import Boxes from "../boxes/boxes";
import Fundamentals from "../fundamentals/fundamentals";

function WelcomePage() {
  return (
    <div>
      <Showcase />
      <Newsletter />
      <Boxes />
      <Fundamentals />
    </div>
  );
}

export default WelcomePage;

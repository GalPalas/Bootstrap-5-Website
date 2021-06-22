import React from "react";
import Showcase from "../showcase/showcase";
import Newsletter from "../newsletter/newsletter";
import Boxes from "../boxes/boxes";
import Fundamentals from "../fundamentals/fundamentals";
import Questions from "../questions/questions";
function WelcomePage() {
  return (
    <div>
      <Showcase />
      <Newsletter />
      <Boxes />
      <Fundamentals />
      <Questions />
    </div>
  );
}

export default WelcomePage;

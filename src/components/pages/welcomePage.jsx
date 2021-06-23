import React from "react";
import Showcase from "../showcase/showcase";
import Newsletter from "../newsletter/newsletter";
import Boxes from "../boxes/boxes";
import Fundamentals from "../fundamentals/fundamentals";
import Questions from "../questions/questions";
import Instructors from "../Instructors/Instructors ";
import Contact from "../contact/contact";
function WelcomePage() {
  return (
    <div>
      <Showcase />
      <Newsletter />
      <Boxes />
      <Fundamentals />
      <Questions />
      <Instructors />
      <Contact />
    </div>
  );
}

export default WelcomePage;

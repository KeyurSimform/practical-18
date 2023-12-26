import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="react-component-navigation">
      <h1>Homepage</h1>

      <p>
        Here i have developed the 9 screens of the onboarding module of the
        practical-18 of the react component training{" "}
      </p>
      <br />
      <br />

      <p>
        Here is the figma{" "}
        <a target="_blank" href="https://www.figma.com/file/meGsASxfUlJ2hW34BnMwZt/Prism-Dashboard-UI-Kit---Desktop?node-id=173%3A7&mode=dev">
          link
        </a>
      </p>
      <br />
      <br />
      <ul>
        <li>
          <Link to="/onboardingthree">1) Page 1</Link>
        </li>
        <li>
          <Link to="/onboardingone"> 2) Page 2</Link>
        </li>

        <li>
          <Link to="/onboardingthreetwo">3) Page 3</Link>
        </li>
        <li>
          <Link to="/onboardingthreeone">4) Page 4</Link>
        </li>

        <li>
          <Link to="/onboardingthreethree">5) Page 5</Link>
        </li>
        <li>
          <Link to="/onboardingfourthree">6) Page 6</Link>
        </li>
        <li>
          <Link to="/onboardingfourtwo">7) Page 7</Link>
        </li>
        <li>
          <Link to="/onboardingfourone">8) Page 8</Link>
        </li>
        <li>
          <Link to="/onboardingfour1">9) Page 9</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

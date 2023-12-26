import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const OnboardingFour1 = React.lazy(() => import("pages/OnboardingFour1"));
const OnboardingFourOne = React.lazy(() => import("pages/OnboardingFourOne"));
const OnboardingFourTwo = React.lazy(() => import("pages/OnboardingFourTwo"));
const OnboardingFourThree = React.lazy(() =>
  import("pages/OnboardingFourThree")
);
const OnboardingThreeThree = React.lazy(() =>
  import("pages/OnboardingThreeThree")
);
const OnboardingThreeOne = React.lazy(() => import("pages/OnboardingThreeOne"));
const OnboardingThreeTwo = React.lazy(() => import("pages/OnboardingThreeTwo"));
const OnboardingOne = React.lazy(() => import("pages/OnboardingOne"));
const OnboardingThree = React.lazy(() => import("pages/OnboardingThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/onboardingthree" element={<OnboardingThree />} />
          <Route path="/onboardingone" element={<OnboardingOne />} />
          <Route path="/onboardingthreetwo" element={<OnboardingThreeTwo />} />
          <Route path="/onboardingthreeone" element={<OnboardingThreeOne />} />
          <Route
            path="/onboardingthreethree"
            element={<OnboardingThreeThree />}
          />
          <Route
            path="/onboardingfourthree"
            element={<OnboardingFourThree />}
          />
          <Route path="/onboardingfourtwo" element={<OnboardingFourTwo />} />
          <Route path="/onboardingfourone" element={<OnboardingFourOne />} />
          <Route path="/onboardingfour1" element={<OnboardingFour1 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { QuizDetails } from "./components/QuizDetails";
// import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/gallery";
import { Prize } from "./components/Prize";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <QuizDetails data={landingPageData.QuizDetails} />
      <Prize data={landingPageData.Prize} />
      {/* <Schedule data={landingPageData.Schedule} /> */}
      <Gallery />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

import { useRef } from "react";

import { Features, Lessons, Header, About, Hero } from "./components";
import "./App.css";

function App({ headerMenu, courses, features, socials }) {
  const heroRef = useRef(null);
  const lessonsRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);

  function scrollTo(elemRef) {
    switch (elemRef) {
      case "heroRef":
        heroRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "lessonsRef":
        lessonsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "featuresRef":
        featuresRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "aboutRef":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="App">
      <Header menu={headerMenu} scrollTo={scrollTo} />
      <Hero ref={heroRef} socials={socials} />
      <Lessons ref={lessonsRef} lessons={courses} />
      <Features ref={featuresRef} features={features} />
      <About ref={aboutRef} />
    </div>
  );
}

export default App;

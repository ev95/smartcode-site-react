import { Features, Lessons, Header, About, Hero } from "./components";
import "./App.css";

function App({ headerMenu, courses, features, socials }) {
  return (
    <div className="App">
      <Header menu={headerMenu} />
      <Hero socials={socials} />
      <Lessons lessons={courses} />
      <Features features={features} />
      <About />
    </div>
  );
}

export default App;

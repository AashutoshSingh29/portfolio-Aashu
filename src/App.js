import "./App.css";
import ContactUs from "./components/ContactUs";
import Education from "./components/Education";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Education />
      <ContactUs />
    </div>
  );
}

export default App;

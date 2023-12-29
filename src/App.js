import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headtop from "./Components/Headtop";
import About from "./Components/About";
import Utilitis from "./Components/Utilitis";
import MIntnft from "./Components/MIntnft";
import Team from "./Components/Teammeet";
import Partner from "./Components/Partner";
import Faqq from "./Components/Faqq";
import Kongs from "./Components/Kongs";
import Road from "./Components/Road";
import Backtop from "./Components/Backtop";

function App() {
  return (
    <div className="App">
      <Headtop />
      <About />
      <Backtop />
      <Utilitis />
      <Kongs />
      <MIntnft />
      <Road />
      <Partner />
      <Team />
      <Faqq />
    </div>
  );
}

export default App;

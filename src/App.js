import "./App.css";
import Center from "./Center/Center";

import DivisionLine from "./DivisionLine/DivisionLine";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

function App() {
  return (
    <div className="App">
      <div className="mainSection">
        <LeftSection />
        <DivisionLine />
        <Center />
        <RightSection />
      </div>
    </div>
  );
}

export default App;

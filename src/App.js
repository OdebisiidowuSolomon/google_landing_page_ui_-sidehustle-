import Content from "./component/Content";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Trend from "./component/Trend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Trend />
      <Footer />
    </div>
  );
}

export default App;

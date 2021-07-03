
import './App.css';
import Header from './layout/Header'
import Practices from "./layout/Practices";
import Result from "./layout/Result"
import Features from "./layout/Features";
import Contact from "./layout/Contact"
import Gifts from "./layout/Gifts";
import Timer from "./layout/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <Practices />
      <Result />
      <Features />
      <Contact />
      <Gifts />
      <Timer />
    </div>
  );
}

export default App;

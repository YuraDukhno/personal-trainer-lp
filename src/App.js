
import './App.css';
import Header from './layout/Header'
import Practices from "./layout/Practices";
import Result from "./layout/Result"
import Features from "./layout/Features";
import Contact from "./layout/Contact"
import Gifts from "./layout/Gifts";

function App() {
  return (
    <div className="App">
      <Header />
      <Practices />
      <Result />
      <Features />
      <Contact />
      <Gifts />
    </div>
  );
}

export default App;

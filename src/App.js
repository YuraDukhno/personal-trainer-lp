
import './App.css';
import Header from './layout/Header'
import Practices from "./layout/Practices";
import Result from "./layout/Result"
import Features from "./layout/Features";
import Contact from "./layout/Contact"
import Gifts from "./layout/Gifts";
import Timer from "./layout/Timer";
import Testimonials from "./layout/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Practices />
      <Result title={"Instant Results"} text={"100% Fat Burn"} />
      <Features />
      <Contact />
      <Gifts />
      <Timer />
      <Result
        title={"See What People Think About Us"}
        text={"What People Say"}
      />
      <Testimonials />
    </div>
  );
}

export default App;

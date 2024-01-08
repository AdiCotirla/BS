import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LandPage from "./Components/LandPage";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import { Carousel } from "react-responsive-carousel";
import DemoCarousel from "./Components/Carousel";
import Specialist from "./Components/Specialist";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<><LandPage/></>}/>
        <Route path='/Home' element={<>
        <Navbar/>
        <Intro/>
        <Specialist/>
        <DemoCarousel/>
          <Footer/>
        </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

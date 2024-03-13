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
import DemoCarousel from "./Components/Carousel";
import Specialist from "./Components/Specialist";
import Location from "./Components/Location";
import AllServices from "./Components/AllServices";
import NavbarPhone from "./Components/NavbarPhone";
import ChunkedMap from "./Components/ChunkedMap"
import Contact from "./Components/Contact";


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route path='/BS' element={<><LandPage/></>}/>
        <Route path='/Home' element={<>
            <Navbar/>
            <NavbarPhone/>
            <Intro/>
            <Specialist/>
            <DemoCarousel/>
            <Location/>
            <Footer/>
        </>}/>
        <Route path='/Gallery' element={<>
          <Navbar/>
            <NavbarPhone/>
            <ChunkedMap/>
            <Footer/>
        </>}/>
        <Route path='/Contact' element={<>
          <Navbar/>
            <NavbarPhone/>
            <Contact/>
            </>}/>
        <Route path='/Appointment' element={<>
            <Navbar/>
            <NavbarPhone/>
            <AllServices show = "true"/>
            <Footer/>
        </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

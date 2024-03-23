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
import Review from "./Components/Review";
import ScrollToTop from "./Components/ScrollToTop";
import data from "./Data/images.json"
import Display from "./Components/Display";

function App() {
  return (
    <Router>
      <ScrollToTop/>
    <div className="App">
        <Routes>
        <Route path='/BS' element={<><LandPage/></>}/>
        <Route path='/BS/Home' element={<>
            <Navbar/>
            <NavbarPhone/>
            <Intro/>
            <Specialist/>
            <DemoCarousel/>
            <Location/>
            <Review/>
            <Footer/>
        </>}/>
        <Route path='/BS/Gallery' element={<>
          <Navbar/>
            <NavbarPhone/>
            {/* <ChunkedMap sex={data.female} title ={"Female"}/> */}
            <Display/>
            <Footer/>
        </>}/>
        <Route path='/BS/Contact' element={<>
          <Navbar/>
            <NavbarPhone/>
            <Contact/>
            <Location/>
            <Footer/>
            </>}/>
        <Route path='/BS/Appointment' element={<>
            <Navbar/>
            <NavbarPhone/>
            <AllServices show = "true"/>
            <Footer/>
        </>}/>
        <Route path='/BS/Male' element={<>
            <Navbar/>
            <NavbarPhone/>
            <ChunkedMap sex ={ data.male } title = {"Male"}/>
            <Footer/>
        </>}/> <Route path='/BS/Female' element={<>
            <Navbar/>
            <NavbarPhone/>
            <ChunkedMap sex ={ data.female } title = {"Female"}/>
            <Footer/>
        </>}/>
         <Route path='/BS/Salon' element={<>
            <Navbar/>
            <NavbarPhone/>
            <ChunkedMap sex ={ data.female } title = {"Female"}/>
            <Footer/>
        </>}/>
        <Route path='/BS/Video' element={<>
            <Navbar/>
            <NavbarPhone/>
            <ChunkedMap sex ={ data.female } title = {"Female"}/>
            <Footer/>
        </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

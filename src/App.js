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
import FrecventQuestions from "./Components/Questions";
import { QuestionData } from "./Data/QuestionsData";
import AllServices from "./Components/AllServices";
import NavbarPhone from "./Components/NavbarPhone";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<><LandPage/></>}/>
        <Route path='/Home' element={<>
        <Navbar/>
        <NavbarPhone/>
        <Intro/>
        <Specialist/>
        <DemoCarousel/>
        <Location/>
          <Footer/>
        </>}/>
        <Route path='/Appointment' element={<>
        <Navbar/>
        <AllServices show = "true"/>
        <Footer/>
        </>}/>
        <Route path='/Gallery' element={<><NavbarPhone/></>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;

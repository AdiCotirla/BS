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
        <Location/>
          <Footer/>
        </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

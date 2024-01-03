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

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<><LandPage/></>}/>
        <Route path='/Home' element={<>
        <Navbar/>
        <Intro/>
          <Footer/>
        </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

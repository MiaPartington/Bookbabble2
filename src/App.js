import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blog';
import Marketplace from './Marketplace';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Sales from './Sales';
import Romance from './Romance';
import Education from './Education';
import Action from './Action';
// import Theroad from './Theroad';
import Jaws from './Jaws';





function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Marketplace" element={<Marketplace />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/Sales' element={<Sales />}/>
            <Route path='/Action' element={<Action />}/>
            <Route path='/Romance' element={<Romance />}/>
            <Route path='/Education' element={<Education />}/>
            {/* <Route path='/Theroad' element={<Theroad />}/> */}
            <Route path='/Jaws' element={<Jaws />}/>
          </Routes>
        <div className='btm'>
        <Footer />
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;

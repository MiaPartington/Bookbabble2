import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blog';
import Marketplace from './Marketplace';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Sales from './Sales';
import Romance from './Romance';
import Education from './Education';
import Action from './Action';
// import Theroad from './Theroad';
import Jaws from './Jaws';
import Book1984 from './Book1984';
import Road from './Road';





function App() {
  return (
    <Router basename="/Bookbabble">
    <div className="App">
      <Navbar />
      <div className='content'>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Marketplace" element={<Marketplace />} />
            <Route path='/Sales' element={<Sales />}/>
            <Route path='/Action' element={<Action />}/>
            <Route path='/Romance' element={<Romance />}/>
            <Route path='/Education' element={<Education />}/>
            <Route path='/Jaws' element={<Jaws />}/>
            <Route path='/Book1984' element={<Book1984 />}/>
            <Route path='/Road' element={<Road />}/>
            
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

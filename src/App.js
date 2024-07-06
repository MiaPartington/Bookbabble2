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
            <Route path="/Bookbabble/" element={<Home />} />
            <Route path="/Bookbabble/About" element={<About />} />
            <Route path="/Bookbabble/Blog" element={<Blog />} />
            <Route path="/Bookbabble/Marketplace" element={<Marketplace />} />
            <Route path='/Bookbabble/Sales' element={<Sales />}/>
            <Route path='/Bookbabble/Action' element={<Action />}/>
            <Route path='/Bookbabble/Romance' element={<Romance />}/>
            <Route path='/Bookbabble/Education' element={<Education />}/>
            <Route path='/Bookbabble/Jaws' element={<Jaws />}/>
            <Route path='/Bookbabble/Book1984' element={<Book1984 />}/>
            <Route path='/Bookbabble/Road' element={<Road />}/>
            
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

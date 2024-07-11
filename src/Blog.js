import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import jaws from './components/jaws.jpg';
import the1984 from './components/the1984.jpg';
import theRoad from './components/theRoad.jpg';

const Blog = () => {
  return (
<div class="blog-container">
  <h1>Books of the Week</h1>
  <div class="blog-post">
    <div class="blog-image">
      <img src={theRoad} alt="The Road by Cormac McCarthy"/>
    </div>
    <div class="blog-content">
      <h2><Link to="/Road">The Road by Cormac McCarthy</Link></h2>
      <p>Blog post</p>
      <p>Discover one of this week's books and discuss it with friends in a meeting!</p>
      <div class="blog-meta">
        {/* <span>21 likes</span> */}
        <span>4 <i class="bi bi-chat"></i></span>
      </div>
    </div>
  </div>
  <div class="blog-post">
    <div class="blog-image">
      <img src={the1984} alt="1984 by George Orwell"/>
    </div>
    <div class="blog-content">
      <h2><Link to="/Book1984">1984 by George Orwell</Link></h2>
      <p>Blog post</p>
      <p>Discover one of this week's books and discuss it with friends in a meeting!</p>
      <div class="blog-meta">
        {/* <span>56 likes</span> */}
        <span>5 <i class="bi bi-chat"></i></span>
      </div>
    </div>
  </div>
  <div class="blog-post">
    <div class="blog-image">
      <img src={jaws} alt="Jaws by Peter Benchley"/>
    </div>
    <div class="blog-content">
      <h2><Link to="/Jaws">Jaws by Peter Benchley</Link></h2>
      <p>Blog post</p>
      <p>Discover one of this week's books and discuss it with friends in a meeting!</p>
      <div class="blog-meta">
        {/* <span>56 likes</span> */}
        <span>2 <i class="bi bi-chat"></i></span>
      </div>
    </div>
  </div>
</div>


  );
};

export default Blog;
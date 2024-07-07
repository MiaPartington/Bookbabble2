import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
<div class="blog-container">
  <h1>Books of the week</h1>
  <div class="blog-post">
    <div class="blog-image">
      <img src="./pics/theRoad.jpg" alt="The Road by Cormac McCarthy"/>
    </div>
    <div class="blog-content">
      <h2><Link to="/Road">The Road by Cormac McCarthy</Link></h2>
      <p>Discussion group</p>
      <p>Post description about the book and its discussion.</p>
      <div class="blog-meta">
        <span>21 likes</span>
        <span>4 comments</span>
      </div>
    </div>
  </div>
  <div class="blog-post">
    <div class="blog-image">
      <img src="./pics/1984.jpg" alt="1984 by George Orwell"/>
    </div>
    <div class="blog-content">
      <h2><Link to="/Book1984">1984 by George Orwell</Link></h2>
      <p>Discussion group</p>
      <p>Discussion about the book's themes and characters.</p>
      <div class="blog-meta">
        <span>56 likes</span>
        <span>5 comments</span>
      </div>
    </div>
  </div>
  <div class="blog-post">
    <div class="blog-image">
      <img src="./pics/jaws.jpg" alt="Jaws by Peter Benchley"/>
    </div>
    <div class="blog-content">
      <h2><Link to="/Jaws">Jaws by Peter Benchley</Link></h2>
      <p>Discussion group</p>
      <p>Discussion about the book's themes and characters.</p>
      <div class="blog-meta">
        <span>56 likes</span>
        <span>2 comments</span>
      </div>
    </div>
  </div>
</div>


  );
};

export default Blog;
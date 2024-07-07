import React from 'react';
import './About.css';

const About = () => {
  return (
    <section class="content-about container my-5">
    <div class="row">
      <div class="col-md-8">
        <h1 class="display-4 font-weight-bold">About</h1>
        {/* <h4 class="font-weight-light text-muted">Our history</h4> */}
        <p>Welcome to Bookbabble, your online destination for weekly featured books that spark engaging discussions. Every week, we showcase a selection of thought-provoking books in our blog section, where readers can delve into in-depth critiques and share their perspectives. Not only can you stay updated with the latest literary trends, but you can also rent books directly from our site. For those who love discussing their favorite reads, we offer the option to book virtual meetings, allowing you to connect with fellow book enthusiasts and engage in enriching conversations. Join our community and experience the joy of reading and sharing at Bookbabble.
</p>
      </div>
      <div class="img col-md-4">
        <img src="./pics/library.jpg" alt="Library"/>
      </div>
    </div>
  </section>
  );
};

export default About;
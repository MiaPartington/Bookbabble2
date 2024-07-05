import React, { useState } from 'react';
import './Jaws.css';



const Jaws = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };
  
    return (
      <div className="container-jaws">
        <div className="post">
          <h2>First Blog Post</h2>
          <p className="post-meta">Posted on <time dateTime="2024-07-01">July 1, 2024</time> by Author Name</p>
          <img src="/pics/Jaws.jpg" alt="Book cover" className="post-image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
  
        <div className="critiques">
          <h3>Critiques</h3>
          <div className="critique">
            <p className="critiquer-info">Arslan Ashraf - Co-Founder @ Data BI | Growth Marketing Expert</p>
            <p>Yes, start new</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">Traven Page - Brand Communications Strategist</p>
            <p>How did you know last week was so rough? Your social listening tool is too good...</p>
          </div>
        </div>
  
        <div className="zoom-meeting">
          <h3>Join a Zoom Meeting to Discuss This Book</h3>
          <p>We host weekly Zoom meetings to discuss various books. Join us to share your thoughts and hear from others.</p>
          <button className="btn-zoom" onClick={openModal}>Book Meeting</button>
        </div>
  
        {isModalVisible && (
          <div className="modal show">
            <div className="modal-content-jaws">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Book a Zoom Meeting</h2>
              <form>
                <label htmlFor="meetingName">Meeting Name:</label>
                <input type="text" id="meetingName" name="meetingName" required />
  
                <label htmlFor="meetingDate">Date:</label>
                <input type="date" id="meetingDate" name="meetingDate" required />
  
                <label htmlFor="meetingTime">Time:</label>
                <input type="time" id="meetingTime" name="meetingTime" required />
  
                <label htmlFor="participants">Participants:</label>
                <input type="text" id="participants" name="participants" required />
  
                <button type="submit" className="btn-zoom">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Jaws;




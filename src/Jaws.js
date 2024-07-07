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
          <h2>Jaws book review</h2>
          <p className="post-meta">Posted on <time dateTime="2024-07-01">July 1, 2024</time> by Jane Doe and Avery Smith</p>
          <img src="./pics/jaws.jpg" alt="Book cover" className="post-image" />
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p> */}
        </div>
  
        <div className="critiques">
          <h3>Critiques</h3>
          <div className="critique">
            <p className="critiquer-info">Jane Doe</p>
            <p>"Jaws" by Peter Benchley is a gripping thriller that effectively builds suspense and terror through its depiction of a man-eating great white shark terrorizing a small beach town. Benchley's detailed descriptions of the shark's attacks and the resulting fear among the townspeople create a palpable sense of dread. The characters, especially Police Chief Brody, are well-developed and relatable, adding depth to the story beyond the shark attacks. The novel explores themes of fear, community, and the human instinct for survival. While some parts may feel dated, the core narrative remains compelling. Overall, "Jaws" is a classic that still holds the power to thrill and scare readers.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">Avery Smith</p>
            <p>While "Jaws" by Peter Benchley is often hailed as a classic thriller, it has its shortcomings. The pacing of the novel can be uneven, with certain sections dragging on, which diminishes the overall tension. Benchley's character development, particularly for the secondary characters, feels superficial at times, leaving readers wanting more depth and motivation. The portrayal of the shark as a nearly supernatural menace can sometimes strain credulity, detracting from the realism the story attempts to establish. Additionally, some of the social and gender dynamics reflect the novel's 1970s origins and may feel outdated to modern readers. Despite these flaws, the book's core premise and the escalating threat of the shark manage to maintain interest. However, "Jaws" is not without its narrative and thematic limitations, making it a mixed experience for discerning readers.






</p>
          </div>
        </div>
  
        <div className="zoom-meeting">
          <h3>Join a Zoom Meeting to Discuss This Book</h3>
          <p>We host weekly Zoom meetings to discuss various books.</p>
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




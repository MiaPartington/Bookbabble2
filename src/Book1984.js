import React, { useState } from 'react';
import './Book1984.css';



const Book1984 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };
  
    return (
      <div className="container-Book1984">
        <div className="post">
          <h2>1984 book review</h2>
          <p className="post-meta">Posted on <time dateTime="2024-07-01">July 1, 2024</time> by Arslan Ashraf, The Daily Post, The Weeknd, New York Times, and Katy Perry </p>
          <img src="./pics/1984.jpg" alt="Book cover" className="post-image" />
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p> */}
        </div>
  
        <div className="critiques">
          <h3>Critiques</h3>
          <div className="critique">
            <p className="critiquer-info">Arslan Ashraf</p>
            <p>George Orwell's "1984" is a haunting portrayal of a dystopian future where totalitarianism reigns supreme. The novel's depiction of constant surveillance, thought control, and the erasure of truth is chillingly prescient. Orwell's prose is stark and powerful, creating a world that is both bleak and compelling. The protagonist, Winston Smith, embodies the struggle for individuality and freedom in an oppressive regime, making his journey deeply moving. However, some readers might find the novel's pessimism overwhelming and the pacing slow. Despite this, "1984" remains a vital and thought-provoking read that continues to resonate in contemporary discussions about privacy and government power.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">The Daily Post</p>
            <p>"1984" by George Orwell is an enduring masterpiece that explores themes of totalitarianism, freedom, and the manipulation of truth. The novel's concept of Big Brother and the omnipresent surveillance state is both terrifying and thought-provoking. Orwell's ability to envision a world where language is weaponized to control thought is particularly striking. Yet, some critics argue that the book's bleakness and lack of hope make it a difficult read. The characters can also come across as one-dimensional, serving more as symbols than fully fleshed-out individuals. Nevertheless, "1984" is an essential read for its powerful critique of authoritarianism and its influence on modern political discourse.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">The Weeknd</p>
            <p>George Orwell's "1984" is often lauded for its profound insights into the dangers of totalitarianism and the erosion of individual freedoms. The novel's depiction of a society where every aspect of life is controlled and monitored by the state is both compelling and unsettling. Orwell's use of Newspeak to illustrate the manipulation of language and thought is ingenious. However, the novel's relentless darkness and the despair that permeates Winston's life can be discouraging for some readers. Additionally, the narrative's focus on the political ideology sometimes overshadows character development. Despite these criticisms, "1984" remains a seminal work that continues to challenge and engage readers.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">New York Times</p>
            <p>"1984" is a groundbreaking novel that delves into the mechanics of totalitarian control and the suppression of dissent. Orwell's portrayal of a world where history is rewritten and truth is subjective is both frightening and intellectually stimulating. The book's exploration of themes like propaganda, censorship, and individual autonomy is highly relevant today. However, some readers might find Orwell's prose dry and the story's tone unrelentingly grim. The lack of a hopeful resolution can also be a point of contention, leaving readers with a sense of despair. Despite this, "1984" is a crucial read for its enduring relevance and its incisive commentary on power and control.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">Katy Perry</p>
            <p>George Orwell's "1984" is a seminal work in the dystopian genre, renowned for its incisive critique of totalitarian regimes. The novel's depiction of a society under constant surveillance, where individuality is crushed, is both powerful and disturbing. Orwell's creation of concepts like Newspeak and doublethink adds depth to his exploration of control and manipulation. However, the novel's focus on the ideological aspects can sometimes make it feel more like a political treatise than a narrative-driven story. The characters, including Winston and Julia, can seem secondary to the overarching themes. Despite these flaws, "1984" is a landmark work that continues to provoke thought and debate.






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

export default Book1984;




import React, { useState } from 'react';
// import './Book1984.css';



const Road = () => {
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
          <h2>The Road book review</h2>
          <p className="post-meta">Posted on <time dateTime="2024-07-01">July 1, 2024</time> by Liam Bennett, Traven Page, Noah Parker, and Sophie Green</p>
          <img src="/pics/theRoad.jpg" alt="Book cover" className="post-image" />
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p> */}
        </div>
  
        <div className="critiques">
          <h3>Critiques</h3>
          <div className="critique">
            <p className="critiquer-info">Liam Bennett</p>
            <p>Cormac McCarthy's "The Road" is a harrowing tale of a father and son's journey through a post-apocalyptic world. The sparse, poetic prose and bleak setting create an atmosphere of desolation and despair. McCarthy's ability to depict the bond between the father and son amidst the harshness of their environment is deeply moving. The novel's exploration of themes like survival, hope, and the human spirit is both compelling and thought-provoking. However, some readers might find the relentless grimness and lack of punctuation challenging. Despite its somber tone, "The Road" is a powerful narrative that captures the essence of love and perseverance in the face of annihilation.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">Traven Page</p>
            <p>"The Road" by Cormac McCarthy is a stark and unflinching look at a world devastated by an unspecified catastrophe. The narrative's minimalist style, with its lack of quotation marks and fragmented sentences, mirrors the stripped-down existence of its characters. McCarthy's portrayal of the father's protective love and the son's innocence provides a poignant counterpoint to the surrounding horror. Some critics argue that the novel's bleakness and occasional brutality can be overwhelming. Additionally, the lack of backstory or explanation for the apocalypse might leave some readers unsatisfied. Nevertheless, "The Road" is a haunting and unforgettable exploration of the depths of human endurance and the enduring power of love.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">Noah Parker</p>
            <p>Cormac McCarthy's "The Road" is celebrated for its stark beauty and emotional depth. The novel's depiction of a father and son traversing a barren, post-apocalyptic landscape is both heart-wrenching and uplifting. McCarthy's sparse, lyrical prose enhances the story's emotional impact, making the reader feel the weight of every step taken by the protagonists. While the novel's unrelenting darkness and minimal dialogue might deter some readers, others will appreciate its raw honesty and profound meditation on the nature of hope and humanity. "The Road" is a testament to McCarthy's skill as a writer and his ability to evoke powerful emotions through his storytelling.</p>
          </div>
          <div className="critique">
            <p className="critiquer-info">Sophie Green</p>
            <p>"The Road" offers a bleak vision of a world undone by disaster, with Cormac McCarthy's characteristic prose style—sparse, haunting, and poetic—adding to the novel's somber tone. The relationship between the father and son serves as the emotional core of the story, highlighting themes of love, sacrifice, and survival. Critics praise McCarthy's ability to convey profound emotion with minimalistic language. However, the novel's grim atmosphere and lack of conventional plot elements might not appeal to everyone. The repetitive nature of their journey can also feel monotonous at times. Despite these aspects, "The Road" remains a powerful and affecting work that captures the resilience of the human spirit.</p>
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

export default Road;




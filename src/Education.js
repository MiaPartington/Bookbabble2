// import React from 'react';
import React, { useState} from 'react';
import './Education.css';


const Education = () => {
  const [modalData, setModalData] = useState({ name: '', image: '', description: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modalSection, setModalSection] = useState('details');

  const showModal = (name, image, description) => {
    setModalData({ name, image, description });
    setIsModalVisible(true);
    setProgress(33); 
    setModalSection('details'); 
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setProgress(0);
  };

  const handleBorrowClick = () => {
    setModalSection('borrow');
    setProgress(66); 
  };

  // const handleUserInfoClick = () => {
  //   setModalSection('userInfo');
  //   setProgress(100); 
  // };

  const handleSubmitClick = () => {
    setModalSection('thankYou');
    setProgress(100); 
  };

  const currentPath = window.location.pathname;


  return (
    <div className="container" id="content-all">
      <div className="marketplace-header">
        <h1>Education</h1>
      </div>
      <div className="marketplace-content">
      <div className="sidebar-overlay">
              <div className="sidebar">
                <div className="facet-group">
                  <h3>Filter</h3>
                  <div className="facet">
                    <input
                      type="radio"
                      id="new"
                      onChange={() => (window.location.href = '/Bookbabble/Sales')}
                      checked={currentPath === '/Bookbabble/Sales'}
                    />
                    <label htmlFor="new">New</label>
                  </div>
                  <div className="facet">
                    <input
                      type="radio"
                      id="romance"
                      onChange={() => (window.location.href = '/Bookbabble/Romance')}
                      checked={currentPath === '/Bookbabble/Romance'}
                    />
                    <label htmlFor="romance">Romance</label>
                  </div>
                  <div className="facet">
                    <input
                      type="radio"
                      id="action"
                      onChange={() => (window.location.href = '/Bookbabble/Action')}
                      checked={currentPath === '/Bookbabble/Action'}
                    />
                    <label htmlFor="action">Action</label>
                  </div>
                  <div className="facet">
                    <input
                      type="radio"
                      id="education"
                      onChange={() => (window.location.href = '/Bookbabble/Education')}
                      checked={currentPath === '/Bookbabble/Education'}
                    />
                    <label htmlFor="education">Education</label>
                  </div>
                  <div className="facet">
                    <input
                      type="radio"
                      id="new"
                      onChange={() => (window.location.href = '/Bookbabble/Marketplace')}
                      checked={currentPath === '/Bookbabble/Marketplace'}
                    />
                    <label htmlFor="new">Marketplace</label>
                  </div>
                </div>
              </div>
            </div>

        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src="./pics/calc.jpg" className="img-fluid" alt="book"/>
          </div>
          <div className="col-md-8 order-md-2">
            <h2>Calculus Early Vectors</h2>
            <p>"Calculus and Early Vectors" is a foundational textbook that introduces the principles of calculus alongside vector analysis. It covers topics such as limits, derivatives, integrals, and the fundamental theorems of calculus, while also integrating vector concepts like vector operations, dot products, and cross products. The book emphasizes the application of calculus in solving real-world problems involving vectors, making it essential for students in mathematics, physics, and engineering. Through a combination of theoretical explanations, worked examples, and exercises, "Calculus and Early Vectors" aims to build a solid understanding of both calculus and vector analysis from the ground up.</p>
            <button className="btn btn-dark" onClick={() => showModal('Calculus Early Vectors', './pics/calc.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
            <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                </span>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-2">
            <img src="./pics/edu.jpg" className="img-fluid" alt="book"/>
          </div>
          <div className="col-md-8 order-md-1">
            <h2>Education Psychology</h2>
            <p>"Educational Psychology" is a field of study that explores how people learn and the best practices for teaching. It examines the cognitive, emotional, and social processes involved in learning throughout the lifespan. Topics include motivation, development, classroom management, assessment, and instructional strategies. By understanding these principles, educators can create more effective learning environments that cater to the diverse needs of students. The field integrates theories from psychology to address practical issues in education, aiming to improve educational outcomes and foster a supportive atmosphere for both teachers and students.</p>
            <button className="btn btn-dark" onClick={() => showModal('Education Psychology', './pics/edu.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
            <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                </span>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src="./pics/oxf.jpg" className="img-fluid" alt="book"/>
          </div>
          <div className="col-md-8 order-md-2">
            <h2>Oxford Dictionary</h2>
            <p>"The Oxford Dictionary" is a comprehensive and authoritative reference work that provides definitions, pronunciations, and detailed information on the usage of the English language. Renowned for its scholarly rigor and extensive coverage, it includes thousands of words, phrases, and meanings, ranging from everyday vocabulary to specialized terms across various fields. The dictionary also offers historical insights through etymologies, tracing the origins and evolution of words. Frequently updated to reflect contemporary language changes, "The Oxford Dictionary" is an essential resource for students, writers, academics, and anyone seeking a deep understanding of English.</p>
            <button className="btn btn-dark" onClick={() => showModal('Oxford Dictionary', './pics/oxf.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
            <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                </span>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-progress">
                <div className="modal-progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="modal-header">
                <h5 className="modal-title">{modalData.name}</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {modalSection === 'details' && (
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <img src={modalData.image} className="img-fluid" alt="Product" />
                      </div>
                      <div className="col-md-6">
                        <h2>{modalData.name}</h2>
                        <p>{modalData.description}</p>
                        <button className="btn btn-dark" onClick={handleBorrowClick}>Continue</button>
                        {/* <p>Text box for additional details or fine print</p> */}
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3>Related Books</h3>
                      <div className="row" id="relatedBooks">
                        <img src="./pics/vcalc.jpg" className="img-fluid" alt="Book 2" />
                        <img src="./pics/calc2.jpg" className="img-fluid" alt="Book 1" />
                        <img src="./pics/besch.jpg" className="img-fluid" alt="Book 3" />
                      </div>
                    </div>
                  </div>
                )}
                {modalSection === 'borrow' && (
                  <div>
                    <h2>Card and Shipping Information</h2>
                    <form>
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="shippingAddress">Shipping Address</label>
                        <input type="text" className="form-control" id="shippingAddress" placeholder="Enter shipping address" />
                      </div>
                      <div>
                          <label htmlFor='emailAddress'>Email Address</label>
                          <input type='text' className='form-control' id='emailAddress' placeholder='Enter email address'/>
                        </div>
                      <button type="button" className="btn btn-dark move-down" onClick={handleSubmitClick}>Submit</button>
                    </form>
                  </div>
                )}
                {modalSection === 'thankYou' && (
                  <div>
                    <h2>Thank You</h2>
                    <p>Your request has been submitted successfully!</p>
                    <button onClick={closeModal} className="btn btn-dark">Close</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
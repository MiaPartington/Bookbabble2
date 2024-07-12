import React, { useState } from 'react';

const Romance = () => {
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
          <h1>Romance</h1>
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
              <img src="./pics/DBD.jpg" className="img-fluid" alt="book"/>
            </div>
            <div className="col-md-8 order-md-2">
              <h2>Don't Back Down</h2>
              <p>"Don't Back Down" by Sharon Sala is a romantic suspense novel that follows the story of Sam O'Brien, a former Marine, and his quest to protect his small-town community from a dangerous criminal element. Alongside his childhood friend and love interest, Layla Parker, Sam faces threats and challenges that test their resilience and rekindle their deep connection. The novel weaves themes of loyalty, courage, and the power of love, offering readers a gripping tale of action, romance, and small-town camaraderie.






</p>
              <button className="btn btn-dark" onClick={() => showModal('Dont Back Down', './pics/DBD.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
              <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                  </span>
            </div>
          </div>
          <div className="row book-item">
            <div className="col-md-4 order-md-2">
              <img src="./pics/Bmoon.jpg" className="img-fluid" alt="book"/>
            </div>
            <div className="col-md-8 order-md-1">
              <h2>Blue Moon</h2>
              <p>"Blue Moon" by Lee Child is a thrilling novel featuring Jack Reacher, the iconic drifter and ex-military policeman. In this installment, Reacher steps in to help an elderly couple targeted by ruthless loan sharks. As he delves deeper, he uncovers a violent turf war between rival Ukrainian and Albanian gangs. Reacher's unwavering sense of justice leads him into a dangerous confrontation, showcasing his tactical brilliance and relentless determination. Packed with action, suspense, and Reacher's trademark resourcefulness, "Blue Moon" is a gripping addition to the Jack Reacher series.






</p>
              <button className="btn btn-dark" onClick={() => showModal('Blue Moon', './pics/Bmoon.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
              <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                  </span>
            </div>
          </div>
          <div className="row book-item">
            <div className="col-md-4 order-md-1">
              <img src="./pics/nightwork.jpg" className="img-fluid" alt="book"/>
            </div>
            <div className="col-md-8 order-md-2">
              <h2>Nightwork</h2>
              <p>Nightwork" by Nora Roberts is a captivating romantic suspense novel that follows the life of Harry Booth, a master thief with a troubled past. After a childhood spent honing his skills to survive, Harry becomes an elusive and highly skilled criminal. His life takes a turn when he meets Miranda Emerson, a smart and beautiful woman who makes him yearn for a different future. As Harry tries to leave his old life behind, he finds himself drawn into one last dangerous heist, risking everything for a chance at love and redemption. Filled with intrigue, romance, and Roberts' signature storytelling, "Nightwork" is an engaging tale of second chances and the power of love.






</p>
              <button className="btn btn-dark" onClick={() => showModal('NightWork', './pics/nightwork.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
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
                        <img src="./pics/rom1.jpg" className="img-fluid" alt="Book 2" />
                        <img src="./pics/rom2.jpg" className="img-fluid" alt="Book 1" />
                        <img src="./pics/3.jpg" className="img-fluid" alt="Book 3" />
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
 
export default Romance;
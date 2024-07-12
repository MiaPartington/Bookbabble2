import React, { useState} from 'react';
import './Sales.css';
import hofas from './components/hofas.jpg';
import dreamLand from './components/dreamLand.jpg';
import mercuryRising from './components/mercuryRising.jpg';

const Sales = () => {

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

  const currentPath = window.location.pathname;

  // const handleUserInfoClick = () => {
  //   setModalSection('userInfo');
  //   setProgress(100); 
  // };

  const handleSubmitClick = () => {
    setModalSection('thankYou');
    setProgress(100); 
  };
    return ( 
        <div class="container" id="content-all">
        <div class="marketplace-header">
            <h1>New</h1>
        </div>
        <div class="marketplace-content">
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
            <img src={dreamLand} className="img-fluid" alt="book"/>
          </div>
          <div className="col-md-8 order-md-2">
            <h2>Dreamland</h2>
            <p>"Dreamland" by Nicholas Sparks is a touching and evocative romance novel that intertwines the lives of two couples. Colby Mills, a farmer with dreams of a music career, meets Morgan Lee, an aspiring singer with big city aspirations, while performing in a bar in Florida. Their whirlwind romance blossoms against the backdrop of their personal dreams and struggles. Simultaneously, the story follows Beverly, a young woman fleeing from an abusive marriage with her six-year-old son. As Colby and Morgan's relationship deepens, their lives become unexpectedly connected to Beverly's journey, leading to a poignant and dramatic conclusion. "Dreamland" explores themes of love, dreams, and the courage to face life's challenges.</p>
            <button className="btn btn-dark" onClick={() => showModal('Dreamland', dreamLand, 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
            <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                </span>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-2">
            <img src={hofas} className="img-fluid" alt="book"/>
          </div>
          <div className="col-md-8 order-md-1">
            <h2>House of Flame and Shadow</h2>
            <p>"House of Flame and Shadow" by Sarah J. Maas is the third book in the Crescent City series. It follows Bryce Quinlan and Hunt Athalar as they navigate the intricate and dangerous political landscape of their world. The story delves deeper into their quest for answers about their pasts and the growing threats to their city. With allies and enemies both old and new, Bryce and Hunt must confront ancient powers and hidden secrets that could change their lives and the fate of Crescent City forever. This installment combines action, romance, and rich world-building, continuing the epic saga with high stakes and emotional depth.</p>
            <button className="btn btn-dark" onClick={() => showModal('House of Flame and Shadow', hofas, 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
            <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                </span>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src={mercuryRising} className="img-fluid" alt="book"/>
          </div>
          <div className="col-md-8 order-md-2">
            <h2>Mercury Rising</h2>
            <p>"Mercury Rising" by R.W.W. Greene is a science fiction novel set in an alternate 1970s where a failed Apollo mission results in Earth being threatened by an alien invasion. This geopolitical crisis forces humanity to unite and develop a space defense system. The protagonist, Brooklyn Lamontagne, is a down-and-out con artist who finds himself unexpectedly recruited into this interstellar conflict. As he navigates this new reality, Brooklyn grapples with his past, confronts the possibility of redemption, and plays a crucial role in the fight against the extraterrestrial threat. The novel blends retro-futurism, action, and humor, creating a compelling story of survival and second chances.</p>
            <button className="btn btn-dark" onClick={() => showModal('Mercury Rising', mercuryRising, 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
            <span className="info-bubble-container ms-2">
                  <i className="bi bi-question-circle"></i>
                  <span className="info-bubble">After your two weeks are up, we will email you with instructions to send the book back.</span>
                </span>
          </div>
        </div>
        </div>
    
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="productModalLabel">Product name</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <div class="row">
                      <div class="col-md-6">
                          <img src="" id="modalProductImage" class="img-fluid" alt="Product "/>
                      </div>
                      <div class="col-md-6">
                          <h2 id="modalProductName">Product name</h2>
                          <p id="modalProductDescription">Description</p>
                          <button class="btn btn-dark">Buy now</button>
                          {/* <p>Text box for additional details or fine print</p> */}
                      </div>
                  </div>
                  {/* <hr> */}
                  <div class="mt-5">
                      <h3>Related Books</h3>
                      <div class="row" id="relatedBooks">
                      </div>
                  </div>
              </div>
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
                        <img src="./pics/Bmoon.jpg" className="img-fluid" alt="Book 2" />
                        <img src="./pics/DBD.jpg" className="img-fluid" alt="Book 1" />
                        <img src="./pics/nightwork.jpg" className="img-fluid" alt="Book 3" />
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
}
 
export default Sales;
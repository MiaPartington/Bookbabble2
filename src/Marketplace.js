
// import React from 'react';
import React, { useState} from 'react';
import './Marketplace.css';
// import $ from 'jquery';
import jaws from './components/jaws.jpg';
import the1984 from './components/the1984.jpg';
import theRoad from './components/theRoad.jpg';

const Marketplace = () => {
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

  const handleSubmitClick = () => {
    setModalSection('thankYou');
    setProgress(100);
  };

  const currentPath = window.location.pathname;


  return (
      <div className="container" id="content-all">
        <div className="marketplace-header">
          <h1>Marketplace</h1>
        </div>
        <div className="row">
         
            <div className="sidebar-overlay">
              <div className="sidebar">
                <div className="facet-group">
                  <h3>Filter</h3>
                  <div className="facet">
                    <input
                      type="checkbox"
                      id="new"
                      onChange={() => (window.location.href = '/Bookbabble/Sales')}
                      checked={currentPath === '/Bookbabble/Sales'}
                    />
                    <label htmlFor="new">New</label>
                  </div>
                  <div className="facet">
                    <input
                      type="checkbox"
                      id="romance"
                      onChange={() => (window.location.href = '/Bookbabble/Romance')}
                      checked={currentPath === '/Bookbabble/Romance'}
                    />
                    <label htmlFor="romance">Romance</label>
                  </div>
                  <div className="facet">
                    <input
                      type="checkbox"
                      id="action"
                      onChange={() => (window.location.href = '/Bookbabble/Action')}
                      checked={currentPath === '/Bookbabble/Action'}
                    />
                    <label htmlFor="action">Action</label>
                  </div>
                  <div className="facet">
                    <input
                      type="checkbox"
                      id="education"
                      onChange={() => (window.location.href = '/Bookbabble/Education')}
                      checked={currentPath === '/Bookbabble/Education'}
                    />
                    <label htmlFor="education">Education</label>
                  </div>
                  <div className="facet">
                    <input
                      type="checkbox"
                      id="new"
                      onChange={() => (window.location.href = '/Bookbabble/Marketplace')}
                      checked={currentPath === '/Bookbabble/Marketplace'}
                    />
                    <label htmlFor="new">Marketplace</label>
                  </div>
                </div>
              </div>
            </div>

          <div className="col-md-12">
            <div className="marketplace-content">
              <div className="row book-item">
                <div className="col-md-4 order-md-1">
                  <img src={theRoad} className="img-fluid" alt="book" />
                </div>
                <div className="col-md-8 order-md-2">
                  <h2>The Road</h2>
                  <p>"The Road," a novel by Cormac McCarthy published in 2006, follows a father and son journeying through a post-apocalyptic landscape, facing severe hardships and dangers as they seek safety and survival.
  
  About the Author:
  Cormac McCarthy (1933-2023) was an American author renowned for his distinctive writing style and exploration of themes like survival and morality, with notable works including "The Road" and "No Country for Old Men."</p>
                  <button className="btn btn-dark" onClick={() => showModal('The Road', theRoad, 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
                </div>
              </div>
              <div className="row book-item">
                <div className="col-md-8 order-md-1">
                  <h2>1984</h2>
                  <p>"1984," a dystopian novel by George Orwell published in 1949, depicts a totalitarian society under the rule of Big Brother. The protagonist, Winston Smith, struggles with oppression and surveillance, ultimately seeking rebellion and truth.
  
  About the Author:
  George Orwell (1903-1950) was a British writer and journalist known for his critical works on social injustice and totalitarianism, including "1984" and "Animal Farm."</p>
                  <button className="btn btn-dark" onClick={() => showModal('1984', the1984, 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
                </div>
                <div className="col-md-4 order-md-2">
                  <img src={the1984} className="img-fluid" alt="book" />
                </div>
              </div>
              <div className="row book-item">
                <div className="col-md-4 order-md-1">
                  <img src={jaws} className="img-fluid" alt="book" />
                </div>
                <div className="col-md-8 order-md-2">
                  <h2>Jaws</h2>
                  <p>"Jaws," a 1974 novel by Peter Benchley, follows a great white shark that terrorizes the fictional Amity Island, prompting Police Chief Brody, marine biologist Hooper, and shark hunter Quint to team up and hunt it down.
  
  About the Author:
  Peter Benchley (1940-2006) was an American author best known for writing "Jaws," which was later adapted into a highly successful film by Steven Spielberg."</p>
                  <button className="btn btn-dark" onClick={() => showModal('Jaws', jaws, 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
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
                        <button type="button" className="btn btn-dark" onClick={handleSubmitClick}>Submit</button>
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
  
  export default Marketplace;
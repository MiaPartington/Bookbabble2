import React, { useState, useEffect } from 'react';
import './Sales.css';

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

  const handleUserInfoClick = () => {
    setModalSection('userInfo');
    setProgress(100); 
  };

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
        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src="/pics/dreamLand.jpg" className="img-fluid" alt="Book 1" />
          </div>
          <div className="col-md-8 order-md-2">
            <h2>The Road</h2>
            <p>A subheading for this section, as long or as short as you like</p>
            <button className="btn btn-dark" onClick={() => showModal('Dreamland', '/pics/dreamLand.jpg', 'A subheading for this section, as long or as short as you like')}>Borrow</button>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-2">
            <img src="/pics/hofas.jpg" className="img-fluid" alt="Book 2" />
          </div>
          <div className="col-md-8 order-md-1">
            <h2>House of flame and shadow</h2>
            <p>Another subheading—maybe it’s related to the image on the left, or the button below</p>
            <button className="btn btn-dark" onClick={() => showModal('House of ', '/pics/hofas.jpg', 'Another subheading—maybe it’s related to the image on the left, or the button below')}>Borrow</button>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src="/pics/mercuryRising.jpg" className="img-fluid" alt="Book 3" />
          </div>
          <div className="col-md-8 order-md-2">
            <h2>Mercury Rising</h2>
            <p>Another subheading—maybe it’s related to the image on the left, or the button below</p>
            <button className="btn btn-dark" onClick={() => showModal('Jaws', '/pics/mercuryRising.jpg', 'Another subheading—maybe it’s related to the image on the left, or the button below')}>Borrow</button>
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
                          <img src="" id="modalProductImage" class="img-fluid" alt="Product Image"/>
                      </div>
                      <div class="col-md-6">
                          <h2 id="modalProductName">Product name</h2>
                          <p id="modalProductDescription">Description</p>
                          <button class="btn btn-dark">Buy now</button>
                          <p>Text box for additional details or fine print</p>
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
                        <img src={modalData.image} className="img-fluid" alt="Product Image" />
                      </div>
                      <div className="col-md-6">
                        <h2>{modalData.name}</h2>
                        <p>{modalData.description}</p>
                        <button className="btn btn-dark" onClick={handleBorrowClick}>Borrow</button>
                        <p>Text box for additional details or fine print</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3>Related Books</h3>
                      <div className="row" id="relatedBooks">
                        <img src="/pics/Bmoon.jpg" className="img-fluid" alt="Book 2" />
                        <img src="/pics/DBD.jpg" className="img-fluid" alt="Book 1" />
                        <img src="/pics/nightwork.jpg" className="img-fluid" alt="Book 3" />
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
}
 
export default Sales;
import React, { useState } from 'react';

const Education = () => {
    const [modalData, setModalData] = useState({ name: '', image: '', description: '' });
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = (name, image, description) => {
      setModalData({ name, image, description });
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };
  
    return (
      <div className="container" id="content-all">
        <div className="marketplace-header">
          <h1>Marketplace</h1>
        </div>
        <div className="marketplace-content">
          <div className="row book-item">
            <div className="col-md-4 order-md-1">
              <img src="/pics/DBD.jpg" className="img-fluid" alt="Book 1" />
            </div>
            <div className="col-md-8 order-md-2">
              <h2>Livre 1</h2>
              <p>A subheading for this section, as long or as short as you like</p>
              <button className="btn btn-dark" onClick={() => showModal('Livre 1', '/pics/DBD.jpg', 'A subheading for this section, as long or as short as you like')}>Borrow</button>
            </div>
          </div>
          <div className="row book-item">
            <div className="col-md-4 order-md-2">
              <img src="/pics/Bmoon.jpg" className="img-fluid" alt="Book 2" />
            </div>
            <div className="col-md-8 order-md-1">
              <h2>Livre 2</h2>
              <p>Another subheading—maybe it’s related to the image on the left, or the button below</p>
              <button className="btn btn-dark" onClick={() => showModal('Livre 2', '/pics/Bmoon.jpg', 'Another subheading—maybe it’s related to the image on the left, or the button below')}>Borrow</button>
            </div>
          </div>
          <div className="row book-item">
            <div className="col-md-4 order-md-1">
              <img src="/pics/nightwork.jpg" className="img-fluid" alt="Book 3" />
            </div>
            <div className="col-md-8 order-md-2">
              <h2>Livre 3</h2>
              <p>Another subheading—maybe it’s related to the image on the left, or the button below</p>
              <button className="btn btn-dark" onClick={() => showModal('Livre 3', '/pics/nightwork.jpg', 'Another subheading—maybe it’s related to the image on the left, or the button below')}>Borrow</button>
            </div>
          </div>
          <div className="row book-item">
            <div className="col-md-4 order-md-2">
              <img src="/pics/brown.jpg" className="img-fluid" alt="Book 4" />
            </div>
            <div className="col-md-8 order-md-1">
              <h2>Livre 4</h2>
              <p>Another subheading—maybe it’s related to the image on the left, or the button below</p>
              <button className="btn btn-dark" onClick={() => showModal('Livre 4', '/pics/brown.jpg', 'Another subheading—maybe it’s related to the image on the left, or the button below')}>Borrow</button>
            </div>
          </div>
        </div>
  
        {isModalVisible && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalData.name}</h5>
                  <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={modalData.image} className="img-fluid" alt="Product Image" />
                    </div>
                    <div className="col-md-6">
                      <h2>{modalData.name}</h2>
                      <p>{modalData.description}</p>
                      <button className="btn btn-dark">Borrow</button>
                      <p>Text box for additional details or fine print</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3>Related Books</h3>
                    <div className="row" id="relatedBooks">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
 
export default Education;
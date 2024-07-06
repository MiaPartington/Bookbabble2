import React, { useState} from 'react';
import './Action.css';

const Action = () => {
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

  return (
    <div className="container" id="content-all">
      <div className="marketplace-header">
        <h1>Action</h1>
      </div>
      <div className="marketplace-content">
        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src="/pics/hgames.jpg" className="img-fluid" alt="Book 1" />
          </div>
          <div className="col-md-8 order-md-2">
            <h2>The Hunger Games</h2>
            <p>"The Hunger Games" by Suzanne Collins is a dystopian novel set in a future where the totalitarian nation of Panem is divided into twelve districts. Each year, the government selects a boy and girl from each district to participate in a televised death match called the Hunger Games. The story follows sixteen-year-old Katniss Everdeen, who volunteers to take her sister's place in the Games. Katniss must rely on her survival skills, instincts, and reluctant alliances as she navigates the brutal competition. The novel explores themes of sacrifice, oppression, and the effects of violence, presenting a gripping and thought-provoking narrative that captivates readers from start to finish.</p>
            <button className="btn btn-dark" onClick={() => showModal('The Hunger Games', '/pics/hgames.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-2">
            <img src="/pics/soc.jpg" className="img-fluid" alt="Book 2" />
          </div>
          <div className="col-md-8 order-md-1">
            <h2>Six of Crows</h2>
            <p>"Six of Crows" by Leigh Bardugo is a gripping fantasy novel set in the Grishaverse. The story follows Kaz Brekker, a criminal mastermind in the bustling city of Ketterdam, who is tasked with assembling a team of misfits and outcasts for an impossible heist. The team includes Inej, a spy known as the Wraith; Jesper, a sharpshooter with a gambling problem; Nina, a Grisha with magical abilities; Matthias, a disgraced soldier seeking redemption; and Wylan, a runaway with a talent for demolition. Together, they must break into the impenetrable Ice Court and retrieve a valuable hostage. With complex characters, intricate plotting, and high-stakes action, "Six of Crows" is a thrilling adventure filled with twists and turns.</p>
            <button className="btn btn-dark" onClick={() => showModal('Six of Crows', '/pics/soc.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
          </div>
        </div>
        <div className="row book-item">
          <div className="col-md-4 order-md-1">
            <img src="/pics/tog.jpg" className="img-fluid" alt="Book 3" />
          </div>
          <div className="col-md-8 order-md-2">
            <h2>Throne of Glass</h2>
            <p>"Throne of Glass" by Sarah J. Maas is a captivating fantasy novel that follows the journey of Celaena Sardothien, a skilled assassin who is offered a chance at freedom. After being imprisoned in the salt mines of Endovier, Celaena is summoned to the castle by Crown Prince Dorian. He offers her a deal: compete in a deadly competition to become the king's champion and win her freedom. As Celaena navigates the treacherous world of court politics, she uncovers dark secrets and faces formidable opponents. With the help of her new allies, including the loyal Captain of the Guard, Chaol, and the enigmatic prince, she must confront her past and fight for her future. "Throne of Glass" combines action, romance, and magic in a richly imagined world, making it a thrilling start to an epic series.</p>
            <button className="btn btn-dark" onClick={() => showModal('Throne of Glass', '/pics/tog.jpg', 'For 6.99 borrow this book for 2 weeks.')}>Borrow</button>
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
                        <img src="/pics/kos.jpg" className="img-fluid" alt="Book 2" />
                        <img src="/pics/tod.jpg" className="img-fluid" alt="Book 1" />
                        <img src="/pics/cc.jpg" className="img-fluid" alt="Book 3" />
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

export default Action;
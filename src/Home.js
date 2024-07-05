import './Home.css';

const Home = () => {
    return ( 
        <>
         <header className="header-custom">
    <img src={'/pics/books.jpg'} alt="Background" className="background-image" />
    <div className="overlay">
      <div className="container">
        <h1 className="display-4">BookBabble</h1>
        <p className="lead">Connect with fellow book lovers</p>
        <a href="/About" className="btn btn-light">Learn More</a>
      </div>
    </div>
  </header>

  <section className="container my-5">
    <h2 className="mb-4">Featured</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card book-item">
          <img src="/pics/theRoad.jpg" className="card-img-top" alt="The Road by Cormac McCarthy" />
          <div className="card-body">
            <h5 className="card-title">The Road by Cormac McCarthy</h5>
            <p className="card-text">$10.99</p>
            <div className="book-description">A post-apocalyptic novel that tells the story of a father and son's journey through a desolate America.</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card book-item">
          <img src="/pics/1984.jpg" className="card-img-top" alt="1984 by George Orwell" />
          <div className="card-body">
            <h5 className="card-title">1984 by George Orwell</h5>
            <p className="card-text">$11.99</p>
            <div className="book-description">A dystopian novel that delves into the dangers of totalitarianism and extreme political ideology.</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card book-item">
          <img src="/pics/jaws.jpg" className="card-img-top" alt="Jaws by Peter Benchley" />
          <div className="card-body">
            <h5 className="card-title">Jaws by Peter Benchley</h5>
            <p className="card-text">$13.99</p>
            <div className="book-description">A thrilling novel about a great white shark that terrorizes a small resort town.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container my-5">
    <h2 className="mb-4">New Releases</h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card book-item">
          <img src="/pics/dreamLand.jpg" className="card-img-top" alt="Dreamland by Nicholas Sparks" />
          <div className="card-body">
            <h5 className="card-title">Dreamland by Nicholas Sparks</h5>
            <p className="card-text">$15.99</p>
            <div className="book-description">A captivating love story that explores the power of dreams and the resilience of the human spirit.</div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card book-item">
          <img src="/pics/hofas.jpg" className="card-img-top" alt="House of Flame and Shadow by Sarah J. Maas" />
          <div className="card-body">
            <h5 className="card-title">House of Flame and Shadow by Sarah J. Maas</h5>
            <p className="card-text">$22.00</p>
            <div className="book-description">An epic fantasy novel filled with magic, intrigue, and a gripping storyline.</div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card book-item">
          <img src="/pics/mercuryRising.jpg" className="card-img-top" alt="Mercury Rising by R.A. Barnes" />
          <div className="card-body">
            <h5 className="card-title">Mercury Rising by R.A. Barnes</h5>
            <p className="card-text">$9.99</p>
            <div className="book-description">A gripping science fiction novel that explores the potential consequences of space exploration.</div>
          </div>
        </div>
      </div>
    </div>
      </section>
        </>
        

      

     );
}
 
export default Home;
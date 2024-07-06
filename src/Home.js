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
            <div className="book-description">"The Road," a novel by Cormac McCarthy published in 2006, follows a father and son journeying through a post-apocalyptic landscape, facing severe hardships and dangers as they seek safety and survival.

About the Author:
Cormac McCarthy (1933-2023) was an American author renowned for his distinctive writing style and exploration of themes like survival and morality, with notable works including "The Road" and "No Country for Old Men."</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card book-item">
          <img src="/pics/1984.jpg" className="card-img-top" alt="1984 by George Orwell" />
          <div className="card-body">
            <h5 className="card-title">1984 by George Orwell</h5>
            <p className="card-text">$11.99</p>
            <div className="book-description">"1984," a dystopian novel by George Orwell published in 1949, depicts a totalitarian society under the rule of Big Brother. The protagonist, Winston Smith, struggles with oppression and surveillance, ultimately seeking rebellion and truth.

About the Author:
George Orwell (1903-1950) was a British writer and journalist known for his critical works on social injustice and totalitarianism, including "1984" and "Animal Farm."</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card book-item">
          <img src="/pics/jaws.jpg" className="card-img-top" alt="Jaws by Peter Benchley" />
          <div className="card-body">
            <h5 className="card-title">Jaws by Peter Benchley</h5>
            <p className="card-text">$13.99</p>
            <div className="book-description">"Jaws," a 1974 novel by Peter Benchley, follows a great white shark that terrorizes the fictional Amity Island, prompting Police Chief Brody, marine biologist Hooper, and shark hunter Quint to team up and hunt it down.

About the Author:
Peter Benchley (1940-2006) was an American author best known for writing "Jaws," which was later adapted into a highly successful film by Steven Spielberg.






</div>
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
            <div className="book-description">"Dreamland," a novel by Nicholas Sparks, intertwines the lives of Colby, a farmer with musical dreams, and Morgan, an aspiring singer, as they navigate love and life's challenges.

About the Author:
Nicholas Sparks (born 1965) is an American author known for his romantic novels, many of which have been adapted into successful films, including "The Notebook" and "A Walk to Remember."</div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card book-item">
          <img src="/pics/hofas.jpg" className="card-img-top" alt="House of Flame and Shadow by Sarah J. Maas" />
          <div className="card-body">
            <h5 className="card-title">House of Flame and Shadow by Sarah J. Maas</h5>
            <p className="card-text">$22.00</p>
            <div className="book-description">"House of Flame and Shadow" by Sarah J. Maas is the third installment in the Crescent City series, following Bryce Quinlan and Hunt Athalar as they navigate political intrigue and ancient powers in a world of magic and danger.

About the Author:
Sarah J. Maas (born 1986) is an American author renowned for her bestselling fantasy series, including "Throne of Glass," "A Court of Thorns and Roses," and "Crescent City."






</div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card book-item">
          <img src="/pics/mercuryRising.jpg" className="card-img-top" alt="Mercury Rising by R.A. Barnes" />
          <div className="card-body">
            <h5 className="card-title">Mercury Rising by R.W.W Greene</h5>
            <p className="card-text">$9.99</p>
            <div className="book-description">"Mercury Rising" by R.W.W. Greene is a science fiction novel set in an alternate 1970s where a failed space mission leads to Earth's alliance with alien forces to defend against a looming interstellar threat.

About the Author:
R.W.W. Greene is an American science fiction author known for his imaginative storytelling and exploration of alternate histories and futuristic themes.</div>
          </div>
        </div>
      </div>
    </div>
      </section>
        </>
        

      

     );
}
 
export default Home;
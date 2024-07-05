import './Footer.css';

const Footer = () => {
    return (  
        <footer className="footer">
        <div className="container text-center">
          <p>&copy; 2024 BookBabble</p>
          <div className="social-icons">
            <a href="#" className="text-dark"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-dark"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
          </div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/marketplace">Browse Books</a>
            <a href="/Sales">Sales & Offers</a>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;
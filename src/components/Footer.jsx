import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="foot-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Academics</Link></li>
            <li><Link to="/">Admissions</Link></li>
            <li><Link to="/">Placememts</Link></li>
            <li><Link to="/">News</Link></li>
            <li><Link to="/">Alumni</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Academics</h3>
          <ul>
            <li><Link to="/">GCE A/L</Link></li>
            <li><Link to="/">GCE O/L</Link></li>
            <li><Link to="/">Grade 5 Scholarship</Link></li>
            <li><Link to="/">13 Plus Education</Link></li>
            <li><Link to="/">Primary Education</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Social Media</h3>
          <ul>
            <li><Link to="/"><i className="fa-brands fa-instagram"></i> Instagram</Link></li>
            <li><Link to="/"><i className="fa-brands fa-youtube"></i> Youtube</Link></li>
            <li><Link to="/"><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
            <li><Link to="/"><i className="fa-brands fa-twitter"></i> Twitter</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Initiatives</h3>
          <ul>
            <li><Link to="/">IT Society </Link></li>
            <li><Link to="/">Annual Prize Giving – 2024</Link></li>
            <li><Link to="/">Rugby Tournament</Link></li>
            <li><Link to="/">Annual Sports Meet – 2025</Link></li>
            
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
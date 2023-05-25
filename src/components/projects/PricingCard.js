import "./PricingCardStyles.css";
import { Link } from "react-router-dom";
import "../../index.css"
const PricingCard = () => {
  return <div className="pricing">
    <div className = "card-containers">
    <div className="card-container">
      <h3>- Basic -</h3>
      <span className="bar"></span>
      <p className="btc">$ 10</p>
      <p>- 4 days -</p>
      <p>- 3 pages -</p>
      <p>- Featured -</p>
      <p>- Responsive design -</p>
      <Link to="/contact" className="btn">purchase now</Link>
    </div>


    <div className="card-container">
      <h3>- Premium -</h3>
      <span className="bar"></span>
      <p className="btc">$ 20</p>
      <p>- 3 days -</p>
      <p>- 5 pages -</p>
      <p>- Featured -</p>
      <p>- Responsive design -</p>
      <Link to="/contact" className="btn">purchase now</Link>
    </div>


    <div className="card-container">
      <h3>- Business -</h3>
      <span className="bar"></span>
      <p className="btc">$ 29</p>
      <p>- 6 days -</p>
      <p>- 8 pages -</p>
      <p>- Featured -</p>
      <p>- Responsive design -</p>
      <Link to="/contact" className="btn">purchase now</Link>
    </div>

    </div>
  </div>;
};

export default PricingCard;

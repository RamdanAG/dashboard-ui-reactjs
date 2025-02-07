import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Kartu</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
            <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            <div className="lg-value">
                <h3 className="lg-value-text">0.00000000</h3>
                <h6 className="card-pin-hidden">1234 5678 9101 </h6>
                <div className="info-card-id">
                    <div>
                        <p className="text text-silver-v1 expiry-text">Kedaluarsa</p>
                        <p className="text text-sm text-white">13/28</p>
                    </div>
                    <div>
                        <p className="text text-silver-v1 expiry-text">Pemegang</p>
                        <p className="text text-sm text-white">ELLEN JOE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards

import { iconsImgs } from "../../utils/images";
import { subscriptions } from "../../data/data";
import './Subs.css'
export default function Subs(){
    return(
        <div className="subgrid-two-item grid-common grid-c5">
            <div className="grid-c-title">
                <h3 className="grid-title-text">Langganan</h3>
                <button className="grid c-title-icon">
                    <img src={iconsImgs} alt="" />
                </button>
            </div>
            <div className="grid-c5-content">
                <div className="grid-items">
                    {
                        subscriptions.map((subscriptions) => (
                            <div className="grid-item" key={subscriptions.id}>
                                <div className="grid-item-1">
                                    <div className="icon">
                                        <img src={iconsImgs.alert} alt="" srcset="" />
                                    </div>
                                    <div className="text text-silver-v1">{subscriptions.title} </div>
                                </div>
                                <div className="grid-item-r">
                                    <span className="text-silver-v1">
                                        <span className="text-silver-v1">Rp. {subscriptions.amount}</span>
                                        <div>
                                        <span>Jutuh Tempo {subscriptions.due_date}</span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
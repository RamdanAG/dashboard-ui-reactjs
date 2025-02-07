import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Budget from "../Budget/Budget";
import Subscriptions from "../Subs/Subs";
import Savings from "../Savings/Savings";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Transactions />
        <Cards />
      </div>
      <div className="content-grid-two">
        <div className="grid-two-item subgrid-two">
          <Subscriptions />
          <Savings />
        </div>
        <Budget />
      </div>
    </div>
  );
};

export default ContentMain;

import "../CSS/Client.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import DashBoard from "./DashBoard"
import TransactionList from "./TransactionList"
import AddTransaction from "./AddTransaction"

function Client() {
  return (
    <div className="Client">
      <div className="leftSide">
        <img src="path_to_your_profile_image.png" alt="Profile" />
        <span className="UserName">Vikas Talreja</span>
        <span className="Role">Client</span>
        <div className="buttons">
          <button className="button">
            <FontAwesomeIcon className="logos" icon={faUser} />
            Organizers
          </button>
          <button className="button">
            <FontAwesomeIcon className="logos" icon={faCalendarDays} />
            Calender
          </button>
          <button className="button">
            <FontAwesomeIcon className="logos" icon={faShop} />
            Marketplace
          </button>
        </div>
        <div className="Logout">
          <button className="button">Logout</button>
        </div>
      </div>
      <div className="RightSide">
        <div className="ExpenseTracker">
          <DashBoard />
          <TransactionList />
          <AddTransaction />
        </div>
        <div className="Todo"></div>
        <div className="Ticker">
          <div className="events">Past Events</div>
          <div className="past-event">
            <div className="past"><span className="numberev">Event 1</span> <button className="feedback">Feedback</button></div>
            <div className="past"><span className="numberev">Event 1</span> <button className="feedback">Feedback</button></div>
            <div className="past"><span className="numberev">Event 1</span> <button className="feedback">Feedback</button></div>
            <div className="past"><span className="numberev">Event 1</span> <button className="feedback">Feedback</button></div>
            <div className="past"><span className="numberev">Event 1</span> <button className="feedback">Feedback</button></div>
            <div className="past"><span className="numberev">Event 1</span> <button className="feedback">Feedback</button></div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Client;

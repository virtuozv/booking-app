import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tablen from "../../components/table/Tablen";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="data:image/png;base64,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"
                alt="avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Pablito Raneda</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"> janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> +1 2313 12 12</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue"> Russia Kostroma 36 New</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Country:</span>
                  <span className="itemValue"> RUSSIA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tablen />
        </div>
      </div>
    </div>
  );
};

export default Single;

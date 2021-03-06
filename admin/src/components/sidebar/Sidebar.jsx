import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AndroidIcon from "@mui/icons-material/Android";
import ArticleIcon from "@mui/icons-material/Article";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AttractionsIcon from "@mui/icons-material/Attractions";
import BalconyIcon from "@mui/icons-material/Balcony";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/">Dashboard</Link>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AllInboxIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <AndroidIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <ArticleIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AllInclusiveIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <AutoFixOffIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <AutoAwesomeIcon className="icon" />
            <span>System Health</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <AutoStoriesIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <AttractionsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <BalconyIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <BrunchDiningIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <AllInboxIcon className="icon" />
            <span>Products</span>
          </li>
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
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;

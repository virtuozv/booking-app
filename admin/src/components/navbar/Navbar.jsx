import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ExplicitOutlinedIcon from "@mui/icons-material/ExplicitOutlined";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <ClosedCaptionOffOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <SignLanguageOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ExplicitOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <AccountBalanceOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://html5css.ru/edithtm/img_avatar2.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

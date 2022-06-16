import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ExplicitOutlinedIcon from "@mui/icons-material/ExplicitOutlined";
import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
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
            <ModeNightOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
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

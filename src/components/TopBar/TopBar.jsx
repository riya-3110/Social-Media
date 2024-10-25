import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./TopBar.css";
import { NavLink, useNavigate } from "react-router-dom";

export const TopBar = ({ profilePic }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <div className="topBar-container">
      <div className="topBar-left">
        <span className="logo" onClick={() => navigate("/home")}>
          SOCIAL MEDIA
        </span>
      </div>
      <div className="topBar-center">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBar-right">
        <div className="topBarLinks">
          <NavLink
            className={({ isActive }) =>
              isActive ? "topBarLinkActive" : "topBarLink"
            }
            to="/home"
          >
            Homepage
          </NavLink>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img
          src={profilePic || "/assets/person/4.jpg"}
          alt="profile-img"
          className="topBarImg"
          onClick={handleClick}
          title="Go to Profile"
        />
      </div>
    </div>
  );
};

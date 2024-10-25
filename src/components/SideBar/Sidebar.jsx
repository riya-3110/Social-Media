import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Users } from "../../DummyData";
import { CloseFrd } from "../CloseFrd/CloseFrd";
import { NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sidebarListItemTextActive" : "sidebarListItemText"
              }
              to="/feed"
            >
              <RssFeed className="sidebarIcon" />
              Feed
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sidebarListItemTextActive" : "sidebarListItemText"
              }
              to="/chat"
            >
              <Chat className="sidebarIcon" />
              Chats
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Videos</NavLink>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Groups</NavLink>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Bookmarks</NavLink>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Questions</NavLink>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Jobs</NavLink>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Events</NavLink>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <NavLink className="sidebarListItemText">Courses</NavLink>
          </li>
        </ul>
        <button className="sidebarButton" onClick={() => navigate("/")}>
          Log Out
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFrd key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

import "./CloseFrd.css";

export const CloseFrd = ({ user }) => {
  return (
    <>
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={user.profilePicture}
          alt="profile-pic"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
};

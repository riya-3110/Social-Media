import "./OnlineFrds.css";

export const OnlineFrds = ({ user }) => {
  return (
    <>
      <li className="rightBarFriend">
        <div className="rightBarImgContainer">
          <img
            className="rightBarProfileImg"
            src={user.profilePicture}
            alt="friend-img"
          />
          <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUsername">{user.username}</span>
      </li>
    </>
  );
};

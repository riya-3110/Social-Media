import React, { useState } from "react";
import { TopBar } from "../../components/TopBar/TopBar";
import { Sidebar } from "../../components/SideBar/Sidebar";
import { RightBar } from "../../components/RightBar/RightBar";
import { Feed } from "../../components/Feed/Feed";
import "./Profile.css";
import { Edit } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Box, Button, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState("assets/person/4.jpg");
  const [username, setUsername] = useState("Riya Macwan");
  const [bio, setBio] = useState("Hello guys :)");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = () => {
    console.log(
      `profile pic path :: ${profilePic} , username :: ${username} , bio :: ${bio}`
    );
    setOpen(false);
  };

  return (
    <>
      <TopBar profilePic={profilePic} />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/5.jpg"
                alt="cover-img"
              />
              <img
                className="profileUserImg"
                src={profilePic}
                alt="profile-pic"
              />
              <Edit className="editIcon" onClick={handleOpen} />
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <h2 id="child-modal-title">Update Details</h2>
                  <Button
                    component="label"
                    role="button"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ mb: 2, mt: 2 }}
                  >
                    Upload Profile Pic
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleProfilePicChange}
                      multiple
                      sx={{ mb: 2 }}
                    />
                  </Button>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    required
                    fullWidth
                    id="bio"
                    label="Bio"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      color="primary"
                    >
                      Done
                    </Button>
                    <Button
                      onClick={() => setOpen(false)}
                      variant="outlined"
                      color="primary"
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
              <span className="profileInfoDesc">{bio}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed profilePic={profilePic} />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

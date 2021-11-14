import * as React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import ThumbUpOffAltIcon from "./icons/thumbsupicon";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  outline: 0
};

const ImagePopUp = ({ open, handleClose }) => {
  return (
    <Modal
      className="outline-0"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <IconButton
          className="hover:text-white"
          sx={{
            position: "absolute",
            top: "0%",
            right: "0%",
            bgcolor: "white",
            zIndex: 5
          }}
          onClick={handleClose}
          size="small"
        >
          <CloseIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="breakfast"
        />
        <CardHeader
          className="dark:!bg-grayish !bg-white"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <div className="flex items-center justify-center py-2 text-gray-500 dark:text-white">
              <ThumbUpOffAltIcon className="cursor-pointer" />
              <label className="text-sm mx-2">12k</label>
            </div>
          }
          title={
            <label className="text-gray-500 dark:text-white font-bold">
              Shrimp and Chorizo Paella
            </label>
          }
          subheader={
            <label className="text-gray-400 dark:text-white font-medium italic">
              September 14, 2016
            </label>
          }
        />
        <CardContent className="dark:!bg-grayish !bg-white">
          <Chip
            className="text-gray-400 dark:text-white"
            label="#tags"
            variant="outlined"
          />
          <Chip
            className="text-gray-400 dark:text-white"
            label="#tags"
            variant="outlined"
          />
          <Chip
            className="text-gray-400 dark:text-white"
            label="#tags"
            variant="outlined"
          />
          <Chip
            className="text-gray-400 dark:text-white"
            label="#tags"
            variant="outlined"
          />
          <Chip
            className="text-gray-400 dark:text-white"
            label="#tags"
            variant="outlined"
          />
          <Chip
            className="text-gray-400 dark:text-white"
            label="#tags"
            variant="outlined"
          />
        </CardContent>
      </Card>
    </Modal>
  );
};

export default ImagePopUp;

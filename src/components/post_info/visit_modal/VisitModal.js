import * as React from "react";
import { BsCalendarPlus } from "react-icons/bs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Calendar from "../../calendar/Calendar";
import Modal from "@mui/material/Modal";
import "./VisitModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function VisitModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="visitModal">
      <div className="visitModal__datePreview" onClick={handleOpen}>
        <p className="visitModal__datePreview--date">May 2, 2022</p>
        <BsCalendarPlus className="visitModal__datePreview--icon" />
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p id="modal-title">
            Select days to visit the house depending on your availability
          </p>

          <Calendar />
        </Box>
      </Modal>
    </div>
  );
}

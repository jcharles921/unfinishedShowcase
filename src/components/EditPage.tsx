import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { SoonImage } from "public/svg";
const EditPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Modal toggle */}
      <div className="flex justify-center m-5">
        <button
          id="updateProductButton"
          className="block text-white bg-primary active:scale-95 hover:bg-[#ccb613] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          type="button"
          onClick={handleClickOpen}
        >
          Modifier
        </button>
      </div>

      {/* Main modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifier la page</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "400px",
          }}
        >
          <img src={SoonImage.src} />
          <h3 className="uppercase text-2xl text-secondary">
            Arrive bientôt !!
          </h3>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermez
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditPage;

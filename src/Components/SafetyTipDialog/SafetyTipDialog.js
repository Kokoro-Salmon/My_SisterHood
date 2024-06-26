import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SafetyTipShared from "../SafetyTipShared/SafetyTipShared";

const OpenDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const OpenDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <div className="incidentdialogbox">
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    </div>
  );
};

OpenDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function IncidentDialog({ openfilter, setOpenFilter }) {
  const handleClose = () => {
    setOpenFilter(false);
  };
  return (
    <div>
      <OpenDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openfilter}
      >
        <OpenDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Filters Safety Tips
        </OpenDialogTitle>
        <DialogContent dividers>
          <SafetyTipShared />
        </DialogContent>
      </OpenDialog>
    </div>
  );
}

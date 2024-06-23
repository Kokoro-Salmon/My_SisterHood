import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const IncidentDescription = ({ formData, setFormData }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-error"
          label="Title"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
          variant="filled"
          fullWidth={true}
          inputProps={{
            maxLength: 42,
          }}
        ></TextField>
        <div className="incidenttitleanddesc">{formData.title.length}/42</div>
      </div>
      <div>
        <TextField
          id="filled-multiline-static"
          label="Enter Your Description Here"
          multiline
          value={formData.message}
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
          rows={4}
          variant="filled"
          inputProps={{
            maxLength: 420,
            minLength: 10,
          }}
        />
      </div>
      <div className="incidenttitleanddesc">{formData.message.length}/420</div>
    </Box>
  );
};

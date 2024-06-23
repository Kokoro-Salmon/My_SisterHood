import React from "react";
import TextField from "@mui/material/TextField";

export const Age = ({ formData, setFormData }) => {
  return (
    <div className="age">
      <TextField
        id="standard-basic"
        fullWidth
        label="Age"
        variant="standard"
        min={18}
        value={formData.age}
        onChange={(event) =>
          setFormData({ ...formData, age: event.target.value })
        }
      />
    </div>
  );
};

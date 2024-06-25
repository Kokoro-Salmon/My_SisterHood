import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Gender = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, gender: event.target.value });
  };
  return (
    <div className="gender-container">
      <ToggleButtonGroup
        orientation="vertical"
        value={formData.gender}
        exclusive
        onChange={handleChange}
        fullWidth={true}
        sx={{ gap: 2 }}
        color="info"
      >
        <ToggleButton
          value="Male"
          aria-label="list"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          Male
        </ToggleButton>
        <ToggleButton
          value="Female"
          aria-label="module"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          Female
        </ToggleButton>
        <ToggleButton
          value="Other"
          aria-label="quilt"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          Other
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

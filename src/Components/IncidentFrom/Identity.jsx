import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Identity = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, identity: event.target.value });
  };
  return (
    <div className="identity-container">
      <ToggleButtonGroup
        orientation="vertical"
        value={formData.identity}
        exclusive
        onChange={handleChange}
        fullWidth={true}
        sx={{ gap: 2 }}
        color="info"
      >
        <ToggleButton
          value="Myself"
          aria-label="list"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          Myself
        </ToggleButton>
        <ToggleButton
          value="Someone Else"
          aria-label="module"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          Someone Else
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

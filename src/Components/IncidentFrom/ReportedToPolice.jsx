import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ReportedToPolice = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, reportToPolice: event.target.value });
  };

  return (
    <div>
      <ToggleButtonGroup
        orientation="vertical"
        value={formData.reportToPolice}
        exclusive
        onChange={handleChange}
        fullWidth={true}
        sx={{ gap: 2 }}
        color="info"
      >
        <ToggleButton
          value="Yes I did"
          aria-label="list"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          Yes I did
        </ToggleButton>
        <ToggleButton
          value="I will, in the future"
          aria-label="module"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          I will, in the future
        </ToggleButton>
        <ToggleButton
          value="I am not sure if I want to"
          aria-label="quilt"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          I am not sure if I want to
        </ToggleButton>
        <ToggleButton
          value="No"
          aria-label="no"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          No
        </ToggleButton>
        <ToggleButton
          value="I tried"
          aria-label="it"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
          }}
        >
          I tried
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const TypeOfViolence = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    setFormData({ ...formData, typeOfViolence: event.target.value });
  };
  return (
    <div>
      <ToggleButtonGroup
        orientation="vertical"
        value={formData.typeOfViolence}
        exclusive
        onChange={handleChange}
        fullWidth={true}
        sx={{ gap: 1 }}
        className=""
        color="info"
      >
        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          onChange={handleChange}
          value={formData.typeOfViolence}
          fullWidth={true}
          sx={{ gap: 2 }}
        >
          <ToggleButton
            value="Rape/Sexual Assault"
            aria-label="Rape/Sexual Assault"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Rape/Sexual Assault
          </ToggleButton>
          <ToggleButton
            value="Chain Snatching/Robbery"
            aria-label="Chain Snatching/Robbery"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Chain Snatching/Robbery
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          onChange={handleChange}
          value={formData.typeOfViolence}
          fullWidth={true}
          sx={{ gap: 2 }}
        >
          <ToggleButton
            value="Domestic Violence"
            aria-label="Domestic Violence"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Domestic Violence
          </ToggleButton>
          <ToggleButton
            value="Physical Assault"
            aria-label="Physical Assault"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Physical Assault
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          onChange={handleChange}
          value={formData.typeOfViolence}
          fullWidth={true}
          sx={{ gap: 2 }}
        >
          <ToggleButton
            value="Stalking"
            aria-label="Stalking"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Stalking
          </ToggleButton>
          <ToggleButton
            value="Online Harrasment"
            aria-label="Online Harrasment"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Online Harrasment
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          onChange={handleChange}
          value={formData.typeOfViolence}
          fullWidth={true}
          sx={{ gap: 2 }}
        >
          <ToggleButton
            value="Ogling/Facial Expressions/Staring"
            aria-label="Ogling/Facial Expressions/Staring"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Ogling/Facial Expressions/Staring
          </ToggleButton>
          <ToggleButton
            value="Taking photos without permission"
            aria-label="Taking photos without permission"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Taking photos without permission
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          onChange={handleChange}
          value={formData.typeOfViolence}
          fullWidth={true}
          sx={{ gap: 2 }}
        >
          <ToggleButton
            value="Indecent Exposure/Masturbation in public"
            aria-label="Indecent Exposure/Masturbation in public"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Indecent Exposure/Masturbation in public
          </ToggleButton>
          <ToggleButton
            value="Touching /Groping"
            aria-label="Touching /Groping"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Touching /Groping
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          onChange={handleChange}
          value={formData.typeOfViolence}
          fullWidth={true}
          sx={{ gap: 2 }}
        >
          <ToggleButton
            value="Showing Pornography without consent"
            aria-label="Showing Pornography without consent"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Showing Pornography without consent
          </ToggleButton>
          <ToggleButton
            value="Commenting/Sexual Invites"
            aria-label="Commenting/Sexual Invites"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
          >
            Commenting/Sexual Invites
          </ToggleButton>
        </ToggleButtonGroup>
      </ToggleButtonGroup>
    </div>
  );
};

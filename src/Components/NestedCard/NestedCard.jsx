import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./NestedCard.css";
export const NestedCard = (props) => {
  return (
    <div>
      <Accordion style={{ margin: "3% 0", color: "#d94234" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize="1.3rem">{props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion style={{ margin: "1% 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontSize="1.3rem" color="rgb(110, 94, 254)">
                Sections
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {props.sections.map((point, i) => {
                return (
                  <Typography fontSize="1.1rem">
                    {i + 1}. {point}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: "1% 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontSize="1.3rem" color="rgb(110, 94, 254)">
                Punishments
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {props.punishment.map((point, i) => {
                return (
                  <Typography fontSize="1.1rem">
                    {i + 1}. {point}
                  </Typography>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

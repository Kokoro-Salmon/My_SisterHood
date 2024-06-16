import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FIRCard = (props) => {
  return (
    <div>
      <Accordion style={{ margin: "3% 0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize="1.3rem">{props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {!props.isTrue && (
            <Typography fontSize="1.1rem">{props.answer}</Typography>
          )}
          {props.isTrue && (
            <Typography fontSize="1.1rem">
              {props.points.map((point, i) => {
                return (
                  <Typography fontSize="1.1rem">
                    {i + 1}. {point}
                  </Typography>
                );
              })}
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

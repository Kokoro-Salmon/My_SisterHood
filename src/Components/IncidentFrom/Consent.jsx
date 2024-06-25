import React from "react";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Consent = ({ consent, setConsent }) => {
  return (
    <div className="consentcontainer">
      <div className="conditions">
        <p>
          We understand it is difficult to recall one's traumatic experiences.
          If you feel uncomfortable at any time, know that you can exit. If you
          have not hit the submit button, your data will not be saved.
        </p>
        <p>
          Even though you are sharing your experience anonymously, we need your
          consent to include your experience in our database of crowdsourced
          data.
        </p>
      </div>

      <div className="consentBox">
        <Checkbox
          {...label}
          onClick={() => {
            setConsent(!consent);
            // console.log(setConsent);
          }}
        />
        <span>I consent</span>
      </div>
    </div>
  );
};

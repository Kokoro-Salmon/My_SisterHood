import React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const Time = ({ formData, setFormData }) => {
  const handleChange = (newValue) => {
    setFormData({ ...formData, time: newValue });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Date&Time picker"
          value={dayjs(formData.time)}
          onChange={handleChange}
          slotProps={{ textField: { variant: "outlined" } }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

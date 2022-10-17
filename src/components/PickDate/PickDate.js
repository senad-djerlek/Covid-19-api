import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const justDay =
  new Date().getDate() >= 10
    ? new Date().getDate()
    : "0".concat(new Date().getDate());

const justMonth =
  new Date().getMonth() >= 10
    ? new Date().getMonth()
    : new Date().getMonth() === 9
    ? "10"
    : "0".concat(new Date().getMonth() + 1);
const onThisDay = new Date().getFullYear() + "-" + justMonth + "-" + justDay;

export default function MaterialUIPickers({ dateFunc }) {
  const [value, setValue] = React.useState(dayjs(onThisDay));

  const handleChange = (newValue) => {
    const justDateLike =
      newValue.$d.getDate() >= 10
        ? newValue.$d.getDate()
        : "0".concat(newValue.$d.getDate());
    const justMonthLike =
      newValue.$d.getMonth() >= 10
        ? newValue.$d.getMonth()
        : newValue.$d.getMonth() === 9
        ? "10"
        : "0".concat(newValue.$d.getMonth() + 1);

    const newDate = `${newValue.$d.getFullYear()}-${justMonthLike}-${justDateLike}`;
    setValue(newDate);
    dateFunc(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Input Date"
          inputFormat="YYYY-MM-DD"
          maxDate={onThisDay}
          defaultValue={onThisDay}
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} sx={{ backgroundColor: "white" }} />
          )}
        />
        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>
  );
}

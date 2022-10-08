import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const justDay =
  new Date().getDate() >= 10
    ? new Date().getDate()
    : "0".concat(new Date().getDate());

const justMonth =
  new Date().getMonth() >= 10
    ? new Date().getMonth()
    : new Date().getMonth() == 9
    ? "10"
    : "0".concat(new Date().getMonth() + 1);
const onThisDay = new Date().getFullYear() + "-" + justMonth + "-" + justDay;

export default function MaterialUIPickers({ dateFunc }) {
  const [value, setValue] = React.useState(dayjs(onThisDay));
  console.log("onThisDay", onThisDay);

  const handleChange = (newValue) => {
    console.log("haje", typeof newValue.$d);

    const justDateLike =
      newValue.$d.getDate() >= 10
        ? newValue.$d.getDate()
        : // : newValue.$d.getDate() == 9
          // ? "10"
          "0".concat(newValue.$d.getDate());
    const justMonthLike =
      newValue.$d.getMonth() >= 10
        ? newValue.$d.getMonth()
        : newValue.$d.getMonth() == 9
        ? "10"
        : "0".concat(newValue.$d.getMonth() + 1);

    const newDate = `${newValue.$d.getFullYear()}-${justMonthLike}-${justDateLike}`;
    setValue(newDate);
    dateFunc(newDate);

    console.log("valuofDate----", value);
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
          renderInput={(params) => <TextField {...params} />}
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

// import * as React from 'react';
// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function ViewsDatePicker({dateFunc}) {
//   const [value, setValue] = React.useState(dayjs('2022-04-07'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Stack spacing={3}>
//         {/* <DatePicker
//           views={['year']}
//           label="Year only"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />
//         <DatePicker
//           views={['year', 'month']}
//           label="Year and Month"
//           minDate={dayjs('2012-03-01')}
//           maxDate={dayjs('2023-06-01')}
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />
//         <DatePicker
//           openTo="year"
//           views={['year', 'month', 'day']}
//           label="Year, month and date"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         /> */}
//         {/* <DatePicker
//           views={['day', 'month', 'year']}
//           label="Invert the order of views"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         /> */}
//         <DatePicker
//           views={['day']}
//           label="Just date"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//             dateFunc(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }

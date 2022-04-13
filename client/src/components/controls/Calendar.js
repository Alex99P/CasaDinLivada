import React from "react";
import Button from "@mui/material/Button";
import { Stack, Typography, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker, Space } from "antd";
import moment from "moment";
import Dialog, { DialogProps } from "@mui/material/Dialog";

import "antd/dist/antd.css";

const { RangePicker } = DatePicker;
function Dates(date) {
  // const fromdate=moment(date[0]).format('DD-MM-YYYY');
  // const todate=moment(date[1]).format('DD-MM-YYYY');
  const fromdate = moment(date[0]);
  const todate = moment(date[1]);
  console.log(moment(date[0]).format("DD-MM-YYYY"));
  console.log(moment(date[1]).format("DD-MM-YYYY"));
  console.log(moment.duration(todate.diff(fromdate)).asDays());
}

const Calendar = (props) => {

  let { openCalendar, setShowDataPicker } = props;

  const handleClose = () => {
    setShowDataPicker(false);
  };

  return (
    <div>
      <Dialog
        open={openCalendar}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Space direction="vertical">
            <RangePicker format="DD-MM-YYYY" onChange={Dates} />
          </Space>
        </Stack>
      </Dialog>
    </div>
  );
};

export default Calendar;

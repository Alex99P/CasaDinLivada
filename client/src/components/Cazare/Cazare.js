import React from 'react'
import './Cazare.scss'
import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
import "rsuite/dist/rsuite.min.css";
// import 'rsuite/dist/styles/rsuite.min.css';
import { DatePicker } from 'rsuite';

const Cazare = () => {
  return (
    <>
    <DateRangePicker />
    <DatePicker />
    </>
  )
}

export default Cazare
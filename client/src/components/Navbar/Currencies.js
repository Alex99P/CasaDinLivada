import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

const currencies = [
    {
        value: "RON",
        label: "RON",
    },
    {
        value: "USD",
        label: "USD",
    },
    {
        value: "EUR",
        label: "EURO",
    },
    {
        value: "BTC",
        label: "฿",
    },
];

const Currencies = ({currency,setCurrency}) => {
   
    const handleChangeCurrency = (event) => setCurrency(event.target.value);
  
    return (
        <Select
            variant="outlined"
            sx={{
                color: "#fff",
                "& .MuiSvgIcon-root": {
                    color: "white",
                    borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                },
            }}
            value={currency}
            onChange={handleChangeCurrency}
        >
            {currencies.map((option) => ( 
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    )
}

export default Currencies
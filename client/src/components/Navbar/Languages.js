import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

const languages = [
    {
        value: "Romana",
        label: "RO",
    },
    {
        value: "Engleza",
        label: "EN",
    },
];

const Languages = () => {
    const [language, setLanguage] = useState(languages[0].value);

    const handleChangeLanguage = (event) => setLanguage(event.target.value);

    return (
        <Select
            variant="outlined"
            sx={{
                color: "#fff",
                "& .MuiSvgIcon-root": {
                    color: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                },
            }}
            value={language}
            onChange={handleChangeLanguage}
        >
            {languages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    )
}

export default Languages
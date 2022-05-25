import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const languages = [
    {
        value: "ro",
        label: "RO",
    },
    {
        value: "en",
        label: "EN",
    },
];

const Languages = () => {
    const [language, setLanguage] = useState(languages[0].value);
    const { t, i18n } = useTranslation();   
    // i18n.changeLanguage('en-US');

    const handleChangeLanguage = (event) =>{ 
        setLanguage(event.target.value);
        // console.log(event.target.value);
        i18n.changeLanguage(event.target.value);

    }
    

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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './User.scss'

const User = ({ from }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const myprofile = () => {
        if (from.from === "userDashboard") {
            navigate("/rezervare");
        } else {
            navigate("/myprofile");
        }
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/rezervare");
        setUser(null);
    };

    if (!user) {
        return (
            <Button
                className="button-sing-in"
                sx={{ color: "white" }}
                component={Link}
                href="/auth"
            >
                SignIn
            </Button>
        )
    }

    return (
        <>
            <Button
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                sx={{ color: "white", marginRight: .5 }}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleClick}
            >
                {user?.result?.name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {from.from === "userDashboard"
                    ? <MenuItem onClick={myprofile}>Profile</MenuItem>
                    : <MenuItem onClick={myprofile}>My account</MenuItem>
                }
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default User
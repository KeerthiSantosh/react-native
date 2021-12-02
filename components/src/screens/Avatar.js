import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar } from "@material-ui/core";
import stetch from "../../Atom/svg/stetch.svg";
import Radio from '../../Atom/radio/radio.js';
import heart from "../../Atom/svg/hearticon.svg";
import List from "@mui/material/List";
import '../../Molecule/Feed/Feed.css';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{border:'1px solid black',borderRadius:'5px' }}>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon style={{ marginLeft: "20px" }}/>}
      >
        <Avatar style={{ height: "32px", width: "32px", marginTop: "5px"}} />
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontSize: "12px",
              color: "#2E3B43",
              paddingLeft: "10px",
              textTransform:'capitalize'
            }}
          >
          Posting As
          </div>
          <div
            style={{ fontSize: "12px", color: "#2E3B43", paddingLeft: "10px",fontWeight:'600' }}
          >
            Dr Vijay Mohan
          </div>
        </div>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div style={{ display: "flex", padding: "10px" }}>
          <Avatar style={{ height: "32px", width: "32px", marginTop: "5px" }} />
          <div style={{  display: "flex" }}>
            <div>
            <div
            style={{
              fontSize: "12px",
              color: "#2E3B43",
              paddingLeft: "10px",
              textTransform:'capitalize'
            }}
          >
           Posting As
          </div>
          <div
            style={{ fontSize: "16px", color: "#2E3B43", paddingLeft: "10px",fontWeight:'600' }}
          >
            Dr Vijay Mohan
          </div>
            </div>
            <KeyboardArrowDownIcon style={{ marginLeft: "20px" }} />
          </div>
        </div>
        <div>
        <MenuItem  style={{padding:'6px'}} >
        <img src={heart} alt="stetch"/>
          <span style={{ fontSize: "14px",paddingLeft:'10px'}}>Organisation Name</span>
          <Radio/>
        </MenuItem>
        </div>
      </Menu>
    </div>
  
  );
}

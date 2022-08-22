import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Toolbar } from "@mui/material";
import navbarItems from "./const/navbarItems";

const drawerWidth = 240;

const Navbar = () => {
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  let anchor = "drawer";
  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(0, 30, 60)",
            color: "rgb(178, 186, 194)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {navbarItems.map((itemObj, index) => (
            <ListItem key={itemObj.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "rgb(178, 186, 194)" }}>
                  {itemObj.icon}
                </ListItemIcon>
                <ListItemText primary={itemObj.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;

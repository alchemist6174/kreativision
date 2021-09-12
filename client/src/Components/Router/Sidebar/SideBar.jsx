import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import BookIcon from "@material-ui/icons/Book";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import {
  drawerStyles,
  listStyles,
} from "../../../resources/theme/MaterialStyles";

function SideBar({ sidebarOpen, handleSidebar }) {
  const drawerClasses = drawerStyles();
  const listClasses = listStyles();
  const theme = useTheme();
  const container = window.document.body;

  const drawerSection1 = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    { text: "Blog", icon: <BookIcon /> },
    { text: "About Us", icon: <InfoIcon /> },
  ];
  const drawerSection2 = [
    {
      text: "Login",
      icon: <ExitToAppIcon />,
    },
    { text: "Contact Us", icon: <WhatsAppIcon /> },
  ];

  const drawer = (
    <div>
      <div className={drawerClasses.toolbar} />
      <Divider />
      <List>
        {drawerSection1.map((item, index) => (
          <ListItem
            button
            key={index}
            selected={item.text === "Home"}
            classes={{ selected: listClasses.lsitItemSelected }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {drawerSection2.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <nav className={drawerClasses.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={sidebarOpen}
          onClose={handleSidebar}
          classes={{
            paper: drawerClasses.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: drawerClasses.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default SideBar;

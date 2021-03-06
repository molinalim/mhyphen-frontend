import React from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ConfirmationNumberTwoTone from "@material-ui/icons/ConfirmationNumber";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { HeaderProps } from "../Header/Header";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import { CLIENT } from "../Header/Header";

//styling
const useStyles = makeStyles({
  list: {
    width: "100%",
    height: 220,
    background: "black",
    backdropFilter: "blur( 2.5px )",
  },
  listText: {
    color: "white",
  },
  fullList: {
    width: "auto",
    color: "white",
  },
});

//oauth
const CLIENT_ID = "a12b7d82fa895598caba";
const REDIRECT_URI = "https://mhyphen.azurewebsites.net/home";
//sidebar
export const SideBar: React.FC<HeaderProps> = ({ user }) => {
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  CLIENT.id = Number(user?.id);
  CLIENT.name = String(user?.name);
  return (
    <div className={classes.list}>
      <List>
        <ListItem button href="/" component={Link}>
          <ListItemIcon>
            <HomeIcon style={{ fill: "white" }} />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        <ListItem button href="/booking" component={Link}>
          <ListItemIcon>
            <MenuBookTwoToneIcon style={{ fill: "white" }} />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Book" />
        </ListItem>

        {user ? (
          <div>
            <ListItem
              button
              href="/tickets"
              component={Link}
              onClick={handleLogout}
            >
              <ListItemIcon>
                <ConfirmationNumberTwoTone style={{ fill: "white" }} />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="My Tickets" />
            </ListItem>
            <ListItem
              button
              href="/home"
              component={Link}
              onClick={handleLogout}
            >
              <ListItemIcon>
                <ExitToAppIcon style={{ fill: "white" }} />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="Logout" />
            </ListItem>
          </div>
        ) : (
          <ListItem
            button
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            component={Link}
          >
            <ListItemIcon>
              <AddBoxIcon style={{ fill: "white" }} />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Login" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

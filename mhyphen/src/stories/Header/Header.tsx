import React, { useState, useEffect } from "react";
import "./Header.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  Toolbar,
  Divider,
} from "@material-ui/core";
import { SideBar } from "../Sidebar/Sidebar";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logos/M-.png";
import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Self_self } from "../../api/__generated__/Self";
import { LOGIN } from "../../api/mutations";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//media query
function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );

  return matches;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export interface HeaderProps {
  user?: Self_self;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      marginLeft: "40%",
    },
    logo__mobile: {
      marginLeft: "0",
    },
    appBar: {
      width: "100%",
      position: "fixed",
      minHeight: "60px",
      backgroundSize: "cover",
      marginLeft: "auto",
      marginRight: "auto",
      height: "60px",
      transitionTimingFunction: "ease-in",
      transition: "all 0.5s",
      alignItems: "centre",
      display: "flex",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur( 2.5px )",
      background: "rgba( 255, 255, 255, 0.20 )",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    inputRoot: {
      color: "inherit",
    },
    flexEnd: {
      justifyContent: "flex-end",
      alignItems: "center",
      display: "flex",
    },
    login: {
      marginLeft: "23%",
      display: "flex",
      justifyContent: "flex-end",
    },
    login__mobile: {
      marginLeft: "10%",
      display: "flex",
      alignItems: "center",
    },
    divider: {
      margin: "10px",
    },
  })
);
export interface Login_login_user {
  __typename: "User";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Login_login {
  __typename: "LoginPayload";
  u: Login_login_user;
  jwt: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  code: string;
}

export const CLIENT = { id: 2, name: "" };
const REDIRECT_URI = "https://mhyphen.azurewebsites.net/home";
const CLIENT_ID = "a12b7d82fa895598caba";
export default CLIENT_ID;

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const history = useHistory();
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);
  CLIENT.id = Number(user?.id);
  CLIENT.name = String(user?.name);

  const query = useQuery();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const [login] = useMutation<Login>(LOGIN);

  useEffect(() => {
    const loginMethod = async () => {
      const code = query.get("code");
      if (code != null) {
        try {
          const { data } = await login({ variables: { code } });
          if (data != null) {
            localStorage.setItem("token", data.login.jwt);
          }
        } catch (e) {
          console.log(e);
        }
        history.push("/home");
      }
    };
    loginMethod();
  }, []);

  return (
    <div className="header__root">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSideBar}
          >
            <MenuIcon />
            <Drawer anchor="top" open={sideBar} onClose={toggleSideBar}>
              <SideBar user={user} />
            </Drawer>
          </IconButton>
          <IconButton
            className={JavaScriptMedia() ? classes.logo : classes.logo__mobile}
            href="/home"
          >
            <img className="header__logo" src={logo} id="logo" alt="M- Logo" />
            <h1 className="header__header">Outdoor Cinema</h1>
          </IconButton>
          {user == null ? (
            <div
              className={
                JavaScriptMedia() ? classes.login : classes.login__mobile
              }
            >
              <AccountCircleTwoToneIcon fontSize="large" />
              <Button
                color="inherit"
                href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
              >
                Login
              </Button>
            </div>
          ) : (
            <div
              className={
                JavaScriptMedia() ? classes.login : classes.login__mobile
              }
            >
              <Button color="inherit" href="/tickets">
                My Tickets
              </Button>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
              <Avatar alt="user-avatar" src={user.imageURI} />
              <Button color="inherit" href="/booking">
                {user.name}
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

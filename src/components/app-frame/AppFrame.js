import React, { useState } from "react"
import { makeStyles, useTheme, fade } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import { drawerWidth, collapsedDrawerWidth } from "../standard"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"

import ToolBar from "./ToolBar"
import { Header, Sidebar } from "../app-frame"

//-----*-----*-----*-----*-----*-----//

export default function AppFrame(props) {
  const { children, menuTitle, menuButton, buttons, filters, searchBar } = props
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(true)
  const [isOrg, setIsOrg] = useState(false)

  const handleViewChange = () => {
    setIsOrg(!isOrg)
    console.log("view handle")
  }

  const handleDrawer = () => {
    setOpen(!open)
    console.log("drawer on/off")
  }

  return (
    <div className={classes.root}>
      <Sidebar
        handleDrawer={handleDrawer}
        handleViewChange={handleViewChange}
        isOrg={isOrg}
        theme={theme}
        open={open}
        classes={classes}
      />
      <div
        className={
          open ? classes.contentContainer : classes.contentContainerShift
        }
      >
        <Header open={open} />
        <main className={classes.container}>
          <AppBar
            position="relative"
            className={clsx(classes.menuTitleBar, {
              [classes.menuTitleBarShift]: open
            })}
          >
            <Typography variant="h6" className={classes.menuTitle}>
              {menuTitle}
            </Typography>
            {buttons}
            {searchBar && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            )}
            <Button size="small" className={classes.secondaryButtons}>
              {menuButton}
            </Button>
          </AppBar>
          {filters && <ToolBar filters={filters} />}

          <div className={classes.content}>{children}</div>
        </main>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  contentContainer: {
    width: `calc(100vw - ${collapsedDrawerWidth}px)`,
    overflow: "hidden"
  },
  contentContainerShift: {
    width: `calc(100vw - ${collapsedDrawerWidth}px)`,
    overflow: "hidden"
  },
  container: {
    padding: theme.spacing(2, 3),
    height: `calc(100vh - 64px)`,
    overflow: "scroll" // temporary. have to update
  },
  // this menuTitleBar for sub header which has menu title. origin=appBar
  menuTitleBar: {
    display: "flex",
    flexDirection: "row",

    padding: theme.spacing(0, 0, 1),
    color: "#000000",
    boxShadow: "none",
    backgroundColor: "transparent",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuTitleBarShift: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuTitle: {
    marginRight: 16
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  secondaryButtons: {
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1
  }
}))

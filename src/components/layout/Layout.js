import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import { drawerWidth, collapsedDrawerWidth } from "../standard"
import ToolBar from "./ToolBar"
import { Header, Sidebar } from "../layout"

//-----*-----*-----*-----*-----*-----//

const Layout = props => {
  const { children, menuTitle, menuButton, filters } = props
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
    console.log("open")
  }

  const handleDrawerClose = () => {
    setOpen(false)
    console.log("close")
  }

  return (
    <div className={classes.root}>
      <Sidebar
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
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
            <Typography variant="h6">{menuTitle}</Typography>
            <Button size="small">{menuButton}</Button>
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
    padding: theme.spacing(2, 3)
  },
  // this menuTitleBar for sub header which has menu title. origin=appBar
  menuTitleBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  content: {
    flexGrow: 1
  }
}))

export default Layout

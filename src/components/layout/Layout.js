import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import { Header, Sidebar } from "../layout"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  contentContainer: {
    flexGrow: 1,
    padding: theme.spacing(2, 3)
  },
  toolbar: {
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 0, 1)
  },
  content: {
    flexGrow: 1
  }
}))

const Layout = props => {
  const { children, menuTitle } = props
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
      <div style={{ width: "100%" }}>
        <Header open={open} />
        <main className={classes.contentContainer}>
          <div className={classes.toolbar}>
            <Typography variant="h6">{menuTitle}</Typography>
          </div>
          <div className={classes.content}>{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Layout

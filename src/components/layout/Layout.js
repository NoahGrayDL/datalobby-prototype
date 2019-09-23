import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import { Header, Sidebar } from "../layout"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Layout = props => {
  const { children } = props
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

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>{children}</Typography>
        </main>
      </div>
    </div>
  )
}

export default Layout

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

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
      <div style={{ width: "100%" }}>
        <Header open={open} />
        <main className={classes.contentContainer}>
          <div className={classes.toolbar}>
            <Typography variant="h6">{menuTitle}</Typography>
            <Button size="small">{menuButton}</Button>
          </div>
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
    flexGrow: 1,
    padding: theme.spacing(2, 3)
  },
  toolbar: {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    padding: theme.spacing(0, 0, 1),
    maxWidth: "calc(100vw - 200px)"
  },
  content: {
    flexGrow: 1
  }
}))

export default Layout

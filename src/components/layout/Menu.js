import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

//-----*-----*-----*-----*-----*-----//

const useStyles = makeStyles(theme => ({
  menu: {},
  menuIcon: {
    minWidth: 40
  }
}))

const Menu = props => {
  const { title, icon } = props
  const classes = useStyles()
  return (
    <ListItem button key={title} className={classes.menu}>
      <ListItemIcon className={classes.menuIcon}>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  )
}

export default Menu

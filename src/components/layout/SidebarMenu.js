import React from "react"
import { NavLink } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { primaryColor } from "../standard"

//-----*-----*-----*-----*-----*-----//

const SidebarMenu = props => {
  const { title, icon, url } = props
  const classes = useStyles()

  return (
    <NavLink
      to={url}
      className={classes.link}
      activeClassName={classes.activeMenu}
    >
      <ListItem button key={title} className={classes.menu}>
        <ListItemIcon className={classes.menuIcon}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </NavLink>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    padding: "none",
    display: "flex"
  },
  activeMenu: {
    color: primaryColor,
    "& svg": {
      fill: primaryColor
    }
  },
  menuIcon: {
    minWidth: 40,
    marginRight: 2
  }
}))

export default SidebarMenu

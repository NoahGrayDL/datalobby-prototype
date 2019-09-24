import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// for sub menu
import InboxIcon from "@material-ui/icons/MoveToInbox"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import List from "@material-ui/core/List"
import StarBorder from "@material-ui/icons/StarBorder"

//-----*-----*-----*-----*-----*-----//

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    padding: "none",
    display: "flex"
  },
  activeMenu: {
    color: "orange",
    "& svg": {
      fill: "orange"
    }
  },
  menuIcon: {
    minWidth: 40,
    marginRight: 2
  }
}))

const SidebarMenu = props => {
  const { title, icon, url, subMenus } = props
  const classes = useStyles()
  const [subMenuOpen, setSubMenuOpen] = useState(true)

  return (
    <NavLink
      to={url}
      className={classes.link}
      activeClassName={classes.activeMenu}
    >
      <ListItem button key={title} className={classes.menu}>
        <ListItemIcon className={classes.menuIcon}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </NavLink>
  )
}

const SidebarSubMenu = props => {
  const { title, icon, url, subMenus } = props
  const classes = useStyles()

  const [subMenuOpen, setSubMenuOpen] = useState(true)
  const subMenuClick = () => {
    console.log("hi")
  }
  return (
    <NavLink
      to={url}
      className={classes.link}
      activeClassName={classes.activeMenu}
    >
      <ListItem button onClick={subMenuClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </NavLink>
  )
}

export default SidebarMenu

import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import List from "@material-ui/core/List"
import { primaryColor, sidebarSubMenuBackgroundColor } from "../standard"
//-----*-----*-----*-----*-----*-----//

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0
  }
}))

const SidebarMenuWithSubMenus = props => {
  const { title, icon, url, subMenus } = props
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const classes = useStyles()
  const subMenuClick = () => {
    setSubMenuOpen(!subMenuOpen)
  }
  return (
    <List className="with-sub-menu">
      <ListItem button onClick={subMenuClick}>
        <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
        <ListItemText className="menu-text" primary={title} />
        {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenus.map(item => {
            const { title, icon, url } = item
            return (
              <NavLink
                to={url}
                className="link FR"
                activeClassName="active-menu"
                key={url}
              >
                <ListItem button className="nested-menu">
                  <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
                  <ListItemText className="menu-text" primary={title} />
                </ListItem>
              </NavLink>
            )
          })}
        </List>
      </Collapse>
    </List>
  )
}

export default React.memo(SidebarMenuWithSubMenus)

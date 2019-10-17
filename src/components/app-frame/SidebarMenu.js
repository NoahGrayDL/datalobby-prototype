import React from "react"
import { NavLink } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

//-----*-----*-----*-----*-----*-----//

const SidebarMenu = props => {
  const { title, icon, url } = props

  return (
    <NavLink to={url} className="link FR" activeClassName="active-menu">
      <ListItem button key={title}>
        <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
        <ListItemText className="menu-text" primary={title} />
      </ListItem>
    </NavLink>
  )
}

export default React.memo(SidebarMenu)

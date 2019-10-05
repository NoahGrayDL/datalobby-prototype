import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import dummyCompany from "../../../assets/dummy-data/company.json"
//-----*-----*-----*-----*-----*-----//

const CompanyList = () => {
  return (
    <List>
      {dummyCompany.map(item => {
        return (
          <ListItem button key={item.name}>
            <ListItemText primary={item.name} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default CompanyList

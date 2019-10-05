import React from "react"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import Filter from "./Filter"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  icon: {
    paddingTop: theme.spacing(2.4)
  }
}))

const ToolBar = props => {
  const { filters } = props
  const classes = useStyles()
  return (
    <div>
      {/* <InfoOutlinedIcon className={classes.icon} /> */}
      {filters.map(item => {
        const { filterName, filterItems } = item
        return (
          <Filter
            filterName={filterName}
            filterItems={filterItems}
            key={filterName}
          />
        )
      })}
    </div>
  )
}

export default ToolBar

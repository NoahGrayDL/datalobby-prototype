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
      <InfoOutlinedIcon className={classes.icon} />
      <Filter filterName="Leadsheet View" filterItems={leadsheetFilter} />
      <Filter filterName="Entity" filterItems={entityFilter} />
      <Filter filterName="Unit" filterItems={unitFilter} />
      <Filter filterName="Date" filterItems={dateFilter} />
    </div>
  )
}

const leadsheetFilter = [
  {
    value: 1,
    title: "Lead sheet view 1"
  },
  {
    value: 2,
    title: "Lead sheet view 2"
  },
  {
    value: 3,
    title: "Lead sheet view 3"
  }
]

const entityFilter = [
  {
    value: 1,
    title: "filter value 1"
  },
  {
    value: 2,
    title: "filter value 2"
  },
  {
    value: 3,
    title: "filter value 3"
  }
]
const unitFilter = [
  {
    value: 1,
    title: "filter value 1"
  },
  {
    value: 2,
    title: "filter value 2"
  },
  {
    value: 3,
    title: "filter value 3"
  }
]
const dateFilter = [
  {
    value: 1,
    title: "filter value 1"
  },
  {
    value: 2,
    title: "filter value 2"
  },
  {
    value: 3,
    title: "filter value 3"
  }
]
export default ToolBar

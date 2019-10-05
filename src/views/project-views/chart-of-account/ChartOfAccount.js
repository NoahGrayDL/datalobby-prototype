import React from "react"
import { PageContainer } from "../../../components"
import { makeStyles } from "@material-ui/core/styles"

import { NavLink } from "react-router-dom"
import { primaryColor } from "../../../components/standard"

import Button from "@material-ui/core/Button"
import CoATable from "./CoATable"
import EntityList from "./EntityList"

//-----*-----*-----*-----*-----*-----//

const ChartOfAccount = () => {
  const classes = useStyles()
  return (
    // <Layout
    //   menuTitle="Chart of Account"
    //   // filters={CoAFilters}
    //   // searchBar
    //   buttons={
    //     <div>
    //       <Button size="medium">List</Button>
    //       <Button size="medium">Detail</Button>
    //     </div>
    //   }
    // >
    <PageContainer menuTitle="Chart of Account">
      <div className={classes.container}>
        <EntityList />
        <CoATable />
      </div>
    </PageContainer>
    // </Layout>
  )
}

const CoAFilters = [
  // {
  //   filterName: "CoA Title",
  //   filterItems: [
  //     { value: 1, title: "filter item 1" },
  //     { value: 2, title: "filter item 2" },
  //     { value: 3, title: "filter item 3" }
  //   ]
  // },
  {
    filterName: "Entity",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  }
]

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row"
  }
}))

export default ChartOfAccount

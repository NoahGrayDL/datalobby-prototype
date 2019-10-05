import React, { useReducer } from "react"
import { PageContainer } from "../../../components"
import { makeStyles } from "@material-ui/core/styles"
import { List } from "../../../components/list"
import { NavLink } from "react-router-dom"
import { primaryColor } from "../../../components/standard"

import Button from "@material-ui/core/Button"
import CoATable from "./CoATable"
import EntityList from "./EntityList"

//-----*-----*-----*-----*-----*-----//

export default function ChartOfAccount() {
  const [coas, setCoas] = useReducer(coaReducer, DummyCoAs)
  const classes = useStyles()
  return (
    <PageContainer menuTitle="Chart of Account">
      {/* <List items={coas} /> */}
      {/* <EntityList /> */}
      {/* <CoATable /> */}
    </PageContainer>
  )
}

const DummyCoAs = [
  {
    id: 1,
    checked: false,
    name: "첫번째 COA",
    entity: "공룡알회사"
  }
]

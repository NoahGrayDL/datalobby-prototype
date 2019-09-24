import React from "react"
import { Layout } from "../../components/layout"
import CoATable from "./CoATable"
//-----*-----*-----*-----*-----*-----//

const ChartOfAccount = () => {
  return (
    <Layout
      menuTitle="Chart of Account"
      filters={CoAFilters}
      menuButton="CoA List"
    >
      <CoATable />
    </Layout>
  )
}

const CoAFilters = [
  {
    filterName: "CoA Title",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  },
  {
    filterName: "Entity",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  }
]

export default ChartOfAccount

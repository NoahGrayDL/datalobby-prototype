import React from "react"

import { Layout } from "../../components/layout"
import LeadsheetTable from "./LeadsheetTable"

//-----*-----*-----*-----*-----*-----//

const Leadsheet = () => {
  return (
    <Layout menuTitle="Leadsheet" filters={LeadsheetFilters}>
      <LeadsheetTable />
    </Layout>
  )
}

const LeadsheetFilters = [
  {
    filterName: "Leadsheet View",
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
  },
  {
    filterName: "Unit",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  },
  {
    filterName: "Date",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  }
]
export default Leadsheet

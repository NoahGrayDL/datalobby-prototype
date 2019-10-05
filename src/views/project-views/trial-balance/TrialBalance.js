import React from "react"
import { PageContainer } from "../../../components"

import { TrialBalanceTable } from "../trial-balance"
//-----*-----*-----*-----*-----*-----//

const TrialBalance = () => {
  return (
    // <Layout menuTitle="Trial Balance" filters={TrialBalanceFilters}>
    <PageContainer menuTitle="Trial Balance">
      <TrialBalanceTable />
    </PageContainer>
    // </Layout>
  )
}

const TrialBalanceFilters = [
  {
    filterName: "Trial Balance View",
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
  }
]

export default TrialBalance

import React from "react"
import { PageContainer } from "../../../components/page-container"

import { TrialBalanceTable } from "../trial-balance"
//-----*-----*-----*-----*-----*-----//

const TrialBalance = () => {
  return (
    <PageContainer menuTitle="Trial Balance">
      <TrialBalanceTable />
    </PageContainer>
  )
}

export default TrialBalance

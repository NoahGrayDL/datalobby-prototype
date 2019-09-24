import React from "react"
import { BasicTable } from "../../components/tables"
import styled from "styled-components"
import generalLedgerAccounts from "../../assets/dummy-data/generalLedgerAccounts.json"
import captions from "../../assets/dummy-data/captions.json"
import {
  generalLedgerAccountsColumn,
  captionColumn,
  trialBalanceOpeningColumn,
  trialBalanceCurrentPeriodColumn,
  trialBalanceNetChangeColumn,
  trialBalanceEndingColumn
} from "../../assets/dummy-data/columnStructure"
//-----*-----*-----*-----*-----*-----//

const TrialBalanceTable = () => {
  return (
    <StyledTBContainer>
      {dataSet.map(item => {
        const { data, columnStructure } = item
        return <BasicTable data={data} columnStructure={columnStructure} />
      })}
    </StyledTBContainer>
  )
}

const dataSet = [
  {
    data: generalLedgerAccounts,
    columnStructure: generalLedgerAccountsColumn
  },
  {
    data: captions,
    columnStructure: captionColumn
  },
  {
    data: generalLedgerAccounts,
    columnStructure: trialBalanceOpeningColumn
  },
  {
    data: generalLedgerAccounts,
    columnStructure: trialBalanceCurrentPeriodColumn
  },
  {
    data: generalLedgerAccounts,
    columnStructure: trialBalanceNetChangeColumn
  },
  {
    data: generalLedgerAccounts,
    columnStructure: trialBalanceEndingColumn
  }
]

const StyledTBContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
`

export default TrialBalanceTable

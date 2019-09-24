import React from "react"
import { BasicTable, FoldableTable } from "../../components/tables"
import styled from "styled-components"
import captions from "./dummy-data/captions.json"
import generalLedgerAccounts from "./dummy-data/generalLedgerAccounts.json"
import trialBalance from "./dummy-data/trialBalance.json"
import cumulatedAdjustments from "./dummy-data/cumulatedAdjustments.json"
import adjustedTB from "./dummy-data/adjustedTB.json"
import subsidiaryA from "./dummy-data/subsidiaryA.json"
import subsidiaryB from "./dummy-data/subsidiaryB.json"
import combinedTB from "./dummy-data/combinedTB.json"
import cumulativeEliminatingEntries from "./dummy-data/cumulativeEliminatingEntries.json"
import consolidatedTB from "./dummy-data/consolidatedTB.json"
import incomeStatement from "./dummy-data/incomeStatement.json"
import balanceSheet from "./dummy-data/balanceSheet.json"

import {
  captionColumn,
  generalLedgerAccountColumn,
  tbColumn,
  cumulatedAdjustmentsColumn,
  adjustedTBColumn,
  subsidiaryAColumn,
  subsidiaryBColumn,
  combinedTBColumn,
  cumulativeEliminatingEntriesColumn,
  consolidatedTBColumn,
  incomeStatementColumn,
  balanceSheetColumn
} from "./dummy-data/columnStructure"
//-----*-----*-----*-----*-----*-----//

const LeadsheetTable = () => {
  return (
    <StyledLeadsheetContainer>
      {/* <FoldableTable data={captions} columnStructure={captionColumn} /> */}
      {dataSet.map(item => {
        const { data, columnStructure } = item
        return <BasicTable data={data} columnStructure={columnStructure} />
      })}
    </StyledLeadsheetContainer>
  )
}

const dataSet = [
  {
    data: captions,
    columnStructure: captionColumn,
    isFoldable: false
  },
  {
    data: generalLedgerAccounts,
    columnStructure: generalLedgerAccountColumn,
    isFoldable: false
  },
  {
    data: trialBalance,
    columnStructure: tbColumn,
    isFoldable: false
  },
  {
    data: cumulatedAdjustments,
    columnStructure: cumulatedAdjustmentsColumn,
    isFoldable: false
  },
  {
    data: adjustedTB,
    columnStructure: adjustedTBColumn,
    isFoldable: false
  },
  {
    data: subsidiaryA,
    columnStructure: subsidiaryAColumn,
    isFoldable: false
  },
  {
    data: subsidiaryB,
    columnStructure: subsidiaryBColumn,
    isFoldable: false
  },
  {
    data: combinedTB,
    columnStructure: combinedTBColumn,
    isFoldable: false
  },
  {
    data: cumulativeEliminatingEntries,
    columnStructure: cumulativeEliminatingEntriesColumn,
    isFoldable: false
  },
  {
    data: consolidatedTB,
    columnStructure: consolidatedTBColumn,
    isFoldable: false
  },
  {
    data: incomeStatement,
    columnStructure: incomeStatementColumn,
    isFoldable: false
  },
  {
    data: balanceSheet,
    columnStructure: balanceSheetColumn,
    isFoldable: false
  }
]

const StyledLeadsheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
`

export default LeadsheetTable

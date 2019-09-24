import React from "react"
import { BasicTable, FoldableTable } from "../../components/tables"
import styled from "styled-components"
import captions from "./dummy-data/captions.json"
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
    columnStructure: captionColumn
  },
  {
    data: trialBalance,
    columnStructure: tbColumn
  },
  {
    data: cumulatedAdjustments,
    columnStructure: cumulatedAdjustmentsColumn
  },
  {
    data: adjustedTB,
    columnStructure: adjustedTBColumn
  },
  {
    data: subsidiaryA,
    columnStructure: subsidiaryAColumn
  },
  {
    data: subsidiaryB,
    columnStructure: subsidiaryBColumn
  },
  {
    data: combinedTB,
    columnStructure: combinedTBColumn
  },
  {
    data: cumulativeEliminatingEntries,
    columnStructure: cumulativeEliminatingEntriesColumn
  },
  {
    data: consolidatedTB,
    columnStructure: consolidatedTBColumn
  },
  {
    data: incomeStatement,
    columnStructure: incomeStatementColumn
  },
  {
    data: balanceSheet,
    columnStructure: balanceSheetColumn
  }
]

const StyledLeadsheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  & .partition {
    width: 8px;
    height: 100%;
    flex-shrink: 0;
  }
`

export default LeadsheetTable

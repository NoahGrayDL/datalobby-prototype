import React, { useState } from "react"
import {
  BasicTable,
  FoldableTable,
  PivotAndAggregateTable
} from "../../components/tables"
import styled from "styled-components"
import leadsheetCaptions from "../../assets/dummy-data/leadsheetCaptions.json"
import captions from "../../assets/dummy-data/captions.json"
import captionsWithGroup from "../../assets/dummy-data/captionsWithGroup.json"
import generalLedgerAccounts from "../../assets/dummy-data/generalLedgerAccounts.json"
import trialBalance from "../../assets/dummy-data/trialBalance.json"
import cumulatedAdjustments from "../../assets/dummy-data/cumulatedAdjustments.json"
import adjustedTB from "../../assets/dummy-data/adjustedTB.json"
import subsidiaryA from "../../assets/dummy-data/subsidiaryA.json"
import subsidiaryB from "../../assets/dummy-data/subsidiaryB.json"
import combinedTB from "../../assets/dummy-data/combinedTB.json"
import cumulativeEliminatingEntries from "../../assets/dummy-data/cumulativeEliminatingEntries.json"
import consolidatedTB from "../../assets/dummy-data/consolidatedTB.json"
import incomeStatement from "../../assets/dummy-data/incomeStatement.json"
import balanceSheet from "../../assets/dummy-data/balanceSheet.json"

import {
  captionColumn,
  captionsWithGroupColumn,
  leadsheetCaptionColumn,
  leadsheetCaptionGLAColumn,
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
} from "../../assets/dummy-data/columnStructure"
//-----*-----*-----*-----*-----*-----//

const LeadsheetTable = () => {
  const [pivot, setPivot] = useState(["caption"])
  return (
    <StyledLeadsheetContainer>
      {/* <PivotAndAggregateTable
        data={captions}
        columnStructure={captionColumn}
        pivotTargets={["caption1", "caption2"]}
      /> */}
      {dataSet.map(item => {
        const { data, columnStructure } = item
        return (
          <PivotAndAggregateTable
            data={data}
            columnStructure={columnStructure}
            length={data.length}
            pivotTargets={pivot}
          />
        )
      })}
    </StyledLeadsheetContainer>
  )
}

const dataSet = [
  {
    data: leadsheetCaptions,
    columnStructure: leadsheetCaptionColumn,
    isFoldable: false
  },
  {
    data: leadsheetCaptions,
    columnStructure: leadsheetCaptionGLAColumn,
    isFoldable: false
  }
  // {
  //   data: trialBalance,
  //   columnStructure: tbColumn,
  //   isFoldable: false
  // },
  // {
  //   data: cumulatedAdjustments,
  //   columnStructure: cumulatedAdjustmentsColumn,
  //   isFoldable: false
  // }
  // {
  //   data: adjustedTB,
  //   columnStructure: adjustedTBColumn,
  //   isFoldable: false
  // },
  // {
  //   data: subsidiaryA,
  //   columnStructure: subsidiaryAColumn,
  //   isFoldable: false
  // },
  // {
  //   data: subsidiaryB,
  //   columnStructure: subsidiaryBColumn,
  //   isFoldable: false
  // },
  // {
  //   data: combinedTB,
  //   columnStructure: combinedTBColumn,
  //   isFoldable: false
  // },
  // {
  //   data: cumulativeEliminatingEntries,
  //   columnStructure: cumulativeEliminatingEntriesColumn,
  //   isFoldable: false
  // },
  // {
  //   data: consolidatedTB,
  //   columnStructure: consolidatedTBColumn,
  //   isFoldable: false
  // },
  // {
  //   data: incomeStatement,
  //   columnStructure: incomeStatementColumn,
  //   isFoldable: false
  // },
  // {
  //   data: balanceSheet,
  //   columnStructure: balanceSheetColumn,
  //   isFoldable: false
  // }
]

const StyledLeadsheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0.5rem;
  overflow-x: scroll;
`

export default LeadsheetTable

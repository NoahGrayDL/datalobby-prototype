import React, { useState } from "react"
import styled from "styled-components"
import captionsWithoutGLA from "../../assets/dummy-data/LS-without-GLA/captionsWithoutGLA.json"
import prevTB from "../../assets/dummy-data/LS-without-GLA/prevTB.json"
import curPeriod from "../../assets/dummy-data/LS-without-GLA/curPeriod.json"
import ReactTable from "react-table"
import "react-table/react-table.css"
import {
  CaptionWithoutGLAColumn,
  TBColumn
} from "../../assets/dummy-data/LS-without-GLA/leadsheetColumnStructure"
//-----*-----*-----*-----*-----*-----//

const LeadsheetTable2 = () => {
  const defaultTalbeState = () => ({
    sorted: [],
    expanded: {
      "0": {
        "0": {
          "0": {
            "0": {}
          }
        },
        "1": {
          "0": {},
          "1": {},
          "2": {}
        }
      },
      "1": {
        "0": {
          "0": {}
        },
        "1": {
          "0": {}
        }
      },
      "2": {
        "0": {
          "0": {}
        },
        "1": {
          "0": {}
        },
        "2": {
          "0": {}
        },
        "3": {
          "0": {}
        }
      }
    },
    filtered: []
  })
  const [tableState, setTableState] = useState(defaultTalbeState)
  return (
    <StyledLeadsheetContainer>
      {/* <pre>
        <code>
          <strong>this.state ===</strong> {JSON.stringify(tableState, null, 2)}
        </code>
      </pre> */}
      <ReactTable
        data={captionsWithoutGLA}
        columns={CaptionWithoutGLAColumn}
        pivotBy={["captionGroup1", "captionGroup2", "captionGroup3"]}
        className="-striped -highlight"
        sorted={tableState.sorted}
        expanded={tableState.expanded}
        filtered={tableState.filtered}
        onSortedChange={sorted => setTableState({ sorted })}
        onExpandedChange={expanded => setTableState({ expanded })}
        onFilteredChange={filtered => setTableState({ filtered })}
        style={{ marginRight: 8 }}
      />
      <ReactTable
        data={prevTB}
        columns={TBColumn}
        pivotBy={["captionGroup1", "captionGroup2", "captionGroup3"]}
        className="-striped -highlight"
        sorted={tableState.sorted}
        expanded={tableState.expanded}
        filtered={tableState.filtered}
        onSortedChange={sorted => setTableState({ sorted })}
        onExpandedChange={expanded => setTableState({ expanded })}
        onFilteredChange={filtered => setTableState({ filtered })}
        style={{ marginRight: 8 }}
      />
      <ReactTable
        data={curPeriod}
        columns={TBColumn}
        pivotBy={["captionGroup1", "captionGroup2", "captionGroup3"]}
        className="-striped -highlight"
        sorted={tableState.sorted}
        expanded={tableState.expanded}
        filtered={tableState.filtered}
        onSortedChange={sorted => setTableState({ sorted })}
        onExpandedChange={expanded => setTableState({ expanded })}
        onFilteredChange={filtered => setTableState({ filtered })}
      />
    </StyledLeadsheetContainer>
  )
}

const StyledLeadsheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0.5rem;
  overflow-x: scroll;
  & .rt-tr-group .rt-tr-group {
    background-color: #e5e5e5;
  }
`

export default LeadsheetTable2

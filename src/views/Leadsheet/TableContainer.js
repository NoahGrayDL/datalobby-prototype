import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import captionsWithoutGLA from "../../assets/dummy-data/LS-without-GLA/captionsWithoutGLA.json"
import {
  CaptionOnlyColumn,
  CaptionWithoutGLAColumn,
  TBColumn,
  curPeriodColumn
} from "../../assets/dummy-data/LS-without-GLA/leadsheetColumnStructure"
import styled from "styled-components"

export default function TableContainer(props) {
  const { selectedView, columns, tableState, setTableState } = props
  const { isPivot } = selectedView

  return (
    <StyledTableContainer>
      {columns.map(column => {
        const { isDisplayed } = column
        return (
          isDisplayed && (
            <TableColumn
              isPivot={isPivot}
              data={column}
              tableState={tableState}
              setTableState={setTableState}
            />
          )
        )
      })}
    </StyledTableContainer>
  )
}

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TableColumn = props => {
  const { data, isPivot, tableState, setTableState } = props
  const { columnTitle } = data

  return (
    <div>
      {columnTitle}
      <ReactTable
        data={captionsWithoutGLA}
        columns={isPivot ? CaptionWithoutGLAColumn : CaptionOnlyColumn}
        pivotBy={
          isPivot ? ["captionGroup1", "captionGroup2", "captionGroup3"] : ""
        }
        sorted={tableState.sorted}
        expanded={tableState.expanded}
        filtered={tableState.filtered}
        onSortedChange={sorted => setTableState({ sorted })}
        onExpandedChange={expanded => setTableState({ expanded })}
        onFilteredChange={filtered => setTableState({ filtered })}
      />
      {/* <ReactTable
        data={captionsWithoutGLA}
        columns={isPivot ? CaptionWithoutGLAColumn : CaptionOnlyColumn}
        pivotBy={
          isPivot ? ["captionGroup1", "captionGroup2", "captionGroup3"] : ""
        }
        className="-striped -highlight"
        sorted={tableState.sorted}
        expanded={tableState.expanded}
        filtered={tableState.filtered}
        onSortedChange={sorted => setTableState({ sorted })}
        onExpandedChange={expanded => setTableState({ expanded })}
        onFilteredChange={filtered => setTableState({ filtered })}
        style={{ marginRight: 8, display: captionSetA ? "block" : "none" }}
        showPagination={false}
      /> */}
    </div>
  )
}

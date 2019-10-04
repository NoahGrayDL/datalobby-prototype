import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import {
  CaptionOnlyColumn,
  CaptionWithoutGLAColumn,
  TBColumn,
  curPeriodColumn,
  netChangeColumn
} from "../../assets/dummy-data/LS-without-GLA/leadsheetColumnStructure"
import styled from "styled-components"

// json
import captionData from "../../assets/dummy-data/LS-without-GLA/captionsWithoutGLA.json"
import curPeriodData from "../../assets/dummy-data/LS-without-GLA/curPeriod.json"
import netChangeData from "../../assets/dummy-data/LS-without-GLA/netChange.json"
import prevTBData from "../../assets/dummy-data/LS-without-GLA/prevTB.json"

export default function TableContainer(props) {
  const { selectedView, columns, tableState, setTableState } = props

  return (
    <StyledTableContainer>
      {columns.map((column, i) => {
        const { isDisplayed } = column
        return (
          isDisplayed && (
            <TableColumn
              selectedView={selectedView}
              columnInfo={column}
              tableState={tableState}
              setTableState={setTableState}
              key={i}
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
  const { columnInfo, selectedView, tableState, setTableState } = props
  const { columnTitle, data } = columnInfo
  const { isPivot, pivotBy } = selectedView
  console.log("data: ", data)

  const columnData = data => {
    if (data === "caption") {
      return captionData
    } else if (data === "prevTB") {
      return prevTBData
    } else if (data === "curPeriod") {
      return curPeriodData
    } else if (data === "netChange") {
      return netChangeData
    }
  }

  const columnStructure = data => {
    if (data === "caption") {
      return isPivot ? CaptionWithoutGLAColumn : CaptionOnlyColumn
    } else if (data === "prevTB") {
      return TBColumn
    } else if (data === "curPeriod") {
      return curPeriodColumn
    } else if (data === "netChange") {
      return netChangeColumn
    }
  }

  return (
    <ReactTable
      data={columnData(data)}
      columns={columnStructure(data)}
      pivotBy={isPivot ? pivotBy : []}
      sorted={tableState.sorted}
      expanded={tableState.expanded}
      filtered={tableState.filtered}
      onSortedChange={sorted => setTableState({ sorted })}
      onExpandedChange={expanded => setTableState({ expanded })}
      onFilteredChange={filtered => setTableState({ filtered })}
      showPagination={false}
    />
  )
}

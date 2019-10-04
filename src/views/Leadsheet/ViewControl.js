import React, { useState } from "react"
import { DropdownSelect } from "../../components"
import Chip from "@material-ui/core/Chip"
import CloseIcon from "@material-ui/icons/Close"
import GridOnIcon from "@material-ui/icons/GridOn"

import styled from "styled-components"

export default function ViewControl(props) {
  const {
    selectedView,
    handleSelectedView,
    viewList,
    unitList,
    handleSelectedUnit,
    selectedUnit,
    pivotList,
    handleSelectedPivot,
    selectedPivot,
    columns,
    columnOnOff
  } = props

  console.log("column on control: ", columns)
  const handleDelete = () => {
    alert("Do you want to exclude this column?")
  }
  return (
    <StyledViewControl>
      <DropdownSelect
        title="View Select"
        selectOptions={viewList}
        handleSelect={handleSelectedView}
        defaultValue={selectedView.id}
      />
      <DropdownSelect
        title="Unit Select"
        selectOptions={unitList}
        handleSelect={handleSelectedUnit}
        defaultValue={selectedUnit.id}
      />
      <DropdownSelect
        title="Pivot By"
        selectOptions={pivotList}
        handleSelect={handleSelectedPivot}
        defaultValue={selectedPivot.id}
      />
      <div className="column-chip-container">
        {columns.map(column => {
          const { columnId, columnTitle, isDisplayed } = column
          return (
            <Chip
              key={columnId}
              onDelete={handleDelete}
              deleteIcon={<CloseIcon style={{ zIndex: 1 }} />}
              icon={<GridOnIcon />}
              label={columnTitle}
              size="small"
              color="primary"
              variant={isDisplayed ? "default" : "outlined"}
              onClick={() => columnOnOff(columnId)}
            />
          )
        })}
      </div>
    </StyledViewControl>
  )
}

const StyledViewControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & .column-chip-container {
    display: flex;
    flex-direction: row;
    & .column-chip {
      padding: 8px;
      border: 1px solid gray;
    }
  }
`

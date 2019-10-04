import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import styled from "styled-components"

export default function ViewControl(props) {
  const {
    selectedView,
    handleSelectedView,
    viewList,
    columns,
    columnOnOff,
    pivotOnOff
  } = props

  console.log("column on control: ", columns)

  return (
    <StyledViewControl>
      <DropdownSelect
        title="View Select"
        items={viewList}
        handleSelectedView={handleSelectedView}
        defaultItem={selectedView.viewId}
      />
      <div className="pivot-button" onClick={pivotOnOff}>
        {selectedView.isPivot ? "Pivot Off" : "Pivot On"}
      </div>
      <div className="column-chip-container">
        {columns.map(column => {
          const { columnId, columnTitle, isDisplayed } = column
          return (
            <div
              className="column-chip"
              key={columnId}
              style={{ color: isDisplayed ? "black" : "#e5e5e5" }}
              onClick={() => columnOnOff(columnId)}
            >
              {columnTitle}
            </div>
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

const DropdownSelect = props => {
  const { title, items, handleSelectedView, defaultItem } = props
  const classes = useStyles()
  const [value, setValue] = useState({
    selectedId: defaultItem,
    title: ""
  })

  const handleSelect = event => {
    setValue(value => ({
      ...value,
      [event.target.name]: event.target.value
    }))
    handleSelectedView(event.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="select-view">{title}</InputLabel>
      <Select
        value={value.selectedId}
        onChange={handleSelect}
        inputProps={{ name: "selectedId", id: "select-view" }}
      >
        {items.map(item => {
          const { viewId, viewTitle } = item
          return (
            <MenuItem value={viewId} key={viewId}>
              {viewTitle}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(0, 2, 1, 0),
    minWidth: 148
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  }
}))

import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"

export default function DropdownSelect(props) {
  const { title, selectOptions, handleSelect, defaultValue } = props
  const classes = useStyles()
  const [value, setValue] = useState({
    selectedItem: defaultValue,
    title: ""
  })

  const innerHandleSelect = event => {
    setValue(value => ({
      ...value,
      [event.target.name]: event.target.value
    }))
    handleSelect(event.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="dropdown-select">{title}</InputLabel>
      <Select
        value={value.selectedItem}
        onChange={innerHandleSelect}
        inputProps={{ name: "selectedItem", id: "dropdown-select" }}
      >
        {selectOptions.map(item => {
          const { id, title } = item
          return (
            <MenuItem value={id} key={id}>
              {title}
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

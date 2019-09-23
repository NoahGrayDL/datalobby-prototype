import React, { useState, useRef, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"

import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"

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

const Filter = props => {
  const { filterName, filterItems } = props
  const classes = useStyles()
  const [value, setValue] = useState({
    filterId: "",
    title: "placeholder"
  })

  // const inputLabel = useRef(null)
  // const [labelWidth, setLabelWidth] = useState(0)

  // useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth)
  // }, [])

  const handleChange = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="filter-a">{filterName}</InputLabel>
      <Select
        value={value.filterId}
        onChange={handleChange}
        inputProps={{ name: "filterId", id: "filter-a" }}
      >
        {filterItems.map(item => {
          const { value, title } = item
          return <MenuItem value={value}>{title}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}
export default Filter

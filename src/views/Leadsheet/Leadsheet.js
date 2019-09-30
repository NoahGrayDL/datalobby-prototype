import React, { useState } from "react"
import "date-fns"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers"
import Button from "@material-ui/core/Button"

import { Layout } from "../../components/layout"
import { LeadsheetTable, LeadsheetTable2, ColumnControl } from "../leadsheet"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

//-----*-----*-----*-----*-----*-----//

const Leadsheet = () => {
  const [state, setState] = React.useState({
    isPivot: true
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }
  return (
    <Layout
      menuTitle="Leadsheet"
      filters={LeadsheetFilters}
      // Need to layout update
      // buttons={DatePicker}
      buttons={<Button size="medium">Save View</Button>}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={state.isPivot}
            onChange={handleChange("isPivot")}
            value="isPivot"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
        }
        label="Pivot by Caption Group"
      />
      <ColumnControl />
      <LeadsheetTable2 isPivot={state.isPivot} />
    </Layout>
  )
}

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDateChange = date => {
    setSelectedDate(date)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

const LeadsheetFilters = [
  {
    filterName: "Leadsheet View",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  },
  {
    filterName: "Entity",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  },
  {
    filterName: "Unit",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  },
  {
    filterName: "Date",
    filterItems: [
      { value: 1, title: "filter item 1" },
      { value: 2, title: "filter item 2" },
      { value: 3, title: "filter item 3" }
    ]
  }
]
export default Leadsheet

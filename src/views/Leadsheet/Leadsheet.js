import React, { useState } from "react"
import "date-fns"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers"
import Button from "@material-ui/core/Button"

import { Layout } from "../../components/layout"
import {
  LeadsheetTable3,
  ColumnControl,
  LeadsheetViewControls
} from "../leadsheet"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

// import View setting information
import defaultView from "./viewSetA"
//-----*-----*-----*-----*-----*-----//

export default function Leadsheet() {
  const viewList = [defaultView, "forClosing", "forIndividualFS", "forSOX"]
  const [selectedView, setSelectedView] = useState(viewList[0])

  const [state, setState] = useState(selectedView.pivotState.isPivot)
  const [columnState, setColumnState] = useState(selectedView.columnsState)

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const columnOnOff = columnId => event => {
    setColumnState({
      ...columnState,
      [columnId]: !columnState[columnId].isDisplayed
    })
  }

  return (
    <Layout menuTitle="Leadsheet">
      <LeadsheetViewControls />
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
      <ColumnControl columnState={columnState} columnOnOff={columnOnOff} />
      <LeadsheetTable3
        isPivot={state.isPivot}
        columnOnOff={columnOnOff}
        columnState={columnState}
      />
    </Layout>
  )
}

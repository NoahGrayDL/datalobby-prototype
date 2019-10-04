import React, { useState, useEffect, useReducer } from "react"
import { Layout } from "../../components/layout"
import { ViewControl, TableContainer } from "../leadsheet"
import _ from "lodash"

//-----*-----*-----*-----*-----*-----//

export default function Leadsheet() {
  const [currentViewObject, setCurrentViewObject] = useState(
    _.filter(viewList, _.matches({ isDefault: true }))[0]
  )
  const [columns, setColumns] = useState(currentViewObject.displayedColumns)

  const [columnUpdate, setColumnUpdate] = useState(false)

  const handleSelectedView = select => {
    setCurrentViewObject(_.filter(viewList, _.matches({ viewId: select }))[0])
  }

  const columnOnOff = target => {
    const updatedColumn = _.findIndex(columns, { columnId: target })
    columns[updatedColumn].isDisplayed = !columns[updatedColumn].isDisplayed
    setColumnUpdate(!columnUpdate)
  }

  useEffect(() => {
    console.log("---use effect---", currentViewObject, columns)
    setColumns(currentViewObject.displayedColumns)
  }, [currentViewObject, columns])

  return (
    <Layout menuTitle="Leadsheet">
      <ViewControl
        selectedView={currentViewObject.viewId}
        handleSelectedView={handleSelectedView}
        viewList={viewList}
        columns={columns}
        columnOnOff={columnOnOff}
      />
      <TableContainer
        selectedView={currentViewObject.viewTitle}
        columns={columns}
      />
    </Layout>
  )
}

// ! column들은 모두 개별적이다. 동일한 칼럼은 존재하지 않는다.
const viewList = [
  {
    viewId: "default",
    isDefault: true,
    viewTitle: "Default View",
    displayedColumns: [
      {
        columnId: 1,
        columnTitle: "column 1",
        isDisplayed: true
      },
      {
        columnId: 2,
        columnTitle: "column 2",
        isDisplayed: false
      },
      {
        columnId: 3,
        columnTitle: "column 3",
        isDisplayed: true
      }
    ]
  },
  {
    viewId: "second",
    isDefault: false,
    viewTitle: "Second View",
    displayedColumns: [
      {
        columnId: 4,
        columnTitle: "column 4",
        isDisplayed: false
      },
      {
        columnId: 5,
        columnTitle: "column 5",
        isDisplayed: true
      }
    ]
  },
  {
    viewId: "third",
    isDefault: false,
    viewTitle: "Third View",
    displayedColumns: [
      {
        columnId: 6,
        columnTitle: "column 6",
        isDisplayed: true
      },
      {
        columnId: 7,
        columnTitle: "column 7",
        isDisplayed: true
      },
      {
        columnId: 8,
        columnTitle: "column 8",
        isDisplayed: true
      }
    ]
  }
]

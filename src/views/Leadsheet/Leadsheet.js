import React, { useState, useEffect } from "react"
import { Layout } from "../../components/layout"
import { ViewControl, TableContainer } from "../leadsheet"
import _ from "lodash"

//-----*-----*-----*-----*-----*-----//

export default function Leadsheet() {
  const [currentViewObject, setCurrentViewObject] = useState(
    _.filter(viewList, _.matches({ isDefault: true }))[0]
  )
  const [columns, setColumns] = useState(currentViewObject.displayedColumns)
  const [unit, setUnit] = useState(unitList[0])
  const [pivot, setPivot] = useState(pivotList[0])
  const [tableState, setTableState] = useState(
    currentViewObject.sharedTableState
  )

  const handleSelectedView = select => {
    setCurrentViewObject(_.filter(viewList, _.matches({ id: select }))[0])
  }

  const handleSelectedUnit = select => {
    setUnit(_.filter(unitList, _.matches({ id: select }))[0])
  }

  const handleSelectedPivot = select => {
    if (select === 0) {
      const newCurViewObj = _.clone(currentViewObject)
      newCurViewObj.isPivot = false
      setCurrentViewObject(newCurViewObj)
    } else {
      setPivot(_.filter(pivotList, _.matches({ id: select }))[0])
      const newCurViewObj = _.clone(currentViewObject)
      newCurViewObj.isPivot = true
      newCurViewObj.pivotBy = _.find(pivotList, { id: select }).value
      setCurrentViewObject(newCurViewObj)
    }
  }

  const columnOnOff = target => {
    const newCol = _.clone(columns)
    const updatedColumn = _.findIndex(newCol, { columnId: target })
    newCol[updatedColumn].isDisplayed = !newCol[updatedColumn].isDisplayed
    setColumns(newCol)
  }

  useEffect(() => {
    setColumns(currentViewObject.displayedColumns)
    setTableState(currentViewObject.sharedTableState)
  }, [currentViewObject, columns, pivot])

  return (
    <Layout menuTitle="Leadsheet">
      <ViewControl
        selectedView={currentViewObject}
        handleSelectedView={handleSelectedView}
        viewList={viewList}
        unitList={unitList}
        selectedUnit={unit}
        handleSelectedUnit={handleSelectedUnit}
        pivotList={pivotList}
        selectedPivot={pivot}
        handleSelectedPivot={handleSelectedPivot}
        columns={columns}
        columnOnOff={columnOnOff}
      />
      <TableContainer
        selectedView={currentViewObject}
        columns={columns}
        tableState={tableState}
        setTableState={setTableState}
      />
    </Layout>
  )
}

// ! column들은 모두 개별적이다. 동일한 칼럼은 존재하지 않는다.
const viewList = [
  {
    id: "default",
    isDefault: true,
    title: "Default View",
    isPivot: false,
    pivotBy: ["captionGroup1", "captionGroup2", "captionGroup3"],
    sharedTableState: {
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
    },
    displayedColumns: [
      {
        columnId: "captionSet",
        data: "caption",
        columnTitle: "col 1_caption list",
        isDisplayed: true
      },
      {
        columnId: "data1",
        data: "prevTB",
        columnTitle: "col 2_previous TB",
        isDisplayed: true
      },
      {
        columnId: "data2",
        data: "curPeriod",
        columnTitle: "col 3_current Period",
        isDisplayed: false
      }
    ]
  },
  {
    id: "second",
    isDefault: false,
    title: "Second View",
    isPivot: false,
    pivotBy: ["captionGroup1", "captionGroup2", "captionGroup3"],
    sharedTableState: {
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
    },
    displayedColumns: [
      {
        columnId: "captionSet",
        data: "caption",
        columnTitle: "col 4_caption",
        isDisplayed: true
      },
      {
        columnId: "data3",
        data: "prevTB",
        columnTitle: "col 5_previous TB",
        isDisplayed: false
      }
    ]
  },
  {
    id: "third",
    isDefault: false,
    title: "Third View",
    isPivot: false,
    pivotBy: ["captionGroup1", "captionGroup2", "captionGroup3"],
    sharedTableState: {
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
    },
    displayedColumns: [
      {
        columnId: "captionSet",
        data: "caption",
        columnTitle: "col 6_caption",
        isDisplayed: true
      },
      {
        columnId: "data4",
        data: "prevTB",
        columnTitle: "col 7_previous TB",
        isDisplayed: true
      },
      {
        columnId: "data5",
        data: "netChange",
        columnTitle: "col 8_current TB",
        isDisplayed: true
      }
    ]
  }
]

const unitList = [
  {
    id: "thousand",
    title: "Thousand",
    value: 1000
  },
  {
    id: "million",
    title: "Million",
    value: 1000000
  },
  {
    id: "billion",
    title: "Billion",
    value: 1000000000
  }
]

const pivotList = [
  {
    id: 0,
    title: "None",
    value: []
  },
  {
    id: 1,
    title: "Caption Group 1",
    value: ["captionGroup1"]
  },
  {
    id: 2,
    title: "Caption Group 2",
    value: ["captionGroup2"]
  },
  {
    id: 3,
    title: "Caption Group 1,2,3",
    value: ["captionGroup1", "captionGroup2", "captionGroup3"]
  }
]

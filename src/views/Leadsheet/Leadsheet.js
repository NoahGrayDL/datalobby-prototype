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

  const [tableState, setTableState] = useState(
    currentViewObject.sharedTableState
  )

  const handleSelectedView = select => {
    setCurrentViewObject(_.filter(viewList, _.matches({ viewId: select }))[0])
  }

  const columnOnOff = target => {
    const newCol = _.clone(columns)
    const updatedColumn = _.findIndex(newCol, { columnId: target })
    newCol[updatedColumn].isDisplayed = !newCol[updatedColumn].isDisplayed
    setColumns(newCol)
  }

  const pivotOnOff = () => {
    const newCurViewObj = _.clone(currentViewObject)
    newCurViewObj.isPivot = !newCurViewObj.isPivot
    setCurrentViewObject(newCurViewObj)
  }

  useEffect(() => {
    // console.log("---use effect---", currentViewObject, columns)
    setColumns(currentViewObject.displayedColumns)
    setTableState(currentViewObject.sharedTableState)
  }, [currentViewObject, columns])

  return (
    <Layout menuTitle="Leadsheet">
      <ViewControl
        selectedView={currentViewObject}
        handleSelectedView={handleSelectedView}
        viewList={viewList}
        columns={columns}
        columnOnOff={columnOnOff}
        pivotOnOff={pivotOnOff}
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
    viewId: "default",
    isDefault: true,
    viewTitle: "Default View",
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
    viewId: "second",
    isDefault: false,
    viewTitle: "Second View",
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
    viewId: "third",
    isDefault: false,
    viewTitle: "Third View",
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

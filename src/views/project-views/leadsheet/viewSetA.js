import React from "react"

const viewSetA = {
  viewId: "defaultView",
  title: "Default View",
  mainCaptionSet: "captionSetA",
  numAbbr: "thousand",
  columnsOrder: ["captionSetA", "TB", "cumAJE"],
  columnsOnFocus: ["TB", "cumAJE"],
  columnsState: [
    {
      columnId: "captionSetA",
      columnTitle: "Caption Set A",
      isDisplayed: true,
      subColumnType: "DebitAndCredit"
    },
    {
      columnId: "tbEntrySetA",
      columnTitle: "Trial Balance",
      isDisplayed: true,
      subColumnType: "DebitAndCredit"
    },
    {
      columnId: "cumAjeEntrySet",
      columnTitle: "Cumulated Adjusting Entries",
      isDisplayed: true,
      subColumnType: "DebitAndCredit"
    }
  ],
  pivotState: {
    isPivot: true,
    pivotItems: ["captionGroup1", "captionGroup2", "captionGroup3"],
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
    }
  },
  filterState: [],
  sortingState: []
}

export default viewSetA

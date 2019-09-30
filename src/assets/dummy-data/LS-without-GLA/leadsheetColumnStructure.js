import React from "react"
import _ from "lodash"
const CaptionWithoutGLAColumn = [
  {
    Header: "Caption Set",
    foldable: true,
    columns: [
      {
        Header: "Caption Group 1",
        accessor: "captionGroup1",
        minWidth: 20,
        style: { overflow: "visible" }
      },
      {
        Header: "Caption Group 2",
        accessor: "captionGroup2",
        aggregate: vals => vals.length,
        Aggregated: row => {
          return <span></span>
        },
        minWidth: 20,
        style: { overflow: "visible" }
      },
      {
        Header: "Caption Group 3",
        accessor: "captionGroup3",
        aggregate: vals => vals.length,
        Aggregated: row => {
          return <span></span>
        },
        minWidth: 20,
        style: { overflow: "visible" }
      },
      {
        Header: "Caption",
        accessor: "caption",
        aggregate: vals => vals.length,
        Aggregated: row => {
          return <span></span>
        }
      }
    ]
  }
]

const TBColumn = [
  {
    Header: "Trial Balance",
    columns: [
      {
        Header: "Caption Group 1",
        accessor: "captionGroup1",
        show: false,
        style: { flex: "none", width: 0, display: "none" },
        headerStyle: { flex: "none", width: 0, display: "none" }
      },
      {
        Header: "Caption Group 2",
        accessor: "captionGroup2",
        show: false,
        style: { flex: "none", width: 0, display: "none" },
        headerStyle: { flex: "none", width: 0, display: "none" },
        aggregate: vals => vals.length,
        Aggregated: row => {
          return <span>total: {row.value}</span>
        }
      },
      {
        Header: "Caption Group 3",
        accessor: "captionGroup3",
        show: false,
        style: { flex: "none", width: 0, display: "none" },
        headerStyle: { flex: "none", width: 0, display: "none" },
        aggregate: vals => vals.length,
        Aggregated: row => {
          return <span>total: {row.value}</span>
        }
      },
      {
        Header: "Caption",
        accessor: "caption",
        show: false,
        style: { flex: "none", width: 0, display: "none" },
        aggregate: vals => _.sum(vals)
      },
      {
        Header: "Debit",
        accessor: "debit",
        aggregate: vals => _.sum(vals),
        Aggregated: row => {
          return (
            <span>
              ({row.row._pivotVal} Debit) {row.value}
            </span>
          )
        }
      },
      {
        Header: "Credit",
        accessor: "credit",
        aggregate: vals => _.sum(vals),
        Aggregated: row => {
          return (
            <span>
              {" "}
              ({row.row._pivotVal} Credit) {row.value}
            </span>
          )
        }
      }
    ]
  }
]

export { CaptionWithoutGLAColumn, TBColumn }

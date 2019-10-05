import React from "react"
import _ from "lodash"

const FormattedCell = {
  Cell: row => {
    const number = row.value.toLocaleString()

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          color:
            row.original.captionGroup1 === "자산"
              ? "coral"
              : row.original.captionGroup1 === "부채"
              ? "orange"
              : row.original.captionGroup1 === "자본"
              ? "Green"
              : null
        }}
      >
        {number}
      </div>
    )
  }
}

const CaptionOnlyColumn = [
  {
    Header: "Caption Set A",
    accessor: "caption",
    headerStyle: { height: 56 },
    minWidth: 200
  }
]

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
        },
        Cell: row => (
          <div
            style={{
              width: "100%",
              height: "100%",
              color:
                row.original.captionGroup1 === "자산"
                  ? "coral"
                  : row.original.captionGroup1 === "부채"
                  ? "orange"
                  : row.original.captionGroup1 === "자본"
                  ? "Green"
                  : null
            }}
          >
            {row.value}
          </div>
        ),
        minWidth: 200
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
        headerStyle: { flex: "none", width: 0, display: "none" },

        aggregate: vals => _.sum(vals)
      },
      {
        Header: "Debit",
        accessor: "debit",
        aggregate: vals => _.sum(vals),
        Aggregated: row => {
          return (
            <span>
              ({row.row._pivotVal}) {row.value.toLocaleString()}
            </span>
          )
        },
        Cell: FormattedCell.Cell
      },
      {
        Header: "Credit",
        accessor: "credit",
        aggregate: vals => _.sum(vals),
        Aggregated: row => {
          return (
            <span>
              ({row.row._pivotVal}) {row.value.toLocaleString()}
            </span>
          )
        },
        Cell: FormattedCell.Cell
      }
    ]
  }
]

const curPeriodColumn = [
  {
    Header: "Current Period",
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
              ({row.row._pivotVal}) {row.value}
            </span>
          )
        },
        Cell: FormattedCell.Cell
      },
      {
        Header: "Credit",
        accessor: "credit",
        aggregate: vals => _.sum(vals),
        Aggregated: row => {
          return (
            <span>
              {" "}
              ({row.row._pivotVal}) {row.value}
            </span>
          )
        },
        Cell: FormattedCell.Cell
      }
    ]
  }
]

const netChangeColumn = [
  {
    Header: "Net Change",
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
              ({row.row._pivotVal}) {row.value}
            </span>
          )
        },
        Cell: FormattedCell.Cell
      },
      {
        Header: "Credit",
        accessor: "credit",
        aggregate: vals => _.sum(vals),
        Aggregated: row => {
          return (
            <span>
              {" "}
              ({row.row._pivotVal}) {row.value}
            </span>
          )
        },
        Cell: FormattedCell.Cell
      }
    ]
  }
]

export {
  CaptionOnlyColumn,
  CaptionWithoutGLAColumn,
  TBColumn,
  curPeriodColumn,
  netChangeColumn
}

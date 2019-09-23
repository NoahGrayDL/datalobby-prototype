import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import DUMMY from "./dummy.json"
//-----*-----*-----*-----*-----*-----//

const LeadsheetTable = () => {
  return (
    <div>
      <ReactTable
        data={data}
        columns={columnStructure}
        defaultPageSize={20}
        style={{
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
      />
    </div>
  )
}

const data = DUMMY

const columnStructure = [
  {
    Header: "Caption",
    columns: [
      {
        Header: "",
        accessor: "caption"
      }
    ]
  },
  {
    Header: "General Ledger Account",
    columns: [
      {
        Header: "Code",
        accessor: "accountCode"
      },
      {
        Header: "Account Title",
        id: "accountTitle",
        accessor: d => d.accountTitle
      }
    ]
  },
  {
    Header: "Trial Balance",
    columns: [
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Credit",
        accessor: "credit"
      }
    ]
  },
  {
    Header: "Cumulated AJE",
    columns: [
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Credit",
        accessor: "credit"
      }
    ]
  },
  {
    Header: "Adjusted TB",
    columns: [
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Credit",
        accessor: "credit"
      }
    ]
  },
  {
    Header: "Subsidiary A",
    columns: [
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Credit",
        accessor: "credit"
      }
    ]
  },
  {
    Header: "Subsidiary B",
    columns: [
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Credit",
        accessor: "credit"
      }
    ]
  },
  {
    Header: "Consolidated TB",
    columns: [
      {
        Header: "Debit",
        accessor: "debit"
      },
      {
        Header: "Credit",
        accessor: "credit"
      }
    ]
  }
]

export default LeadsheetTable

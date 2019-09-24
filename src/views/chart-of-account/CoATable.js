import React from "react"
import { BasicTable } from "../../components/tables"
import DUMMY from "./dummy.json"

//-----*-----*-----*-----*-----*-----//

const CoATable = () => {
  return <BasicTable data={DUMMY} columnStructure={columnStructure} />
}

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

export default CoATable

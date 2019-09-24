import React from "react"
import { BasicTable, FoldableTable } from "../../components/tables"
import styled from "styled-components"
import DUMMY from "./dummy.json"
import CAPTIONS from "./captions.json"
import TB from "./TB.json"
//-----*-----*-----*-----*-----*-----//

const LeadsheetTable = () => {
  return (
    <StyledLeadsheetContainer>
      {/* <FoldableTable data={CAPTIONS} columnStructure={captionColumn} /> */}
      <FoldableTable data={CAPTIONS} columnStructure={captionColumn} />
      <div className="partition" />
      <BasicTable data={TB} columnStructure={tbColumn} />
      <div className="partition" />
      <BasicTable data={DUMMY} columnStructure={columnStructure} />
    </StyledLeadsheetContainer>
  )
}

const StyledLeadsheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  & .partition {
    width: 8px;
    height: 100%;
    flex-shrink: 0;
  }
`

const captionColumn = [
  {
    Header: "Caption",
    foldable: true,
    columns: [
      {
        Header: "",
        accessor: "caption"
      }
    ]
  },
  {
    Header: "General Ledger Account",
    foldable: true,
    columns: [
      {
        Header: "Code",
        accessor: "accountCode"
      },
      {
        Header: "Account Title",
        accessor: "accountTitle"
      }
    ]
  }
]

const tbColumn = [
  {
    Header: "Trial Balance",
    columns: [
      {
        Header: "Debit",
        accessor: "tbDebit"
      },
      {
        Header: "Credit",
        accessor: "tbCredit"
      }
    ]
  }
]

const columnStructure = [
  {
    Header: "Cumulated AJE",
    columns: [
      {
        Header: "Debit",
        accessor: "ajeDebit"
      },
      {
        Header: "Credit",
        accessor: "ajeCredit"
      }
    ]
  },
  {
    Header: "Adjusted TB",
    columns: [
      {
        Header: "Debit",
        accessor: "ajtbDebit"
      },
      {
        Header: "Credit",
        accessor: "ajtbCredit"
      }
    ]
  },
  {
    Header: "Subsidiary A",
    columns: [
      {
        Header: "Debit",
        accessor: "subADebit"
      },
      {
        Header: "Credit",
        accessor: "subACredit"
      }
    ]
  },
  {
    Header: "Subsidiary B",
    columns: [
      {
        Header: "Debit",
        accessor: "subBDebit"
      },
      {
        Header: "Credit",
        accessor: "subBCredit"
      }
    ]
  },
  {
    Header: "Combined TB",
    columns: [
      {
        Header: "Debit",
        accessor: "comtbDebit"
      },
      {
        Header: "Credit",
        accessor: "comtbCredit"
      }
    ]
  },
  {
    Header: "Cumulative Eliminating Entries",
    columns: [
      {
        Header: "Debit",
        accessor: "cumElDebit"
      },
      {
        Header: "Credit",
        accessor: "cumElCredit"
      }
    ]
  },
  {
    Header: "Consolidated TB",
    columns: [
      {
        Header: "Debit",
        accessor: "contbDebit"
      },
      {
        Header: "Credit",
        accessor: "contbCredit"
      }
    ]
  },
  {
    Header: "Income Statement",
    columns: [
      {
        Header: "Debit",
        accessor: "iSDebit"
      },
      {
        Header: "Credit",
        accessor: "iSCredit"
      }
    ]
  },
  {
    Header: "Balance Sheet",
    columns: [
      {
        Header: "Debit",
        accessor: "bsDebit"
      },
      {
        Header: "Credit",
        accessor: "bsCredit"
      }
    ]
  }
]

export default LeadsheetTable

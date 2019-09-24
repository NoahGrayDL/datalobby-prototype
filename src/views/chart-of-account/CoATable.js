import React from "react"
import {
  BasicTable,
  FoldableTable,
  SearchableTable
} from "../../components/tables"
import DUMMY from "./dummy-data/dummy.json"
import generalLedgerAccounts from "./dummy-data/generalLedgerAccounts.json"
import captionSet1 from "./dummy-data/captionSet1.json"
import captionSet2 from "./dummy-data/captionSet2.json"
import styled from "styled-components"

//-----*-----*-----*-----*-----*-----//

const CoATable = () => {
  return (
    <StyledCoAContainer>
      <SearchableTable
        data={generalLedgerAccounts}
        columnStructure={generalLedgerAccountsColumn}
      />
      <SearchableTable data={captionSet1} columnStructure={captionSet1Column} />
      <SearchableTable data={captionSet2} columnStructure={captionSet2Column} />
    </StyledCoAContainer>
  )
}

const generalLedgerAccountsColumn = [
  {
    Header: "General Ledger Account",
    columns: [
      {
        Header: "Title",
        accessor: "accountTitle"
      },
      {
        Header: "Code",
        accessor: "accountCode"
      }
    ]
  }
]

const captionSet1Column = [
  {
    Header: "Caption Set for SEC",
    columns: [
      {
        Header: "Captions",
        accessor: "caption"
      },
      {
        Header: "Description",
        accessor: "description"
      }
    ]
  }
]

const captionSet2Column = [
  {
    Header: "Caption Set for non GAAP",
    columns: [
      {
        Header: "Captions",
        accessor: "caption"
      },
      {
        Header: "Description",
        accessor: "description"
      }
    ]
  }
]

const StyledCoAContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
`

export default CoATable

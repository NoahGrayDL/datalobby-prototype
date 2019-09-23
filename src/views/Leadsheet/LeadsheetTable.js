import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"

//-----*-----*-----*-----*-----*-----//

const data = [
  {
    firstName: "b",
    lastName: "a",
    age: 324,
    visits: 12,
    progress: 123
  },
  {
    firstName: "b",
    lastName: "a",
    age: 324,
    visits: 12,
    progress: 123
  },
  {
    firstName: "b",
    lastName: "a",
    age: 324,
    visits: 12,
    progress: 123
  }
]

const LeadsheetTable = () => {
  return (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Caption",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName"
              }
            ]
          },
          {
            Header: "General Ledger Account",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age"
              }
            ]
          }
        ]}
        defaultPageSize={20}
        style={{
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
      />
    </div>
  )
}

export default LeadsheetTable

import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"

//-----*-----*-----*-----*-----*-----//

const BasicTable = props => {
  const { data, columnStructure } = props
  return (
    <div style={{ marginRight: 8 }}>
      <ReactTable
        data={data}
        columns={columnStructure}
        // defaultPageSize={20}
        // style={{
        //   height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
        // }}
        className="-striped -highlight"
      />
    </div>
  )
}

export default BasicTable

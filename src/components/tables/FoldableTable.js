import React from "react"
import ReactTable from "react-table"
import FoldableTableHOC from "react-table/lib/hoc/foldableTable"

import "react-table/react-table.css"

//-----*-----*-----*-----*-----*-----//

const FoldableReactTable = FoldableTableHOC(ReactTable)

const FoldableTable = props => {
  const { data, columnStructure } = props
  return (
    <div>
      <FoldableReactTable
        data={data}
        columns={columnStructure}
      ></FoldableReactTable>
    </div>
  )
}

export default FoldableTable

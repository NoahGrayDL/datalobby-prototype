import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import _ from "lodash"

//-----*-----*-----*-----*-----*-----//

const PivotAndAggregateTable = props => {
  const { data, columnStructure, pivotTargets, length } = props
  return (
    <div style={{ marginRight: 8 }}>
      <ReactTable
        data={data}
        columns={columnStructure}
        defaultPageSize={length}
        showPagination={false}
        pivotBy={pivotTargets}
        className="-striped -highlight"
      />
    </div>
  )
}

export default PivotAndAggregateTable

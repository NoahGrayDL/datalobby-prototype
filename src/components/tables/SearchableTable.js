import React, { useState } from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"

const SearchableTable = props => {
  const { data, columnStructure, length } = props
  const [filter, setFilter] = useState({ filtered: [] })

  return (
    <div style={{ marginRight: 8 }}>
      <ReactTable
        data={data}
        columns={columnStructure}
        defaultPageSize={length}
        className="-striped -highlight"
        filterable
        showPagination={false}
        filtered={filter.filtered}
        onFilteredChange={filtered => setFilter({ filtered })}
      />
    </div>
  )
}

export default SearchableTable

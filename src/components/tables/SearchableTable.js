import React, { useState } from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"

const SearchableTable = props => {
  const { data, columnStructure } = props
  const [filter, setFilter] = useState({ filtered: [] })

  return (
    <div style={{ marginRight: 8 }}>
      <ReactTable
        data={data}
        columns={columnStructure}
        className="-striped -highlight"
        filterable
        filtered={filter.filtered}
        onFilteredChange={filtered => setFilter({ filtered })}
      />
    </div>
  )
}

export default SearchableTable

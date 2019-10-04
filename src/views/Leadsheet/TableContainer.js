import React from "react"

export default function TableContainer(props) {
  const { selectedView, columns } = props

  return (
    <div>
      <div>Table Container | view: {selectedView}</div>
      <div>
        {columns.map(column => {
          const { isDisplayed } = column
          return isDisplayed && <TempTable data={column} />
        })}
      </div>
    </div>
  )
}

const TempTable = props => {
  const { data } = props
  const { columnTitle } = data
  return <div>{columnTitle}</div>
}

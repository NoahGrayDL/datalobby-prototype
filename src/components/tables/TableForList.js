import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import styled from "styled-components"

export default function TableForList(props) {
  const { data, columns } = props

  console.log("data in table: ", data)

  return (
    <StyledContainer>
      <ReactTable
        data={data}
        columns={columns ? columns : defaultColumns}
        minRows={data ? data.length : undefined}
        showPagination={false}
        className="-striped -highlight"
      ></ReactTable>
    </StyledContainer>
  )
}

const defaultColumns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Entity",
    accessor: "entity"
  },
  {
    Header: "Type",
    accessor: "type"
  }
]

const StyledContainer = styled.div`
  & .ReactTable {
    border: none;
  }
  & .ReactTable .rt-thead.-header {
    box-shadow: none;
    padding: 0 8px;
  }
  & .ReactTable .rt-tr .rt-th {
    text-align: left;
    font-size: 0.8rem;
    border-right: none;
  }
  & .ReactTable .rt-tbody .rt-tr-group {
    border-bottom: none;
    transition: 0.4s;
    box-shadow: 1px 1px 5px 0px #ccc;
    margin: 8px;
    border-radius: 4px;
    &:hover {
      background-color: #ccc;
    }
  }
  & .ReactTable .rt-tbody .rt-td {
    display: flex;
    align-items: center;
    border-right: none;
  }
`

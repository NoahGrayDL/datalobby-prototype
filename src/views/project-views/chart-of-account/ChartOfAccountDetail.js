import React, { useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import useAPI from "../../../utils/useAPI"
import styled from "styled-components"
import ReactTable from "react-table"

export default function ChartOfAccountDetail({ match }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const coaId = match.params.id
  const existingData = useAPI(`http://localhost:3000/chart-of-account/${coaId}`)

  useEffect(() => {
    setLoading(true)
    setData(existingData)
    setLoading(false)
  }, [existingData])

  if (loading) {
    return <div>loading...</div>
  }
  if (!data) {
    return null
  }

  return (
    <PageContainer menuTitle="Chart of Account Detail">
      {data && (
        <StyledContainer>
          <div>{data.name}</div>
          <div className="table-container">
            <div className="GLA-container">
              {data.glaList ? (
                <GLAList data={data.glaList} className="gla-list" />
              ) : (
                <EmptyGLA data={data} />
              )}
            </div>
            <>
              {data.captionSetList ? (
                <CaptionSetContainer data={data} />
              ) : (
                <div>Add a new caption set</div>
              )}
            </>
          </div>
        </StyledContainer>
      )}
    </PageContainer>
  )
}

const EmptyGLA = () => {
  return (
    <div>
      This CoA has no General Ledger Account
      <CloudUploadIcon fontSize="large" />
    </div>
  )
}

const GLAList = ({ data }) => {
  console.log(data, data.length)
  return (
    <StyledGLAList>
      <div className="column-header">GLA Total: {data.length}</div>
      <ReactTable
        data={data}
        columns={GLAcolumns}
        // minRows={data.length}
        showPagination={false}
        // loading={true}
        defaultPageSize={data.length}
        className="-striped -highlight"
      />
    </StyledGLAList>
  )
}

const CaptionSetContainer = ({ data }) => {
  return (
    <div className="caption-set-container">
      {data.captionSetList.map(captionSet => {
        return <CaptionSet data={captionSet} />
      })}
    </div>
  )
}

const CaptionSet = ({ data }) => {
  return <div className="caption-set">{data.title}</div>
}

const GLAcolumns = [
  {
    Header: "Code",
    accessor: "accountCode"
  },
  {
    Header: "Title",
    accessor: "accountTitle",
    minWidth: 200
  },
  {
    Header: "Class",
    accessor: "accountClass"
  }
]
const StyledContainer = styled.div`
  & .table-container {
    display: flex;
    flex-direction: row;

    & .caption-set-container {
      min-width: 18rem;
      border: 1px solid gray;
      display: flex;
      flex-direction: row;
      & .caption-set {
        border: 1px solid pink;
        margin-right: 1rem;
      }
    }
  }
`

const StyledGLAList = styled.div`
  min-width: 18rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
`

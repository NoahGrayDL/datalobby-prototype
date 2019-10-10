import React, { useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import useAPI from "../../../utils/useAPI"
import styled from "styled-components"
import ReactTable from "react-table"
import captionSetOriginData from "../../../utils/pcb-data/dist/captionSet.json"

const captionSetData = () => {
  const origins = captionSetOriginData.captionList
  const captionSetTitle = captionSetOriginData.captionSetTitle
  const captionSet = { captionSetTitle: captionSetTitle, captionList: [] }
  origins.map(origin => {
    const captionTitle = origin.captionTitle
    return origin.accountCodeList.map((accountCode, i) => {
      return captionSet.captionList.push({
        accountCode: accountCode,
        captionTitle: captionTitle
      })
    })
  })
  return captionSet
}

export default function ChartOfAccountDetail({ match }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const coaId = match.params.id
  const existingData = useAPI(`http://localhost:3000/chart-of-account/${coaId}`)
  const captionSetA = captionSetData()
  const [tableState, setTableState] = useState({ sorted: [] })

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
  console.log("table State-sorted:", tableState.sorted)

  return (
    <PageContainer menuTitle="Chart of Account Detail">
      {data && (
        <StyledContainer>
          <div className="menu-header">{data.name}</div>
          <div className="table-container">
            <div className="GLA-container">
              {data.glaList ? (
                <GLAList
                  data={data.glaList}
                  className="gla-list"
                  tableState={tableState}
                  setTableState={setTableState}
                />
              ) : (
                <EmptyGLA data={data} />
              )}
            </div>
            <>
              {data.captionSetList ? (
                <CaptionSet
                  data={captionSetA}
                  tableState={tableState}
                  setTableState={setTableState}
                />
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

const GLAList = props => {
  const { tableState, setTableState, data } = props
  // console.log(data, data.length)
  return (
    <StyledGLAList>
      <div className="column-header">GLA Total: {data.length}</div>
      <ReactTable
        data={data}
        columns={GLAcolumns}
        showPagination={false}
        defaultPageSize={data.length}
        className="-striped -highlight"
        sorted={tableState.sorted}
        onSortedChange={sorted => setTableState({ sorted })}
      />
    </StyledGLAList>
  )
}

// const CaptionSetContainer = ({ data }) => {
//   return (
//     <div className="caption-set-container">
//       {data.captionSetList.map(captionSet => {
//         return <CaptionSet data={captionSet} />
//       })}
//     </div>
//   )
// }

const CaptionSet = props => {
  const { tableState, setTableState, data } = props

  // console.log("caption set data:", data)
  return (
    <div className="caption-set">
      <div className="column-header">{data.captionSetTitle}</div>
      <ReactTable
        data={data.captionList}
        columns={captionColumns}
        className="-striped -highlight"
        defaultPageSize={data.length}
        showPagination={false}
        sorted={tableState.sorted}
        onSortedChange={sorted => setTableState({ sorted })}
      />
    </div>
  )
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

const captionColumns = [
  {
    Header: "GLA code",
    accessor: "accountCode"
  },
  {
    Header: "Captions",
    accessor: "captionTitle"
  }
]

const StyledContainer = styled.div`
  & .menu-header {
    height: 2rem;
    border-bottom: 1px solid gray;
  }
  & .table-container {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 8rem);
    overflow: scroll;
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
    & .column-header {
      height: 2rem;
      overflow: hidden;
    }
  }
`

const StyledGLAList = styled.div`
  min-width: 18rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
`

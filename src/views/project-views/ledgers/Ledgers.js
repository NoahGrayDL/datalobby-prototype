import React, { useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import ReactTable from "react-table"
import "react-table/react-table.css"
import dataOrigin from "./captionList.json"

const accountCodeList = () => {
  const origins = dataOrigin.captionList
  // const captionTitle = dataOrigin.captionSetTitle
  // const caption = { captionTitle: captionTitle, captionList: [] }
  const accountCodeList = []
  origins.map(origin => {
    const captionTitle = origin.captionTitle
    return origin.accountCodeList.map((accountCode, i) => {
      return accountCodeList.push({
        accountCode: accountCode,
        captionTitle: captionTitle
      })
    })
  })
  return accountCodeList
}

const makeExpandStructure = () => {
  let x = new Object()
  let i
  for (i = 1; i === 1072; i++) {
    const key = i.toString()
    x.key = {}
  }
  return x
}

export default function Ledgers() {
  const [data, setData] = useState([])
  const [isPivot, setIsPivot] = useState(false)
  const [expand, setExpand] = useState(expandStructure)

  useEffect(() => {
    setData(accountCodeList)
  }, [])
  console.log(data.length)

  return (
    <PageContainer menuTitle="Ledgers">
      <div
        onClick={() => setIsPivot(!isPivot)}
        style={{ border: "1px solid gray", padding: 4, width: 100 }}
      >
        {isPivot ? "Expand" : "Collapse"}
      </div>
      <ReactTable
        data={data}
        columns={columns2}
        showPagination={false}
        minRows={1072}
        defaultPageSize={1072}
        pivotBy={isPivot ? ["captionTitle"] : []}
        expanded={expand}
        onExpandedChange={expanded => setExpand({ expanded })}
      />
      {/* <ReactTable
        data={data.captionList}
        columns={columns}
        showPagination={false}
        minRows={data.captionList.length}
      /> */}
    </PageContainer>
  )
}

// const columns = [{ Header: "Caption ID", accessor: "captionId" }]
const columns2 = [
  { Header: "Caption Title", accessor: "captionTitle" },
  { Heaader: "Code", accessor: "accountCode" }
]

const expandStructure = { "0": {}, "1": {} }

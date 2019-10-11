import React, { useEffect, useState, Suspense, lazy } from "react"

import { PageContainer } from "../../../components"
// import ReactTable from "react-table"
import "react-table/react-table.css"
import dataOrigin from "./captionList.json"
import AmountEntry from "./AmountEntry"
import entrySetData from "./entrySetCur.json"

import _ from "lodash"

import disablePaginationHOC from "./disablePaginationHOC"
// BAD realization
import slowVirtualizedTableHOC from "./slowVirtualizedTableHOC"
// GOOD realization
import virtualizedTableHOC from "./virtualizedTableHOC"
import { flexbox } from "@material-ui/system"

const ReactTable = lazy(() => import("react-table"))

const SlowVirtualizedTable = slowVirtualizedTableHOC(
  disablePaginationHOC(ReactTable)
)
const VirtualizedTable = virtualizedTableHOC(disablePaginationHOC(ReactTable))

const entryMap = _.keyBy(entrySetData, entry => entry.account.accountCode)
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
        captionTitle: captionTitle,
        debit: ((entryMap[accountCode] || {}).debit || {}).amount || 0,
        credit: ((entryMap[accountCode] || {}).credit || {}).amount || 0
      })
    })
  })
  return accountCodeList
}

const makeExpandStructure = dataOrigin.captionList.map((e, i) => ({ [i]: {} }))

export default function Ledgers() {
  const [data, setData] = useState(accountCodeList)
  const [isPivot, setIsPivot] = useState(true)
  const [state, setState] = useState({ expanded: {} })
  const [expandedAll, setExpandedAll] = useState(makeExpandStructure)

  useEffect(() => {
    // setData(accountCodeList)
    setState(isPivot ? { expanded: {} } : { expanded: expandedAll })
  }, [isPivot])
  // console.log(state.expanded)

  return (
    <PageContainer menuTitle="Ledgers">
      <div
        onClick={() => setIsPivot(!isPivot)}
        style={{ border: "1px solid gray", padding: 4, width: 100 }}
      >
        {isPivot ? "Expand" : "Collapse"}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactTable
          data={data}
          columns={columns2}
          showPagination={false}
          minRows={1072}
          defaultPageSize={1072}
          // pivotBy={isPivot ? ["captionTitle"] : []}
          pivotBy={["captionTitle"]}
          expanded={state.expanded}
          onExpandedChange={expanded => setState({ expanded })}
        />
      </Suspense>
      {/* <ReactTable
        data={data.captionList}
        columns={columns}
        showPagination={false}
        minRows={data.captionList.length}
      /> */}
    </PageContainer>
  )
}
const formatFcn = new Intl.NumberFormat("en-US", {
  style: "decimal",
  // currency: 'USD',
  maximumFractionDigits: 0
})
// const columns = [{ Header: "Caption ID", accessor: "captionId" }]
const columns2 = [
  { Header: "Caption Title", accessor: "captionTitle" },
  { Header: "Code", accessor: "accountCode" },

  {
    Header: "Balance",
    accessor: "balance",
    Cell: value => {
      const { debit, credit } = value.original
      return (
        <div style={{ display: "flex", justifyContent: "row" }}>
          <div style={{ width: 100, color: "coral" }}>{debit}</div>
          <div style={{ width: 100, color: "blue" }}>{credit}</div>
        </div>
      )
    }

    // Cell: value => (
    //   <AmountEntry
    //     isMerged={false}
    //     isFormatted={false}
    //     formatFcn={formatFcn}
    //     debit={value.original.debit}
    //     credit={value.original.credit}
    //     unit={1000}
    //   />
    // )
  }
]

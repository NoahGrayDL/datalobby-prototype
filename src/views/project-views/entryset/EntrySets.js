import React, { useState } from "react"
import { PageContainer } from "../../../components"
import EntrySet from "./EntrySet"
import entrySetData from "./entryset.json"
import glaData from "./gla.json"
import { captionSetTitle, captionList } from "./captionSet.json"
import styled from "styled-components"
import _ from "lodash"
import merge from "merge-anything"

export default function EntrySets() {
  const [state, setState] = useState({
    captionOn: true,
    expandAll: true,
    titleOn: true,
    valueOn: true,
    valueFormat: {
      currency: "USD",
      unit: 1000,
      displayBalance: false
    }
  })

  const handleCaptionOn = () =>
    setState({ ...state, captionOn: !state.captionOn })

  const handleExpandAll = () =>
    setState({ ...state, expandAll: !state.expandAll })

  const handleTitleOn = () => setState({ ...state, titleOn: !state.titleOn })

  const handleValueOn = () => setState({ ...state, valueOn: !state.valueOn })

  return (
    <PageContainer menuTitle="EntrySet Test">
      <StyledContainer>
        <div className="button-container">
          <Button
            targetState={state.captionOn}
            handle={handleCaptionOn}
            title="Caption"
          />
          <Button
            targetState={state.expandAll}
            handle={handleExpandAll}
            title="Expand All"
          />
          <Button
            targetState={state.titleOn}
            handle={handleTitleOn}
            title="Title"
          />
          <Button
            targetState={state.valueOn}
            handle={handleValueOn}
            title="Value"
          />
        </div>
        <EntrySet
          globalState={state}
          dataForEntrySet={dataForEntrySet}
          state={state}
        />
      </StyledContainer>
    </PageContainer>
  )
}

const glaMap = _.keyBy(glaData, "accountCode")
const entryMap = _.keyBy(entrySetData, entry => entry.account.accountCode)
const mergedGlaEntry = _.merge(glaMap, entryMap)

const mapCaption = () => {
  const finalData = []
  captionList.map(caption => {
    const captionTitle = caption.captionTitle
    const captionId = caption.captionId
    return caption.accountCodeList.map(account => {
      const accountsData = mergedGlaEntry[account]
      return finalData.push({
        captionId: captionId,
        captionTitle: captionTitle,
        accountData: accountsData
      })
    })
  })
  return finalData
}

const data = _.groupBy(mapCaption(), "captionId")
const mapData = () => {
  const result = []
  captionList.map(caption => {
    result.push({
      captionTitle: caption.captionTitle,
      captionId: caption.captionId,
      accountList: data[caption.captionId]
    })
  })
  return result
}
const dataForEntrySet = mapData()
console.log("dataForEntrySet", dataForEntrySet)

/**
 * Required data structure:
 * [
 *  {
 *    captionTitle: "",
 *    accountList: [
 *      {
 *        accountCode: "",
 *        accountTitle: "",
 *        debit: "",
 *        credit: "",
 *        balance: ""
 *       }
 *    ]
 *  }
 * ]
 */

const Button = ({ targetState, title, handle }) => {
  return (
    <div
      className={targetState ? "button button-on" : "button button-off"}
      onClick={handle}
    >
      {title}
    </div>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .button-container {
    width: 100%;
    display: flex;
    & .button {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 16px;
      margin-right: 8px;
      &.button-on {
        background-color: #758fff;
      }
      &.button-off {
        background-color: #ffffff;
      }
    }
  }
`

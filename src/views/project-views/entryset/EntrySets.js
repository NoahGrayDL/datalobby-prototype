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
        <div className="filter-bar FR AC">
          <OnOffButton
            targetState={state.captionOn}
            handle={handleCaptionOn}
            title="Caption"
          />
          <OnOffButton
            targetState={state.expandAll}
            handle={handleExpandAll}
            title="Expand All"
          />
          <OnOffButton
            targetState={state.titleOn}
            handle={handleTitleOn}
            title="Title"
          />
          <OnOffButton
            targetState={state.valueOn}
            handle={handleValueOn}
            title="Value"
          />
          {state.valueOn && (
            <div className="format-control-container FR AC">
              <div className="label FR AC">Format:</div>
              <div className="format-control FR AC">Currency</div>
              <div className="format-control FR AC">Unit</div>
              <div className="format-control FR AC">Debit</div>
              <div className="format-control FR AC">Credit</div>
              <div className="format-control FR AC">Balance</div>
            </div>
          )}
        </div>
        <div className="entryset-container FR">
          <EntrySet
            globalState={state}
            dataForEntrySet={dataForEntrySet}
            state={state}
          />
          <EntrySet
            globalState={state}
            dataForEntrySet={dataForEntrySet}
            state={state}
          />
        </div>
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

const OnOffButton = ({ targetState, title, handle }) => {
  return (
    <div
      className={targetState ? "button FR button-on" : "button FR button-off"}
      onClick={handle}
    >
      <div className="FR AC">{title}</div>
    </div>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .filter-bar {
    width: 100%;
    height: var(--base-unit);
    background-color: var(--secondary-main);
    display: flex;
    & .button {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 16px;
      margin-right: 8px;
      height: calc(var(--base-unit) / 1.5);
      &.button-on {
        background-color: #758fff;
      }
      &.button-off {
        background-color: #ffffff;
      }
    }
    .format-control-container {
      .label {
        font-size: 14px;
        font-weight: 400;
        margin-right: 1rem;
      }
      .format-control {
        margin-right: 1rem;
        font-size: 14px;
      }
    }
  }
`

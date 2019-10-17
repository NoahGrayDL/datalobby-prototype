import React, { useState } from "react"
import styled from "styled-components"
import AccountsInCaption from "./AccountsInCaption"

const Caption = props => {
  const { state, caption } = props
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="caption">
      <div
        className={state.captionOn ? "caption-header" : "caption-header off"}
        onClick={handleCollapse}
      >
        <div className="caption-title">
          {caption.captionTitle} ({caption.accountList.length})
        </div>
        <div className="caption-total"></div>
      </div>
      <div className={isCollapsed ? "collpased" : "expanded"}>
        <AccountsInCaption state={state} caption={caption} />
      </div>
    </div>
  )
}

const EntrySet = React.memo(props => {
  const { dataForEntrySet, state } = props
  return (
    <StyledEntrySet>
      {dataForEntrySet.map(caption => {
        return <Caption state={state} caption={caption} />
      })}
    </StyledEntrySet>
  )
})

const StyledEntrySet = styled.div`
  .caption {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 1rem;
    .caption-header {
      display: flex;
      &:hover {
        background-color: #ccc;
      }
    }
    .caption-header.off {
      display: none;
    }
    .collpased {
      display: none;
    }
  }
  .accounts-container.off {
    display: none;
  }
  .accounts-container {
    padding-left: 1rem;
    .account-container {
      display: flex;
      font-weight: 300;
      font-size: 12px;
      &:hover {
        background-color: #ccc;
      }
      .account-item {
        margin-right: 1rem;
        height: 1rem;
        overflow: hidden;
      }
      .account-code {
        width: 4rem;
      }
      .account-title.off {
        display: none;
      }
      .account-title {
        width: 10rem;
      }
      .account-value.off {
        display: none;
      }
      .account-value {
        display: flex;
        .account-credit {
          width: 5rem;
        }
        .account-debit {
          width: 5rem;
        }
        .account-amount {
          min-width: 10rem;
        }
      }
    }
  }
`

export default EntrySet

import React from "react"
import styled from "styled-components"

//-----*-----*-----*-----*-----*-----//

export default function PageContainer(props) {
  const { menuTitle, children } = props
  return (
    <StyledPageContainer className="page-container">
      <div className="menu-title-area FR AC">
        <h2>{menuTitle}</h2>
      </div>
      <div className="page-contents">{children}</div>
    </StyledPageContainer>
  )
}

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--base-unit));
  & .menu-title-area {
    height: 48px;
    font-weight: var(--bold);
    color: var(--primary-dark);
    border-bottom: 1px solid var(--secondary-main-deep);
    padding: 0 var(--spacing-xl);
  }
  & .page-contents {
    height: calc(100vh - var(--base-unit) * 2);
    padding: 0 var(--spacing-xl);
    overflow: scroll;
  }
`

import React from "react"
import styled from "styled-components"

//-----*-----*-----*-----*-----*-----//

export default function PageContainer(props) {
  const { menuTitle, children } = props
  return (
    <StyledPageContainer>
      <div className="menu-title-area">{menuTitle}</div> {children}
    </StyledPageContainer>
  )
}

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .menu-title-area {
    font-weight: bold;
    /* have to turn to 'primary color' */
    color: #758fff;
  }
`

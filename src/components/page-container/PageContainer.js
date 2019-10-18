import React, { useState } from "react"
import styled from "styled-components"
import Icon from "@mdi/react"
import { mdiFilterVariant } from "@mdi/js"
//-----*-----*-----*-----*-----*-----//

export default function PageContainer(props) {
  const { menuTitle, pageTools, children } = props
  const [toolbarOpen, setToolbarOpen] = useState(true)
  console.log("pt:", pageTools)
  const handleToolbarOpen = () => {
    setToolbarOpen(!toolbarOpen)
  }

  return (
    <StyledPageContainer className="page-container ">
      <PageHeader
        menuTitle={menuTitle}
        handleToolbarOpen={handleToolbarOpen}
        toolbarOpen={toolbarOpen}
      />
      <PageToolbar isOpen={toolbarOpen} tools={pageTools} />
      <div className="page-contents">{children}</div>
    </StyledPageContainer>
  )
}

const PageHeader = props => {
  const { menuTitle, handleToolbarOpen, toolbarOpen } = props
  return (
    <div className="page-header FR AC JSB">
      <h2>{menuTitle}</h2>
      <Icon
        className={toolbarOpen ? "filter-open up" : "filter-open down"}
        path={mdiFilterVariant}
        size={1}
        onClick={handleToolbarOpen}
      />
    </div>
  )
}

const PageToolbar = props => {
  const { isOpen, tools } = props
  return (
    <div className={isOpen ? "page-toolbar" : "page-toolbar hidden"}>
      Page Toolbar {tools}
    </div>
  )
}

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--base-unit));
  & .page-header {
    height: var(--base-unit);
    flex-shrink: 0;
    font-weight: var(--bold);
    color: var(--primary-dark);
    border-bottom: 1px solid var(--secondary-main-deep);
    padding: 0 var(--spacing-lg) 0 var(--spacing-xl);
    & .filter-open {
      transition: 0.4s;
      &.up {
        transform: rotate(180deg);
      }
    }
  }
  & .page-toolbar {
    height: var(--base-unit);
    flex-shrink: 0;
    background-color: var(--secondary-main);
    display: flex;
    /* border-bottom: 1px solid var(--secondary-main-deep); */
    transition: 0.4s;
    overflow: hidden;
    &.hidden {
      height: 0;
    }
  }
  & .page-contents {
    height: calc(100vh - var(--base-unit) * 2);
    padding: 0 var(--spacing-xl);
    overflow: scroll;
  }
`

import React from "react"
import Drawer from "@material-ui/core/Drawer"

import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import MenuList from "./SidebarMenuList"
import { drawerWidth, collapsedDrawerWidth } from "../standard"

import styled from "styled-components"

const Sidebar = props => {
  const { open, handleDrawer, isOrg, handleViewChange } = props
  return (
    <StyledDrawer>
      <Drawer
        variant="permanent"
        className={
          open && isOrg
            ? "drawer drawer-open org-drawer"
            : open
            ? "drawer drawer-open proj-drawer"
            : isOrg
            ? "drawer drawer-close org-drawer"
            : "drawer drawer-close proj-drawer"
        }
        classes={{
          paper:
            open && isOrg
              ? "drawer drawer-open org-drawer"
              : open
              ? "drawer drawer-open proj-drawer"
              : isOrg
              ? "drawer drawer-close org-drawer"
              : "drawer drawer-close proj-drawer"
        }}
        open={open}
      >
        <div className="FR AC JSB">
          <h1 className={open ? "company-title bold" : "company-title off"}>
            Abhra Inc.
          </h1>
          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <MenuList isOrg={isOrg} handleViewChange={handleViewChange} />
      </Drawer>
    </StyledDrawer>
  )
}

const StyledDrawer = styled.div`
  .drawer {
    width: ${drawerWidth}px;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .drawer-open {
    width: ${drawerWidth}px;
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  }
  .drawer-close {
    width: ${collapsedDrawerWidth}px;
    transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    overflow-x: hidden;
  }
  .org-drawer {
    background-color: var(--primary-light);
    border-right: 1px solid var(--primary-light-deep);
    box-shadow: var(--shadow-rg-right-deep);

    .view-changer {
      border-bottom: 1px solid var(--primary-light-deep);
    }
  }
  .proj-drawer {
    background-color: var(--secondary-main);
    border-right: 1px solid var(--secondary-main-deep);
    box-shadow: var(--shadow-rg-right-light);

    .view-changer {
      border-bottom: 1px solid var(--secondary-main-deep);
    }
  }
  .company-title {
    color: var(--primary-dark);
    padding-left: 1rem;
    &.off {
      width: 0;
      overflow: hidden;
    }
  }
  .view-changer {
    padding: 0 16px;
    height: var(--base-unit);
    color: var(--primary-dark);
    font-weight: var(--regular);
  }
  /* below are shared in sub components */
  .link {
    text-decoration: none;
    padding: nont;
  }
  .active-menu {
    color: var(--primary-dark);
    .menu-icon svg {
      fill: var(--primary-dark);
    }
    .menu-text span {
      font-weight: var(--bold);
    }
  }
  .menu-icon {
    min-width: 40px;
    margin-right: 2px;
    & svg {
      fill: var(--shade60);
    }
  }
  .menu-text span {
    font-size: var(--text-xl);
    font-weight: var(--light);
  }
  .nested-menu {
    padding-left: calc(var(--base-unit) / 2);
    background-color: var(--secondary-main-deep);
  }
  .with-sub-menu {
    padding-top: 0;
    padding-bottom: 0;
  }
`

export default Sidebar

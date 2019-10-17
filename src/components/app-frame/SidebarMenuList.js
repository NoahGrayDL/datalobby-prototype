import React, { useState } from "react"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined"
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import SidebarMenu from "./SidebarMenu"
import SidebarMenuWithSubMenus from "./SidebarMenuWithSubMenus"
import ListSubheader from "@material-ui/core/ListSubheader"

import EditIcon from "@material-ui/icons/Edit"
import ViewWeekIcon from "@material-ui/icons/ViewWeek"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import PrintIcon from "@material-ui/icons/Print"
import StarsIcon from "@material-ui/icons/Stars"

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

//-----*-----*-----*-----*-----*-----//

const SidebarMenuList = props => {
  const { isOrg, handleViewChange } = props

  return (
    <List
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          onClick={handleViewChange}
          style={{ padding: 0, height: `var(--base-unit)` }}
        >
          {isOrg ? (
            <div className="view-changer FR JSB AC">
              Organization Menu <ArrowDownwardIcon fontSize="small" />
            </div>
          ) : (
            <div className="view-changer FR JSB AC">
              Project Menu <ArrowUpwardIcon fontSize="small" />
            </div>
          )}
        </ListSubheader>
      }
    >
      {isOrg
        ? ORG_MENUS.map((item, index) => {
            const { title, icon, url, subMenus } = item
            if (subMenus) {
              return (
                <SidebarMenuWithSubMenus
                  title={title}
                  index={index}
                  icon={icon}
                  url={url}
                  subMenus={subMenus}
                  key={title}
                />
              )
            }
            return (
              <SidebarMenu
                title={title}
                index={index}
                icon={icon}
                url={url}
                subMenus={subMenus}
                key={title}
              />
            )
          })
        : PROJECT_MENUS.map((item, index) => {
            const { title, icon, url, subMenus } = item
            if (subMenus) {
              return (
                <SidebarMenuWithSubMenus
                  title={title}
                  index={index}
                  icon={icon}
                  url={url}
                  subMenus={subMenus}
                  key={title}
                />
              )
            }
            return (
              <SidebarMenu
                title={title}
                index={index}
                icon={icon}
                url={url}
                subMenus={subMenus}
                key={title}
              />
            )
          })}
    </List>
  )
}

const PROJECT_MENUS = [
  {
    title: "Project Dashboard",
    icon: <DescriptionOutlinedIcon />,
    url: "/project-dashboard",
    subMenus: false
  },
  {
    title: "Information",
    icon: <DescriptionOutlinedIcon />,
    url: "/information",
    subMenus: [
      {
        title: "Project Information",
        icon: <StarsIcon />,
        url: "/information/project-information"
      },
      {
        title: "Entity List",
        icon: <StarsIcon />,
        url: "/information/entity-list"
      },
      {
        title: "CoA List",
        icon: <StarsIcon />,
        url: "/information/coa-list"
      }
    ]
  },
  {
    title: "PBC",
    icon: <DescriptionOutlinedIcon />,
    url: "/prepared-by-client",
    subMenus: false
  },
  {
    title: "Task & Time",
    icon: <DescriptionOutlinedIcon />,
    url: "/task-and-time",
    subMenus: false
  },
  {
    title: "Financial Statements",
    icon: <StarsIcon />,
    url: "/financial-statements",
    subMenus: [
      {
        title: "Entry Set Test",
        icon: <DescriptionOutlinedIcon />,
        url: "/financial-statements/entryset-test"
      },
      {
        title: "Ledgers",
        icon: <DescriptionOutlinedIcon />,
        url: "/financial-statements/ledgers"
      },
      {
        title: "Closing",
        icon: <AccountBalanceWalletIcon />,
        url: "/financial-statements/closing/trial-balance"
      },
      {
        title: "Lead Sheet",
        icon: <ViewWeekIcon />,
        url: "/financial-statements/lead-sheet"
      },
      {
        title: "FS Papers",
        icon: <PrintIcon />,
        url: "/financial-statements/fs-papers"
      }
    ]
  },
  {
    title: "SOX",
    icon: <StarsIcon />,
    url: "/sox",
    subMenus: false
  },
  {
    title: "Workpapers",
    icon: <DescriptionOutlinedIcon />,
    url: "/workpapers",
    subMenus: false
  },
  {
    title: "Permanent Files",
    icon: <DescriptionOutlinedIcon />,
    url: "/permanent-files",
    subMenus: false
  },
  {
    title: "Report",
    icon: <StarsIcon />,
    url: "/report",
    subMenus: false
  },
  {
    title: "Archive",
    icon: <DescriptionOutlinedIcon />,
    url: "/archive",
    subMenus: [
      {
        title: "Archive Diagnosis",
        icon: <ViewWeekIcon />,
        url: "/archive/archive-diagnosis"
      },
      {
        title: "Sign Off History",
        icon: <AttachMoneyIcon />,
        url: "/archive/sign-off-history"
      },
      {
        title: "Archive History",
        icon: <PrintIcon />,
        url: "/archive/archive-history"
      }
    ]
  },
  {
    title: "Project Setup",
    icon: <DescriptionOutlinedIcon />,
    url: "/project-setup",
    subMenus: [
      {
        title: "Users",
        icon: <AttachMoneyIcon />,
        url: "/project-setup/users"
      },
      {
        title: "Trash",
        icon: <PrintIcon />,
        url: "/project-setup/trash"
      }
    ]
  }
]

const ORG_MENUS = [
  {
    title: "My Page",
    icon: <DescriptionOutlinedIcon />,
    url: "/my-page",
    subMenus: false
  },
  {
    title: "Notification",
    icon: <DescriptionOutlinedIcon />,
    url: "/notification",
    subMenus: false
  },
  {
    title: "Home Dashboard",
    icon: <DescriptionOutlinedIcon />,
    url: "/home-dashboard",
    subMenus: false
  },
  {
    title: "Schedule and Budget",
    icon: <DescriptionOutlinedIcon />,
    url: "/schedule-and-budget",
    subMenus: false
  },
  {
    title: "Archive Management",
    icon: <DescriptionOutlinedIcon />,
    url: "/archive-management",
    subMenus: false
  },
  {
    title: "Groups",
    icon: <DescriptionOutlinedIcon />,
    url: "/groups",
    subMenus: false
  },
  {
    title: "Projects",
    icon: <DescriptionOutlinedIcon />,
    url: "/projects",
    subMenus: false
  },
  {
    title: "Library",
    icon: <DescriptionOutlinedIcon />,
    url: "/library",
    subMenus: false
  },
  {
    title: "Setup",
    icon: <DescriptionOutlinedIcon />,
    url: "/setup",
    subMenus: false
  }
]
export default React.memo(SidebarMenuList)

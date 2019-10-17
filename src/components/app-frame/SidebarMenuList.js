import React from "react"
import List from "@material-ui/core/List"

import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import SidebarMenu from "./SidebarMenu"
import SidebarMenuWithSubMenus from "./SidebarMenuWithSubMenus"
import ListSubheader from "@material-ui/core/ListSubheader"

import Icon from "@mdi/react"
import {
  mdiAccount,
  mdiViewDashboardOutline,
  mdiInformationVariant,
  mdiFolderInformationOutline,
  mdiClipboardCheckOutline,
  mdiCalendarClock,
  mdiCurrencyUsd,
  mdiEye,
  mdiCalculatorVariant,
  mdiSitemap,
  mdiFileOutline,
  mdiFile,
  mdiFileChartOutline,
  mdiFileChart,
  mdiLockOutline,
  mdiShieldOutline,
  mdiShieldLockOutline,
  mdiShieldLock,
  mdiSettingsOutline
} from "@mdi/js"

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
    icon: <Icon path={mdiViewDashboardOutline} size={1} />,
    url: "/project-dashboard",
    subMenus: false
  },
  {
    title: "Information",
    icon: <Icon path={mdiFolderInformationOutline} size={1} />,
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
    icon: <Icon path={mdiClipboardCheckOutline} size={1} />,
    url: "/prepared-by-client",
    subMenus: false
  },
  {
    title: "Task & Time",
    icon: <Icon path={mdiCalendarClock} size={1} />,
    url: "/task-and-time",
    subMenus: false
  },
  {
    title: "Financial Statements",
    icon: <Icon path={mdiCalculatorVariant} size={1} />,
    url: "/financial-statements",
    subMenus: [
      {
        title: "Entry Set Test",
        icon: <Icon path={mdiAccount} size={1} />,
        url: "/financial-statements/entryset-test"
      },
      {
        title: "Ledgers",
        icon: <Icon path={mdiAccount} size={1} />,
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
    icon: <Icon path={mdiSitemap} size={1} />,
    url: "/sox",
    subMenus: false
  },
  {
    title: "Workpapers",
    icon: <Icon path={mdiFileOutline} size={1} />,
    url: "/workpapers",
    subMenus: false
  },
  {
    title: "Permanent Files",
    icon: <Icon path={mdiFile} size={1} />,
    url: "/permanent-files",
    subMenus: false
  },
  {
    title: "Report",
    icon: <Icon path={mdiFileChart} size={1} />,
    url: "/report",
    subMenus: false
  },
  {
    title: "Archive",
    icon: <Icon path={mdiShieldLock} size={1} />,
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
    icon: <Icon path={mdiSettingsOutline} size={1} />,
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
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/my-page",
    subMenus: false
  },
  {
    title: "Notification",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/notification",
    subMenus: false
  },
  {
    title: "Home Dashboard",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/home-dashboard",
    subMenus: false
  },
  {
    title: "Schedule and Budget",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/schedule-and-budget",
    subMenus: false
  },
  {
    title: "Archive Management",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/archive-management",
    subMenus: false
  },
  {
    title: "Groups",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/groups",
    subMenus: false
  },
  {
    title: "Projects",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/projects",
    subMenus: false
  },
  {
    title: "Library",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/library",
    subMenus: false
  },
  {
    title: "Setup",
    icon: <Icon path={mdiAccount} size={1} />,
    url: "/setup",
    subMenus: false
  }
]
export default React.memo(SidebarMenuList)

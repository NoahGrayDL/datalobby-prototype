import React from "react"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined"
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import SidebarMenu from "./SidebarMenu"
import ListSubheader from "@material-ui/core/ListSubheader"

import EditIcon from "@material-ui/icons/Edit"
import ViewWeekIcon from "@material-ui/icons/ViewWeek"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import PrintIcon from "@material-ui/icons/Print"
//-----*-----*-----*-----*-----*-----//

const SidebarMenuList = () => {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Project Menu
        </ListSubheader>
      }
    >
      {MENUS.map((item, index) => {
        const { title, icon, url, subMenus } = item
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

const MENUS = [
  {
    title: "Company Information",
    icon: <InfoOutlinedIcon />,
    url: "/company-information",
    subMenus: true
  },
  {
    title: "Chart of Account",
    icon: <AccountTreeOutlinedIcon />,
    url: "/chart-of-account",
    subMenus: false
  },
  {
    title: "Ledgers",
    icon: <DescriptionOutlinedIcon />,
    url: "/ledgers",
    subMenus: false
  },
  {
    title: "Trial Balance",
    icon: <AccountBalanceWalletIcon />,
    url: "/trial-balance",
    subMenus: false
  },
  {
    title: "Adjustments",
    icon: <EditIcon />,
    url: "/adjustments",
    subMenus: false
  },
  {
    title: "Lead Sheet",
    icon: <ViewWeekIcon />,
    url: "/lead-sheet",
    subMenus: false
  },
  {
    title: "Financial Statements",
    icon: <AttachMoneyIcon />,
    url: "/financial-statements",
    subMenus: false
  },
  {
    title: "Report",
    icon: <PrintIcon />,
    url: "/report",
    subMenus: false
  }
]

export default SidebarMenuList

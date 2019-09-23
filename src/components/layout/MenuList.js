import React from "react"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined"
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import Menu from "./Menu"
import EditIcon from "@material-ui/icons/Edit"
import ViewWeekIcon from "@material-ui/icons/ViewWeek"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import PrintIcon from "@material-ui/icons/Print"
//-----*-----*-----*-----*-----*-----//

const MenuList = () => {
  return (
    <List>
      {MENUS.map((item, index) => {
        const { title, icon, url } = item
        return <Menu title={title} index={index} icon={icon} url={url} />
      })}
    </List>
  )
}

const MENUS = [
  {
    title: "Company Information",
    icon: <InfoOutlinedIcon />,
    url: "/company-information"
  },
  {
    title: "Chart of Account",
    icon: <AccountTreeOutlinedIcon />,
    url: "/chart-of-account"
  },
  {
    title: "Ledgers",
    icon: <DescriptionOutlinedIcon />,
    url: "/ledgers"
  },
  {
    title: "Trial Balance",
    icon: <AccountBalanceWalletIcon />,
    url: "/trial-balance"
  },
  {
    title: "Adjustments",
    icon: <EditIcon />,
    url: "/adjustments"
  },
  {
    title: "Lead Sheet",
    icon: <ViewWeekIcon />,
    url: "/lead-sheet"
  },
  {
    title: "Financial Statements",
    icon: <AttachMoneyIcon />,
    url: "/financial-statements"
  },
  {
    title: "Report",
    icon: <PrintIcon />,
    url: "/report"
  }
]

export default MenuList

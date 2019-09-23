import React from "react"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import MailIcon from "@material-ui/icons/Mail"
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

const MENUS = [
  {
    title: "Company Information",
    icon: <InfoOutlinedIcon />
  },
  {
    title: "Chart of Account",
    icon: <AccountTreeOutlinedIcon />
  },
  {
    title: "Ledgers",
    icon: <DescriptionOutlinedIcon />
  },
  {
    title: "Trial Balance",
    icon: <AccountBalanceWalletIcon />
  },
  {
    title: "Adjustments",
    icon: <EditIcon />
  },
  {
    title: "Lead Sheet",
    icon: <ViewWeekIcon />
  },
  {
    title: "Financial Statements",
    icon: <AttachMoneyIcon />
  },
  {
    title: "Report",
    icon: <PrintIcon />
  }
]

const MenuList = () => {
  return (
    <List>
      {MENUS.map((item, index) => {
        const { title, icon } = item
        return <Menu title={title} index={index} icon={icon} />
      })}
    </List>
  )
}

export default MenuList

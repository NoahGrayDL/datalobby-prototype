import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import ListIcon from "@material-ui/icons/List"
import CloseIcon from "@material-ui/icons/Close"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import GridOnIcon from "@material-ui/icons/GridOn"
import ControlCameraIcon from "@material-ui/icons/ControlCamera"
import IconButton from "@material-ui/core/IconButton"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
//-----*-----*-----*-----*-----*-----//

const ColumnControl = () => {
  const classes = useStyles()
  const handleDelete = () => {
    alert("Do you want to exclude this column?")
  }
  return (
    <div className={classes.root}>
      {currentColumnList.map(item => {
        const { title, icon, onFocus } = item
        return (
          <Chip
            onDelete={handleDelete}
            deleteIcon={<CloseIcon />}
            icon={icon}
            label={title}
            size="small"
            color={onFocus ? "primary" : "default"}
            className={classes.chip}
          />
        )
      })}
      <IconButton aria-label="add column" size="small">
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  )
}

const currentColumnList = [
  {
    title: "Caption Set A",
    icon: <ListIcon />,
    onFocus: true
  },
  {
    title: "General Ledger Account",
    icon: <AccountBalanceWalletIcon />,
    onFocus: true
  },
  {
    title: "Trial Balance",
    icon: <GridOnIcon />,
    onFocus: true
  },
  {
    title: "Cumulated AJE",
    icon: <ControlCameraIcon />,
    onFocus: true
  },
  {
    title: "Adjusted TB",
    icon: <ControlCameraIcon />,
    onFocus: true
  },
  {
    title: "Subsidiary A",
    icon: <ControlCameraIcon />,
    onFocus: true
  },
  {
    title: "Subsidiray B",
    icon: <ControlCameraIcon />,
    onFocus: false
  },
  {
    title: "combined TB",
    icon: <ControlCameraIcon />,
    onFocus: false
  },
  {
    title: "Cumulative Eliminating Entries",
    icon: <ControlCameraIcon />,
    onFocus: false
  },
  {
    title: "Consolidated TB",
    icon: <ControlCameraIcon />,
    onFocus: false
  },
  {
    title: "Income Statement",
    icon: <ControlCameraIcon />,
    onFocus: false
  },
  {
    title: "Balance Sheet",
    icon: <ControlCameraIcon />,
    onFocus: false
  }
]

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  chip: {
    padding: (0, 4),
    margin: theme.spacing(0.5)
  }
}))

export default ColumnControl
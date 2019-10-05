import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
//-----*-----*-----*-----*-----*-----//

export default function CompanyCard(props) {
  const { data, onRemove } = props
  const { id, name, type, location, currency, timeZone } = data
  const [anchorEl, setAnchorEl] = useState(null)

  const classes = useStyles()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card className={classes.card}>
      <div className={classes.contents}>
        <div className={classes.type}>{type}</div>
        <div className={classes.entityName}>{name}</div>
        <div className={classes.propsContainer}>
          <span>{location}</span>
          <span>{currency}</span>
          <span>{timeZone}</span>
        </div>

        <CardActions className={classes.actions}>
          <Button size="small">CoA</Button>
          <IconButton aria-label="more" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="entity-list-context-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={() => onRemove(id)}>Remove</MenuItem>
          </Menu>
        </CardActions>
      </div>
      {/* ----- actions ----- */}
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#e5e5e5"
    },
    padding: "0 16px"
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  type: {
    fontSize: 14,
    minWidth: 100,
    width: "10%"
  },
  entityName: {
    width: "55%",
    alignItems: "center",
    fontWeight: "bold"
  },
  propsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
    "& span": {
      width: "30%"
    }
  },
  actions: {
    justifyContent: "space-between"
  }
}))

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

//-----*-----*-----*-----*-----*-----//

export default function CompanyCard(props) {
  const { content } = props
  const { name, type, location, currency, timeZone } = content
  const theme = useTheme()

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {location}
        </Typography>
        <Typography variant="body2" component="p">
          {currency} {timeZone}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">Chart of Account</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "pink"
    }
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  actions: {
    justifyContent: "space-between"
  }
}))

import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  pad: {
    paddingRight: props => (props.isTab ? "24px" : "0px")
  },
  debit: {
    color: "blue",
    textAlign: "right",
    flex: 1,
    flexBasis: "50%"
  },
  credit: {
    color: "red",
    textAlign: "right",
    flex: 1,
    flexBasis: "50%"
  },
  amountCell: {
    // flex: 1,
    // border: '1px solid black',
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  }
}))
export default function AmountEntry({
  isMerged,
  isFormatted,
  formatFcn,
  debit,
  credit,
  isLabel,
  unit = 1,
  isTab
}) {
  // const [isMerged, setIsMerge] = useState(false)
  // const [isFormatted, setIsFormatted] = useState(true)
  // console.log('amount Entry ', isMerged)
  // console.log('formatFcn ', formatFcn)

  const classes = useStyles({ isTab: isTab })
  const debitValue = isLabel
    ? debit
    : isFormatted
    ? formatFcn.format(debit / unit)
    : debit
  const creditValue = isLabel
    ? credit
    : isFormatted
    ? formatFcn.format(credit / unit)
    : credit

  const balance = (dbt, crd) => (dbt > crd ? dbt - crd : crd - dbt)

  // console.log(debit, credit, unit, debitValue, creditValue)

  const seperated = (
    <>
      <div className={classes.amountCell}>
        <div className={classes.debit}>{debitValue}</div>
        <div className={classes.credit}>{creditValue}</div>
      </div>
    </>
  )
  const merged = (
    <>
      <div className={classes.amountCell}>
        {isLabel ? (
          "Balance"
        ) : debit > credit ? (
          <span className={`${classes.debit} ${classes.pad}`}>
            {isFormatted
              ? formatFcn.format(balance(debit, credit) / unit)
              : balance(debit, credit)}
          </span>
        ) : (
          <span className={`${classes.credit} ${classes.pad}`}>
            {isFormatted
              ? formatFcn.format(balance(debit, credit) / unit)
              : balance(debit, credit)}
          </span>
        )}
      </div>
    </>
  )

  return <>{isMerged ? merged : seperated}</>
}

import React from "react"

const AccountsInCaption = props => {
  const { caption, state } = props
  return (
    <div
      className={
        state.expandAll ? "accounts-container" : "accounts-container off"
      }
    >
      {caption.accountList.map(account => {
        const { accountCode, accountTitle } = account.accountData
        const credit = account.accountData.credit
          ? account.accountData.credit.amount
          : "undefined"
        const debit = account.accountData.debit
          ? account.accountData.debit.amount
          : "undefined"
        const amount = credit + debit
        return (
          <div className="account-container">
            <div className="account-item account-code">{accountCode}</div>
            <div
              className={
                state.titleOn
                  ? "account-item account-title"
                  : "account-item account-title off"
              }
            >
              {accountTitle}
            </div>
            <div
              className={
                state.valueOn
                  ? "account-item account-value"
                  : "account-item account-value off"
              }
            >
              <div className="credit account-credit">{credit}</div>
              <div className="debit account-debit">{debit}</div>
              <div className="account-amount">{amount}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AccountsInCaption

import _ from "lodash"
const captionColumn = [
  {
    Header: "Caption",
    foldable: true,
    columns: [
      {
        Header: "Caption Set 1",
        accessor: "caption1"
      },
      {
        Header: "Caption Set 2",
        accessor: "caption2"
      }
    ]
  }
]

const leadsheetCaptionColumn = [
  {
    Header: "Caption",
    foldable: true,
    columns: [
      {
        Header: "Caption Set 1",
        accessor: "caption"
      }
    ]
  }
]

const leadsheetCaptionGLAColumn = [
  {
    Header: "General Ledger Account",
    foldable: true,
    columns: [
      {
        Header: "Caption",
        accessor: "caption",
        show: false,
        style: { width: 0 }
      },
      {
        Header: "Code",
        accessor: "accountCode"
      },
      {
        Header: "Title",
        accessor: "accountTitle"
      }
    ]
  }
]

const captionsWithGroupColumn = [
  {
    Header: "Caption",
    foldable: true,
    columns: [
      {
        Header: "Caption Set 1",
        accessor: "captionGroup1"
        // aggregate: vals => _.round(_.mean(vals)),
        // Aggregated: row => {
        //   return <span>{row.value}</span>
        // }
      },
      {
        Header: "Caption Set 2",
        accessor: "captionGroup2"
      },
      {
        Header: "Caption Set 3",
        accessor: "captionGroup3"
      },
      {
        Header: "Caption",
        accessor: "caption"
      }
    ]
  }
]

const generalLedgerAccountsColumn = [
  {
    Header: "General Ledger Account",
    foldable: true,
    columns: [
      {
        Header: "Code",
        accessor: "accountCode"
      },
      {
        Header: "Account Title",
        accessor: "accountTitle"
      }
    ]
  }
]

const tbColumn = [
  {
    Header: "Trial Balance",
    columns: [
      {
        Header: "Debit",
        accessor: "tbDebit"
      },
      {
        Header: "Credit",
        accessor: "tbCredit"
      }
    ]
  }
]

const trialBalanceOpeningColumn = [
  {
    Header: "TB Opening Balance",
    columns: [
      {
        Header: "Debit",
        accessor: "tbDebit"
      },
      {
        Header: "Credit",
        accessor: "tbCredit"
      }
    ]
  }
]

const trialBalanceCurrentPeriodColumn = [
  {
    Header: "TB Current Period",
    columns: [
      {
        Header: "Debit",
        accessor: "tbDebit"
      },
      {
        Header: "Credit",
        accessor: "tbCredit"
      }
    ]
  }
]

const trialBalanceNetChangeColumn = [
  {
    Header: "TB Net Change",
    columns: [
      {
        Header: "Debit",
        accessor: "tbDebit"
      },
      {
        Header: "Credit",
        accessor: "tbCredit"
      }
    ]
  }
]

const trialBalanceEndingColumn = [
  {
    Header: "TB Ending Balance",
    columns: [
      {
        Header: "Debit",
        accessor: "tbDebit"
      },
      {
        Header: "Credit",
        accessor: "tbCredit"
      }
    ]
  }
]

const cumulatedAdjustmentsColumn = [
  {
    Header: "Cumulated AJE",
    columns: [
      {
        Header: "Debit",
        accessor: "ajeDebit"
      },
      {
        Header: "Credit",
        accessor: "ajeCredit"
      }
    ]
  }
]

const adjustedTBColumn = [
  {
    Header: "Adjusted TB",
    columns: [
      {
        Header: "Debit",
        accessor: "adjustedTBDebit"
      },
      {
        Header: "Credit",
        accessor: "adjustedTBCredit"
      }
    ]
  }
]

const subsidiaryAColumn = [
  {
    Header: "Subsidiary A",
    columns: [
      {
        Header: "Debit",
        accessor: "subsidiaryADebit"
      },
      {
        Header: "Credit",
        accessor: "subsidiaryACredit"
      }
    ]
  }
]

const subsidiaryBColumn = [
  {
    Header: "Subsidiary B",
    columns: [
      {
        Header: "Debit",
        accessor: "subsidiaryBDebit"
      },
      {
        Header: "Credit",
        accessor: "subsidiaryBCredit"
      }
    ]
  }
]

const combinedTBColumn = [
  {
    Header: "Combined TB",
    columns: [
      {
        Header: "Debit",
        accessor: "combinedTBDebit"
      },
      {
        Header: "Credit",
        accessor: "combinedTBCredit"
      }
    ]
  }
]

const cumulativeEliminatingEntriesColumn = [
  {
    Header: "Cumulative Eliminating Entries",
    columns: [
      {
        Header: "Debit",
        accessor: "cumulativeEliminatingEntriesDebit"
      },
      {
        Header: "Credit",
        accessor: "cumulativeEliminatingEntriesCredit"
      }
    ]
  }
]

const consolidatedTBColumn = [
  {
    Header: "Consolidated TB",
    columns: [
      {
        Header: "Debit",
        accessor: "consolidatedTBDebit"
      },
      {
        Header: "Credit",
        accessor: "consolidatedTBCredit"
      }
    ]
  }
]

const incomeStatementColumn = [
  {
    Header: "Income Statement",
    columns: [
      {
        Header: "Debit",
        accessor: "incomeStatementDebit"
      },
      {
        Header: "Credit",
        accessor: "incomeStatementCredit"
      }
    ]
  }
]

const balanceSheetColumn = [
  {
    Header: "Balance Sheet",
    columns: [
      {
        Header: "Debit",
        accessor: "balanceSheetDebit"
      },
      {
        Header: "Credit",
        accessor: "balanceSheetCredit"
      }
    ]
  }
]

export {
  captionColumn,
  leadsheetCaptionColumn,
  leadsheetCaptionGLAColumn,
  captionsWithGroupColumn,
  generalLedgerAccountsColumn,
  tbColumn,
  trialBalanceOpeningColumn,
  trialBalanceCurrentPeriodColumn,
  trialBalanceNetChangeColumn,
  trialBalanceEndingColumn,
  cumulatedAdjustmentsColumn,
  adjustedTBColumn,
  subsidiaryAColumn,
  subsidiaryBColumn,
  combinedTBColumn,
  cumulativeEliminatingEntriesColumn,
  consolidatedTBColumn,
  incomeStatementColumn,
  balanceSheetColumn
}

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { CompanyInformation } from "./views/company-information"
import { ChartOfAccount } from "./views/chart-of-account"
import { Ledgers } from "./views/ledgers"
import { TrialBalance } from "./views/trial-balance"
import { Adjustments } from "./views/adjustments"
import { Leadsheet } from "./views/leadsheet"
import { FinancialStatements } from "./views/financial-statements"
import { Report } from "./views/report"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/company-information" component={CompanyInformation} />
        <Route path="/chart-of-account" component={ChartOfAccount} />
        <Route path="/ledgers" component={Ledgers} />
        <Route path="/trial-balance" component={TrialBalance} />
        <Route path="/adjustments" component={Adjustments} />
        <Route path="/lead-sheet" component={Leadsheet} />
        <Route path="/financial-statements" component={FinancialStatements} />
        <Route path="/report" component={Report} />
      </div>
    </Router>
  )
}

const Home = () => {
  return (
    <Layout menuTitle="Home">Welcome to Financial Statements Prototype</Layout>
  )
}

export default App

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
        <Route
          exact
          path="/financial-statements"
          component={FinancialStatements}
        />
        <Route
          path="/financial-statements/company-information"
          component={CompanyInformation}
        />
        <Route
          path="/financial-statements/chart-of-account"
          component={ChartOfAccount}
        />
        <Route path="/financial-statements/ledgers" component={Ledgers} />
        <Route
          path="/financial-statements/trial-balance"
          component={TrialBalance}
        />
        <Route
          path="/financial-statements/adjustments"
          component={Adjustments}
        />
        <Route path="/financial-statements/lead-sheet" component={Leadsheet} />
        <Route
          path="/financial-statements/financial-statements"
          component={FinancialStatements}
        />
        <Route path="/financial-statements/report" component={Report} />
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

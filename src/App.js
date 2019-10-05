import React from "react"
import { Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { Login } from "./views/auth"
import { MyPage } from "./views/my-page"
import { Notification } from "./views/notification"
import { HomeDashboard } from "./views/home-dashboard"
import { ScheduleAndBudget } from "./views/schedule-and-budget"
import { ArchiveManagement } from "./views/archive-management"
import { Groups } from "./views/groups"
import { Projects } from "./views/projects"
import { Library } from "./views/library"
import { Setup } from "./views/setup"
import { CompanyInformation } from "./views/company-information"
import { ChartOfAccount } from "./views/chart-of-account"
import { Ledgers } from "./views/ledgers"
import { TrialBalance } from "./views/trial-balance"
import { Adjustments } from "./views/adjustments"
import { Leadsheet } from "./views/leadsheet"
import { FinancialStatements } from "./views/financial-statements"

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/my-page" component={MyPage} />
      <Route path="/notification" component={Notification} />
      <Route path="/home-dashboard" component={HomeDashboard} />
      <Route path="/schedule-and-budget" component={ScheduleAndBudget} />
      <Route path="/archive-management" component={ArchiveManagement} />
      <Route path="/groups" component={Groups} />
      <Route path="/projects" component={Projects} />
      <Route path="/library" component={Library} />
      <Route path="/setup" component={Setup} />

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
      <Route path="/financial-statements/adjustments" component={Adjustments} />
      <Route path="/financial-statements/lead-sheet" component={Leadsheet} />
      <Route
        path="/financial-statements/financial-statements"
        component={FinancialStatements}
      />
      {/* <Route path="/financial-statements/report" component={Report} /> */}
    </div>
  )
}

const Home = () => {
  return (
    <Layout menuTitle="Home">Welcome to Financial Statements Prototype</Layout>
  )
}

export default App

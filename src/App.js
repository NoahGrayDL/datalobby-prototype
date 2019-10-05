import React from "react"
import { Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { Login } from "./views/auth"
import { MyPage } from "./views/organization-views/my-page"
import { Notification } from "./views/organization-views/notification"
import { HomeDashboard } from "./views/organization-views/home-dashboard"
import { ScheduleAndBudget } from "./views/organization-views/schedule-and-budget"
import { ArchiveManagement } from "./views/organization-views/archive-management"
import { Groups } from "./views/organization-views/groups"
import { Projects } from "./views/organization-views/projects"
import { Library } from "./views/organization-views/library"
import { Setup } from "./views/organization-views/setup"
import { CompanyInformation } from "./views/project-views/company-information"
import { ChartOfAccount } from "./views/project-views/chart-of-account"
import { Ledgers } from "./views/project-views/ledgers"
import { TrialBalance } from "./views/project-views/trial-balance"
import { Adjustments } from "./views/project-views/adjustments"
import { Leadsheet } from "./views/project-views/leadsheet"
import { FinancialStatements } from "./views/project-views/financial-statements"

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />

      {/* ----------organization views---------- */}
      <Route path="/my-page" component={MyPage} />
      <Route path="/notification" component={Notification} />
      <Route path="/home-dashboard" component={HomeDashboard} />
      <Route path="/schedule-and-budget" component={ScheduleAndBudget} />
      <Route path="/archive-management" component={ArchiveManagement} />
      <Route path="/groups" component={Groups} />
      <Route path="/projects" component={Projects} />
      <Route path="/library" component={Library} />
      <Route path="/setup" component={Setup} />
      {/* ----------project views---------- */}
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
    </Layout>
  )
}

const Home = () => {
  return (
    <Layout menuTitle="Home">Welcome to Financial Statements Prototype</Layout>
  )
}

export default App

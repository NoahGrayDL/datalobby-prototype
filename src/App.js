import React from "react"
import { Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { Login } from "./views/auth"
// ----------organization views----------
import { MyPage } from "./views/organization-views/my-page"
import { Notification } from "./views/organization-views/notification"
import { HomeDashboard } from "./views/organization-views/home-dashboard"
import { ScheduleAndBudget } from "./views/organization-views/schedule-and-budget"
import { ArchiveManagement } from "./views/organization-views/archive-management"
import { Groups } from "./views/organization-views/groups"
import { Projects } from "./views/organization-views/projects"
import { Library } from "./views/organization-views/library"
import { Setup } from "./views/organization-views/setup"
// ----------project views----------
import { ProjectDashboard } from "./views/project-views/project-dashboard"
import { ProjectInformation } from "./views/project-views/project-information"
import { PreparedByClient } from "./views/project-views/prepared-by-client"
import { TaskAndTime } from "./views/project-views/task-and-time"
import { CompanyInformation } from "./views/project-views/company-information"
import { ChartOfAccount } from "./views/project-views/chart-of-account"
import { Ledgers } from "./views/project-views/ledgers"
import { TrialBalance } from "./views/project-views/trial-balance"
import { Adjustments } from "./views/project-views/adjustments"
import { Leadsheet } from "./views/project-views/leadsheet"
import { Paper } from "./views/project-views/paper"
import { Report } from "./views/project-views/report"
import { Workpapers } from "./views/project-views/workpapers"
import { PermanentFiles } from "./views/project-views/permanent-files"
import { ArchiveDiagnosis } from "./views/project-views/archive-diagnosis"
import { SignOffHistory } from "./views/project-views/sign-off-history"
import { ArchiveHistory } from "./views/project-views/archive-history"
import {
  ProjectSetupUsers,
  ProjectSetupTrash
} from "./views/project-views/project-setup"

export default function App() {
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
      <Route path="/project-dashboard" component={ProjectDashboard} />
      <Route path="/project-information" component={ProjectInformation} />
      <Route path="/prepared-by-client" component={PreparedByClient} />
      <Route path="/task-and-time" component={TaskAndTime} />
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
      <Route path="/financial-statements/paper" component={Paper} />
      <Route path="/workpapers" component={Workpapers} />
      <Route path="/permanent-files" component={PermanentFiles} />
      <Route path="/report" component={Report} />
      <Route path="/archive/archive-diagnosis" component={ArchiveDiagnosis} />
      <Route path="/archive/sign-off-history" component={SignOffHistory} />
      <Route path="/archive/archive-history" component={ArchiveHistory} />
      <Route path="/project-setup/users" component={ProjectSetupUsers} />
      <Route path="/project-setup/trash" component={ProjectSetupTrash} />
    </Layout>
  )
}

const Home = () => {
  return (
    <Layout menuTitle="Home">Welcome to Financial Statements Prototype</Layout>
  )
}

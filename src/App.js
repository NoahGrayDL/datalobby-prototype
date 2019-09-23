import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Layout } from "./components/layout"
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/audit-lobby" component={AuditLobbyRouter} />
        <Route path="/accounting-lobby" component={AccountingLobbyRouter} /> */}
      </div>
    </Router>
  )
}

const Home = () => {
  return <Layout>Home</Layout>
}

export default App

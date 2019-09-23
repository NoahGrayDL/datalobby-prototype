import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Layout } from "./components/layout"
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/company-inforamtion" component={Home} />
        <Route path="/chart-of-account" component={Home} />
        <Route path="/ledgers" component={Home} />
        <Route path="/trial-balance" component={Home} />
        <Route path="/adjustments" component={Home} />
        <Route path="/lead-sheet" component={Home} />
        <Route path="/financial-statements" component={Home} />
        <Route path="/report" component={Home} />
      </div>
    </Router>
  )
}

const Home = () => {
  return <Layout menuTitle="Home">Home</Layout>
}

export default App

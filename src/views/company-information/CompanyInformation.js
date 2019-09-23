import React from "react"
import CompanyList from "./CompanyList"
import { Layout } from "../../components/layout"
//-----*-----*-----*-----*-----*-----//

const CompanyInformation = () => {
  return (
    <Layout menuTitle="Company Information">
      <CompanyList />
    </Layout>
  )
}

export default CompanyInformation

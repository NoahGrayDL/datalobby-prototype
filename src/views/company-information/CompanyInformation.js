import React from "react"
import CompanyList from "./CompanyList"
import { Layout } from "../../components/layout"
//-----*-----*-----*-----*-----*-----//

const CompanyInformation = () => {
  return (
    <Layout menuTitle="Company Information" menuButton="Add Company">
      <CompanyList />
    </Layout>
  )
}

export default CompanyInformation

import React from "react"
import { PageContainer } from "../../../components"

import CompanyList from "./CompanyList"
//-----*-----*-----*-----*-----*-----//

const CompanyInformation = () => {
  return (
    // <Layout menuTitle="Company Information" menuButton="Add Company">
    //   <CompanyList />
    // </Layout>
    <PageContainer menuTitle="Company Information">
      <CompanyList />
    </PageContainer>
  )
}

export default CompanyInformation

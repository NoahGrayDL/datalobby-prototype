import React from "react"
import { PageContainer } from "../../../components/page-container"
import { TextButton } from "../../../components/buttons"
export default function PreparedByClient() {
  return (
    <PageContainer menuTitle="Prepared By Client" pageTools={<PBCPageTools />}>
      Prepared By Client Contents
    </PageContainer>
  )
}

const PBCPageTools = () => {
  return (
    <div className="FR">
      <div>Button1 </div>
      <div>Button2 </div>
      <TextButton title="Default" />
      <TextButton title="Primary" color="primary" />
      <TextButton title="Secondary" color="secondary" />
    </div>
  )
}

import React, { useState, useRef, useCallback } from "react"
import { PageContainer } from "../../../components"
import InsertCompany from "./InsertCompany"
import CompanyList from "./CompanyList"
//-----*-----*-----*-----*-----*-----//

export default function CompanyInformation() {
  const [entities, setEntities] = useState([
    {
      id: 1,
      type: "Parent",
      name: "사성디스플레이(주)",
      location: "Korea",
      currency: "KRW",
      timeZone: "GMT+9",
      hasCoA: true
    },
    {
      id: 2,
      type: "Subsidiary",
      name: "사성물산(주)",
      location: "Korea",
      currency: "KRW",
      timeZone: "GMT+9",
      hasCoA: false
    },
    {
      id: 3,
      type: "Subsidiary",
      name: "사성전기(주)",
      location: "Korea",
      currency: "KRW",
      timeZone: "GMT+9",
      hasCoA: false
    },
    {
      id: 4,
      type: "Subsidiary",
      name: "사성공업(주)",
      location: "Korea",
      currency: "KRW",
      timeZone: "GMT+9",
      hasCoA: false
    }
  ])

  const newEntityId = useRef(5)

  const onInsert = useCallback(
    value => {
      const entity = {
        id: newEntityId.current,
        type: value.type,
        name: value.name,
        hasCoA: false
      }
      setEntities(entities.concat(entity))
      newEntityId.current += 1
    },
    [entities]
  )

  const onRemove = useCallback(
    id => {
      setEntities(entities.filter(entity => entity.id !== id))
    },
    [entities]
  )

  return (
    <PageContainer menuTitle="Company Information">
      <InsertCompany onInsert={onInsert} />
      <CompanyList entities={entities} onRemove={onRemove} />
    </PageContainer>
  )
}

import React, { useState, useRef, useCallback } from "react"
import { PageContainer } from "../../../components"
import InsertCompany from "./InsertCompany"
import CompanyList from "./CompanyList"
//-----*-----*-----*-----*-----*-----//

function createBulkEntities() {
  const array = []
  for (let i = 1; i <= 250; i++) {
    array.push({
      id: i,
      name: `컴퍼니 ${i}`,
      checked: false
    })
  }
  return array
}

export default function CompanyInformation() {
  const [entities, setEntities] = useState(createBulkEntities)

  const newEntityId = useRef(251)

  const onInsert = useCallback(value => {
    const entity = {
      id: newEntityId.current,
      type: value.type,
      name: value.name,
      location: value.location,
      currency: value.currency,
      timeZone: value.timeZone,
      hasCoA: false
    }
    setEntities(entities => entities.concat(entity))
    newEntityId.current += 1
  }, [])

  const onRemove = useCallback(id => {
    setEntities(entities => entities.filter(entity => entity.id !== id))
  }, [])

  const onToggle = useCallback(id => {
    setEntities(entities =>
      entities.map(entity =>
        entity.id === id ? { ...entity, checked: !entity.checked } : entity
      )
    )
  }, [])

  return (
    <PageContainer menuTitle="Company Information">
      <InsertCompany onInsert={onInsert} />
      <CompanyList
        entities={entities}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </PageContainer>
  )
}

const DummyEntities = [
  {
    id: 1,
    checked: true,
    type: "Parent",
    name: "사성디스플레이(주)",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9",
    hasCoA: true
  },
  {
    id: 2,
    checked: false,
    type: "Subsidiary",
    name: "사성물산(주)",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9",
    hasCoA: false
  },
  {
    id: 3,
    checked: false,
    type: "Subsidiary",
    name: "사성전기(주)",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9",
    hasCoA: false
  },
  {
    id: 4,
    checked: false,
    type: "Subsidiary",
    name: "사성공업(주)",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9",
    hasCoA: false
  }
]

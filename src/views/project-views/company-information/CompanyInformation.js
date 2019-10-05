import React, { useRef, useCallback, useReducer } from "react"
import { PageContainer } from "../../../components"
import InsertCompany from "./InsertCompany"
import { List } from "../../../components/list"
//-----*-----*-----*-----*-----*-----//

function entityReducer(entities, action) {
  switch (action.type) {
    case "INSERT":
      return entities.concat(action.entity)
    case "REMOVE":
      return entities.filter(entity => entity.id !== action.id)
    case "TOGGLE":
      return entities.map(entity =>
        entity.id === action.id
          ? { ...entity, checked: !entity.checked }
          : entity
      )
    default:
      return entities
  }
}

export default function CompanyInformation() {
  const [entities, dispatch] = useReducer(entityReducer, DummyEntities)

  const newEntityId = useRef(DummyEntities.length + 1)

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
    dispatch({ type: "INSERT", entity })
    newEntityId.current += 1
  }, [])

  const onRemove = useCallback(id => {
    dispatch({ type: "REMOVE", id })
  }, [])

  const onToggle = useCallback(id => {
    dispatch({ type: "TOGGLE", id })
  }, [])

  return (
    <PageContainer menuTitle="Company Information">
      <InsertCompany onInsert={onInsert} />
      <List items={entities} onRemove={onRemove} onToggle={onToggle} />
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
  }
]

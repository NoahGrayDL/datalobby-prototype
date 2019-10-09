import React, { useRef, useReducer, useCallback } from "react"
import { PageContainer } from "../../../components"
import InsertCoA from "./InsertCoA"
import { List } from "../../../components/list"

//-----*-----*-----*-----*-----*-----//

function coaReducer(coaList, action) {
  switch (action.type) {
    case "INSERT":
      return coaList.concat(action.coa)
    case "REMOVE":
      return coaList.filter(coa => coa.id !== action.id)
    case "TOGGLE":
      return coaList.map(coa =>
        coa.id === action.id ? { ...coa, checked: !coa.checked } : coa
      )
    default:
      return coaList
  }
}

export default function ChartOfAccount() {
  const [coaList, dispatch] = useReducer(coaReducer, DummyCoAList)

  const newCoAId = useRef(DummyCoAList.length + 1)

  const onInsert = useCallback(value => {
    const coa = {
      id: newCoAId.current,
      type: value.type,
      name: value.name,
      location: value.location,
      currency: value.currency,
      timeZone: value.timeZone,
      hasCoA: false
    }
    dispatch({ type: "INSERT", coa })
    newCoAId.current += 1
  }, [])

  const onRemove = useCallback(id => {
    dispatch({ type: "REMOVE", id })
  }, [])

  const onToggle = useCallback(id => {
    dispatch({ type: "TOGGLE", id })
  }, [])

  return (
    <PageContainer menuTitle="Chart of Account">
      <InsertCoA onInsert={onInsert} />
      <List items={coaList} onRemove={onRemove} onToggle={onToggle} />
    </PageContainer>
  )
}

const DummyCoAList = [
  {
    id: 1,
    name: "첫번째 COA",
    entity: "공룡알서리"
  }
]

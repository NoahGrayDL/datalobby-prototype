import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReducer
} from "react"
import { PageContainer } from "../../../components"
import InsertCompany from "./InsertCompany"
import { List } from "../../../components/list"
import Axios from "axios"
//-----*-----*-----*-----*-----*-----//

function entityReducer(entities, action) {
  switch (action.type) {
    case "INSERT":
      return Axios.post("http://localhost:3000/entities", action.entity)
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
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [newEntityId, setNewEntityId] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await Axios.get("http://localhost:3000/entities")
        setData(response.data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const [entities, dispatch] = useReducer(entityReducer, data)

  const onInsert = useCallback(value => {
    const entity = {
      id: `${value.type}_${value.name}_${value.location}`,
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

  if (loading) {
    return <div>loading...</div>
  }
  if (!data) {
    return null
  }

  return (
    <PageContainer menuTitle="Company Information">
      <InsertCompany onInsert={onInsert} />
      {data && <List items={data} onRemove={onRemove} onToggle={onToggle} />}
    </PageContainer>
  )
}

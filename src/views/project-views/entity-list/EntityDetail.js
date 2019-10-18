import React, { useEffect, useState } from "react"
import { PageContainer } from "../../../components/page-container"
import Axios from "axios"

export default function EntityDetail({ match }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const entityId = match.params.id

  console.log(match)
  console.log(match.params.id)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await Axios.get(
          `http://localhost:3000/entity-list/${entityId}`
        )
        setData(response.data)
      } catch (e) {
        console.error(e)
      }
      setLoading(false)
    }
    fetchData()
    setTimeout(fetchData(), 1000)
  }, [])

  if (loading) {
    return <div>loading...</div>
  }
  if (!data) {
    return null
  }

  return (
    <PageContainer menuTitle="Entity Detail">
      {data && <div>{data.name}</div>}
    </PageContainer>
  )
}

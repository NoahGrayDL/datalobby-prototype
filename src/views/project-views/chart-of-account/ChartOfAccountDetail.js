import React, { useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import "react-table/react-table.css"
import Axios from "axios"

export default function ChartOfAccountDetail({ match }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const coaId = match.params.id

  console.log(match)
  console.log(match.params.id)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await Axios.get(
          `http://localhost:3000/chart-of-account/${coaId}`
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
    <PageContainer menuTitle="Chart of Account Detail">
      {data && <div>{data.name}</div>}
    </PageContainer>
  )
}

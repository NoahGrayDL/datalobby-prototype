import React, { useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import "react-table/react-table.css"
import Axios from "axios"
import { TableForList } from "../../../components/tables"

export default function ChartOfAccountDetail({ match }) {
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
          `http://localhost:3000/chart-of-account/${entityId}`
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

  console.log("data: ", data)

  return (
    <PageContainer menuTitle="Chart of Account Detail">
      {data && <TableForList data={data} columns={columns} />}
    </PageContainer>
  )
}

const columns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: row => {
      console.log("rowwwww:", row)
      return <div>{row.value}</div>
    }
  },
  {
    Header: "Entity",
    accessor: "entity"
  },
  {
    Header: "Type",
    accessor: "type"
  }
]

import React, { useReducer, useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import InsertCoA from "./InsertCoA"
import axios from "axios"
import { TableForList } from "../../../components/tables"
import { coaReducer } from "../../../reducer"
import useAPI from "../../../utils/useAPI"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

//-----*-----*-----*-----*-----*-----//

export default function ChartOfAccount() {
  const initialState = [{ coaList: [] }]
  const [state, dispatch] = useReducer(coaReducer, initialState)
  const existingCoA = useAPI("http://localhost:3000/chart-of-account")

  useEffect(() => {
    dispatch({
      type: "GET_DATA",
      payload: existingCoA
    })
  }, [existingCoA])

  const onInsert = async value => {
    const coa = {
      id: `${value.name}_${value.entity}`,
      type: value.type,
      name: value.name
    }
    const response = await axios.post(
      "http://localhost:3000/chart-of-account",
      coa
    )
    dispatch({ type: "INSERT", payload: response.data })
  }

  const onRemove = async id => {
    await axios.delete(`http://localhost:3000/chart-of-account/${id}`)
    dispatch({ type: "REMOVE", id })
  }

  if (!state.coaList) {
    return null
  }

  return (
    <PageContainer menuTitle="Chart of Account">
      <InsertCoA onInsert={onInsert} />
      {state.coaList && (
        <TableForList data={state.coaList} columns={columns(onRemove)} />
      )}
    </PageContainer>
  )
}

const columns = onRemove => {
  return [
    {
      Header: "Type",
      accessor: "type",
      minWidth: 90,
      style: {
        paddingLeft: 16
      }
    },
    {
      Header: "Name",
      accessor: "name",
      minWidth: 180,
      Cell: row => {
        const id = row.original.id
        console.log("coa ID:", id)
        return (
          <Link
            to={`/entity/chart-of-account/detail/${id}`}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            {row.value}
          </Link>
        )
      }
    },
    {
      Header: "Entity",
      accessor: "entity",
      minWidth: 60,
      Cell: row => {
        const entity = row.original.entity
        const entityId = row.original.entityId
        console.log("entity: ", row, entity, entityId)
        return (
          <Link
            to={`/entity/entity-detail/${entityId}`}
            style={{ color: entityId ? "black" : "#e5e5e5" }}
          >
            {entity ? entity : ""}
          </Link>
        )
      }
    },
    {
      Header: "action",
      accessor: "",
      minWidth: 50,
      Cell: row => {
        const id = row.value.id
        const [anchorEl, setAnchorEl] = useState(null)
        const handleClick = event => {
          setAnchorEl(event.currentTarget)
        }
        const handleClose = () => {
          setAnchorEl(null)
        }

        return (
          <div>
            <IconButton aria-label="more" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="entity-list-context-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={() => onRemove(id)}>Remove</MenuItem>
            </Menu>
          </div>
        )
      }
    }
  ]
}

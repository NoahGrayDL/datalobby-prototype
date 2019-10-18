import React, { useState, useEffect, useReducer } from "react"
import { PageContainer } from "../../../components/page-container"
import { Link } from "react-router-dom"
import InsertEntity from "./InsertEntity"
import axios from "axios"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { TableForList } from "../../../components/tables"
import { entityReducer } from "../../../reducer"
import useAPI from "../../../utils/useAPI"

//-----*-----*-----*-----*-----*-----//

export default function EntityList() {
  const initialState = [{ entities: [] }]
  const [state, dispatch] = useReducer(entityReducer, initialState)
  const existingEntities = useAPI("http://localhost:3000/entity-list")

  useEffect(() => {
    dispatch({
      type: "GET_DATA",
      payload: existingEntities
    })
  }, [existingEntities])

  const onInsert = async value => {
    const entity = {
      id: `${value.type.replace(/(\s*)/g, "")}_${value.name.replace(
        /(\s*)/g,
        ""
      )}_${value.location.replace(/(\s*)/g, "")}`,
      type: value.type,
      name: value.name,
      location: value.location,
      currency: value.currency,
      timeZone: value.timeZone,
      coaId: false
    }
    const response = await axios.post(
      "http://localhost:3000/entity-list",
      entity
    )
    dispatch({ type: "INSERT", payload: response.data })
  }

  const onRemove = async id => {
    await axios.delete(`http://localhost:3000/entity-list/${id}`)
    dispatch({ type: "REMOVE", id })
  }

  if (!state.entities) {
    return null
  }

  return (
    <PageContainer menuTitle="Entity List">
      {state.entities && (
        <TableForList data={state.entities} columns={columns(onRemove)} />
      )}
      <InsertEntity onInsert={onInsert} />
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
        return (
          <Link
            to={`/information/entity-list/${id}`}
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
      Header: "Location",
      accessor: "location"
    },
    {
      Header: "Currency",
      accessor: "currency",
      minWidth: 60
    },
    {
      Header: "TimeZone",
      accessor: "timeZone",
      minWidth: 60
    },
    {
      Header: "CoA",
      accessor: "coaId",
      minWidth: 60,
      Cell: row => {
        const coaId = row.row.coaId
        return (
          <Link
            to={`/information/coa-list/${coaId}`}
            style={{ color: coaId ? "black" : "#e5e5e5" }}
          >
            CoA
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

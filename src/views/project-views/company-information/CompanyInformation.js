import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useContext
} from "react"
import { PageContainer } from "../../../components"
import InsertCompany from "./InsertCompany"
import Axios from "axios"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { TableForList } from "../../../components/tables"
//-----*-----*-----*-----*-----*-----//

function entityReducer(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        entities: action.payload
      }
    case "INSERT":
      const insertedEntities = state.entities.concat(action.payload)
      return { ...state, entities: insertedEntities }

    case "REMOVE":
      const deletedEntities = state.entities.filter(
        entity => entity.id !== action.id
      )
      return { ...state, entities: deletedEntities }
    default:
      return state
  }
}

const useAPI = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await Axios.get(endpoint)
    setData(response.data)
  }

  return data
}

export default function CompanyInformation() {
  const initialState = [{ entities: [] }]
  const [state, dispatch] = useReducer(entityReducer, initialState)
  const existingEntities = useAPI("http://localhost:3000/entities")

  useEffect(() => {
    dispatch({
      type: "GET_DATA",
      payload: existingEntities
    })
  }, [existingEntities])

  const onInsert = async value => {
    const entity = {
      id: `${value.type}_${value.name}_${value.location}`,
      type: value.type,
      name: value.name,
      location: value.location,
      currency: value.currency,
      timeZone: value.timeZone,
      hasCoA: false
    }
    const response = await Axios.post("http://localhost:3000/entities", entity)
    dispatch({ type: "INSERT", payload: response.data })
  }

  const onRemove = async id => {
    await Axios.delete(`http://localhost:3000/entities/${id}`)
    dispatch({ type: "REMOVE", id })
  }

  if (!state.entities) {
    return null
  }

  return (
    <PageContainer menuTitle="Company Information">
      <InsertCompany onInsert={onInsert} />
      {state.entities && (
        <TableForList data={state.entities} columns={columns(onRemove)} />
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
      minWidth: 180
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
      accessor: "hasCoA",
      minWidth: 60,
      Cell: row => {
        const hasCoA = row.row.hasCoA
        return <div style={{ color: hasCoA ? "black" : "#e5e5e5" }}>CoA</div>
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

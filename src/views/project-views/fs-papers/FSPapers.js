import React, { useReducer, useEffect, useState } from "react"
import { PageContainer } from "../../../components"
import InsertPaper from "./InsertPaper"
import axios from "axios"
import { TableForList } from "../../../components/tables"
import { paperReducer } from "../../../reducer"
import useAPI from "../../../utils/useAPI"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

//-----*-----*-----*-----*-----*-----//

export default function FSPapers() {
  const initialState = [{ papers: [] }]
  const [state, dispatch] = useReducer(paperReducer, initialState)
  const existingPapers = useAPI("http://localhost:3000/fs-papers")

  useEffect(() => {
    dispatch({
      type: "GET_DATA",
      payload: existingPapers
    })
  }, [existingPapers])

  const onInsert = async value => {
    const paper = {
      id: `${value.type.replace(/(\s*)/g, "")}_${value.title.replace(
        /(\s*)/g,
        ""
      )}`,
      type: value.type,
      title: value.title
    }
    const response = await axios.post("http://localhost:3000/fs-papers", paper)
    dispatch({ type: "INSERT", payload: response.data })
  }

  const onRemove = async id => {
    await axios.delete(`http://localhost:3000/fs-papers/${id}`)
    dispatch({ type: "REMOVE", id })
  }

  if (!state.papers) {
    return null
  }

  return (
    <PageContainer menuTitle="FS Papers">
      <InsertPaper onInsert={onInsert} />
      {state.papers && (
        <TableForList data={state.papers} columns={columns(onRemove)} />
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
      Header: "Title",
      accessor: "title",
      minWidth: 180,
      Cell: row => {
        const id = row.original.id
        console.log("paper ID:", id)
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

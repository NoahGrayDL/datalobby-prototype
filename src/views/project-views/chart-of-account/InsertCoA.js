import React, { useState, useCallback } from "react"
import styled from "styled-components"

export default function InsertCoA(props) {
  const { onInsert } = props
  const [value, setValue] = useState({
    type: "",
    name: "",
    entity: "",
    entityId: ""
  })

  const onChange = useCallback(
    event => {
      setValue({ ...value, [event.target.name]: event.target.value })
    },
    [value]
  )

  const onSubmit = useCallback(
    event => {
      onInsert(value)
      setValue("")
      event.preventDefault()
    },
    [onInsert, value]
  )

  return (
    <StyledForm className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Select CoA Type"
        name="type"
        value={value.type}
        onChange={onChange}
      />
      <input
        placeholder="Input CoA Name"
        name="name"
        value={value.name}
        onChange={onChange}
      />
      <input
        placeholder="Connected Entity"
        name="entity"
        value={value.entity}
        onChange={onChange}
      />
      <input
        placeholder="Entity ID (temporary)"
        name="entityId"
        value={value.entityId}
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin: 1rem 0;
  & input {
    height: 2rem;
    padding-left: 1rem;
    margin-right: 1rem;
  }
`

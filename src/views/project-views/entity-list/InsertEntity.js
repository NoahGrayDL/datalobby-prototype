import React, { useState, useCallback } from "react"
import styled from "styled-components"

export default function InsertEntity(props) {
  const { onInsert } = props
  const [value, setValue] = useState({
    name: "",
    type: "",
    location: "",
    currency: "",
    timeZone: "",
    coaId: ""
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
        placeholder="Select Entity Type"
        name="type"
        value={value.type}
        onChange={onChange}
      />
      <input
        placeholder="Input Entity Name"
        name="name"
        value={value.name}
        onChange={onChange}
      />
      <input
        placeholder="Input Location"
        name="location"
        value={value.location}
        onChange={onChange}
      />
      <input
        placeholder="Select Currency"
        name="currency"
        value={value.currency}
        onChange={onChange}
      />
      <input
        placeholder="Select Time Zone"
        name="timeZone"
        value={value.timeZone}
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

import React from "react"
import styled from "styled-components"

/**
 *
 * @param {*} props
 */

export default function TextButton(props) {
  const { title, color, size, disabled } = props

  const colorClass = color ? color : "default"
  const sizeClass = size ? size : "regular"
  const disabledClass = disabled ? "disabled" : ""

  return (
    <StyledButton className={`${colorClass} ${sizeClass} ${disabledClass}`}>
      {title}
    </StyledButton>
  )
}

const StyledButton = styled.div`
  height: calc(var(--base-unit) / 1.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 1px;
  border-radius: 3px;
  transition: 0.2s;
  font-size: var(--text-lg);
  cursor: pointer;
  &.default {
    background-color: #fff;
    border: 1px solid var(--shade20);
    &:hover {
      background-color: var(--secondary-main);
    }
  }
  &.primary {
    background-color: var(--primary-main);
    &:hover {
      background-color: var(--primary-main-deep);
    }
  }
  &.secondary {
    background-color: var(--primary-light);
    &:hover {
      background-color: var(--primary-light-deep);
    }
  }
`

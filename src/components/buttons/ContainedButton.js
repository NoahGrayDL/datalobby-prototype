import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
/**
 *
 * @param {string} color primary, secondary, default
 * @param {string} size regular, thin
 * @param {boolean} disabled true or false
 */

export default function ContainedButton(props) {
  const { children, color, size, disabled } = props

  const colorClass = color ? color : "default"
  const sizeClass = size ? size : "regular"
  const isDisabled = disabled ? "disabled" : ""

  return (
    <StyledButton>
      <Button
        varient="contained"
        className={`button-base ${colorClass} ${sizeClass} ${isDisabled}`}
      >
        {children}
      </Button>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  .button-base {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 1px;
    border-radius: 3px;
    transition: 0.2s;
    &.regular {
      height: calc(var(--base-unit) / 1.5);
      font-size: var(--text-lg);
    }
    &.thin {
      height: calc(var(--base-unit) / 2);
      font-size: var(--text-md);
    }
  }
  .primary {
    background-color: var(--primary-main);
    &:hover {
      background-color: var(--primary-dark);
      color: #fff;
    }
  }
  .secondary {
    background-color: var(--primary-light);
    &:hover {
      background-color: var(--primary-light-deep);
    }
  }
  .default {
    background-color: var(--secondary-main);
    border: 1px solid var(--secondary-main-deep);
    &:hover {
      background-color: var(--secondary-main-deep);
    }
  }
  .disabled {
    background-color: var(--shade05);
    color: var(--shade20);
    cursor: not-allowed;
    &:hover {
      background-color: var(--shade05);
      color: var(--shade20);
    }
  }
`

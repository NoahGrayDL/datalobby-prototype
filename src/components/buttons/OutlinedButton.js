import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
/**
 *
 * @param {string} color primary, secondary, default
 * @param {string} size regular, thin
 * @param {boolean} disabled true or false
 */

export default function OutlinedButton(props) {
  const { children, color, size, disabled } = props

  const colorClass = color ? color : "default"
  const sizeClass = size ? size : "regular"
  const isDisabled = disabled ? "disabled" : ""

  return (
    <StyledButton>
      <Button
        varient="outlined"
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
    border: 1px solid var(--primary-main);
    color: var(--primary-main-deep);
    &:hover {
    }
  }
  .secondary {
    border: 1px solid var(--primary-light);
    color: var(--primary-light-deep);

    &:hover {
    }
  }
  .default {
    border: 1px solid var(--shade20);
    &:hover {
    }
  }
  .disabled {
    border: 1px solid var(--shade10);
    color: var(--shade10);
    cursor: not-allowed;
    &:hover {
    }
  }
`
export { StyledButton }

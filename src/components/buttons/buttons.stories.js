import React, { useState } from "react"
import { storiesOf } from "@storybook/react"

import ContainedButton from "./ContainedButton"
import OutlinedButton from "./OutlinedButton"

export default { title: "Buttons" }

export const Outlined = () => (
  <div>
    <div>
      <OutlinedButton color="primary">Primary</OutlinedButton>
      <OutlinedButton color="secondary">Primary</OutlinedButton>
      <OutlinedButton>Primary</OutlinedButton>
    </div>
    <div>
      <OutlinedButton size="thin" color="primary">
        Primary
      </OutlinedButton>
      <OutlinedButton size="thin" color="secondary">
        Primary
      </OutlinedButton>
      <OutlinedButton size="thin">Primary</OutlinedButton>
    </div>
    <div>
      <OutlinedButton disabled size="thin" color="primary">
        Primary
      </OutlinedButton>
      <OutlinedButton disabled size="thin" color="secondary">
        Primary
      </OutlinedButton>
      <OutlinedButton disabled size="thin">
        Primary
      </OutlinedButton>
    </div>
  </div>
)

export const Contained = () => (
  <ContainedButton color="primary">Primary</ContainedButton>
)

// storiesOf("Buttons", module).add("ContainedButton", () => (
//   <ContainedButton color="primary">Contained Button</ContainedButton>
// ))

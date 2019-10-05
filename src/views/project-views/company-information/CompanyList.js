import React, { useState } from "react"
import CompanyCard from "./CompanyCard"
//-----*-----*-----*-----*-----*-----//

export default function CompanyList(props) {
  const { entities, onRemove } = props
  return (
    <div>
      {entities.map(entity => {
        return (
          <CompanyCard data={entity} key={entity.name} onRemove={onRemove} />
        )
      })}
    </div>
  )
}

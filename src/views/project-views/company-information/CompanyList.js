import React from "react"
import CompanyCard from "./CompanyCard"
//-----*-----*-----*-----*-----*-----//

const CompanyList = props => {
  const { entities, onRemove, onToggle } = props
  return (
    <div>
      {entities.map(entity => {
        return (
          <CompanyCard
            data={entity}
            key={entity.name}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        )
      })}
    </div>
  )
}

export default React.memo(CompanyList)

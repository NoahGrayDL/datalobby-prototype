import React, { useCallback } from "react"
import { List } from "react-virtualized"
import CompanyCard from "./CompanyCard"
//-----*-----*-----*-----*-----*-----//

const CompanyList = props => {
  const { entities, onRemove, onToggle } = props

  const rowRenderer = useCallback(
    ({ index, isScrolling, key, style }) => {
      const entity = entities[index]
      return (
        <CompanyCard
          data={entity}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      )
    },
    [onRemove, onToggle, entities]
  )

  const listHeight = window.innerHeight - 64
  const listWidth = window.innerWidth - 240 - 40
  const rowHeight = 72

  return (
    // <List
    //   className="CompanyList"
    //   width={listWidth}
    //   height={listHeight}
    //   rowCount={entities.length}
    //   rowHeight={rowHeight}
    //   rowRenderer={rowRenderer}
    //   list={entities}
    //   style={{ outline: "none" }}
    // />
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

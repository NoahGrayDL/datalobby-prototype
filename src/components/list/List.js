import React from "react"
import ListItem from "./ListItem"
//-----*-----*-----*-----*-----*-----//

const List = props => {
  const { items, onRemove, onToggle } = props

  return (
    <div>
      {items.map(item => {
        return (
          <ListItem
            data={item}
            key={item.name}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        )
      })}
    </div>
  )
}

export default React.memo(List)

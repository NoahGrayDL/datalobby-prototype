import React from "react"
import ListItem from "./ListItem"
//-----*-----*-----*-----*-----*-----//

const List = props => {
  const { items, onRemove } = props

  return (
    <div>
      {items.map(item => {
        return <ListItem data={item} key={item.name} onRemove={onRemove} />
      })}
    </div>
  )
}

export default React.memo(List)

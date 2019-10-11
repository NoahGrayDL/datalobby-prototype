import React from "react"

export default function FSPaper(props) {
  const { match } = props
  const paperId = match.params.id
  return <div>FS Paper {paperId}</div>
}

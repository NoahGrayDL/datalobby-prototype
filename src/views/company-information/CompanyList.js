import React from "react"
import CompanyCard from "./CompanyCard"
//-----*-----*-----*-----*-----*-----//

const CompanyList = () => {
  return (
    <div>
      {DUMMY_COMPANY.map(item => {
        return <CompanyCard content={item} />
      })}
    </div>
  )
}

const DUMMY_COMPANY = [
  {
    name: "사성디스플레이(주)",
    type: "parent",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9"
  },
  {
    name: "사성물산(주)",
    type: "subsidiary",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9"
  },
  {
    name: "사성전기(주)",
    type: "subsidiary",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9"
  },
  {
    name: "사성공업(주)",
    type: "subsidiary",
    location: "Korea",
    currency: "KRW",
    timeZone: "GMT+9"
  }
]

export default CompanyList

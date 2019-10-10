const gla = require("./pcb-data/PCB_GLA_only_10-07-2019.json")
const current = require("./pcb-data/PCB_Current_BS_10-07-2019.json")
const prev = require("./pcb-data/PCB_Previous_BS_10-07-2019.json")
const fs = require("fs")
// console.log(gla)
// 필요없는 프로퍼티 삭제
const removeProperty = (obj, propertyName) => {
  let { [propertyName]: _, ...result } = obj
  return result
}
//captionSet 만들기
const captionObj = {}
const insert = item => {
  const ci = captionObj[item.key]
  if (ci) {
    ci.accountCodeList.push(item.accountCode.toString())
  } else {
    captionObj[item.key] = {
      captionId: item.key,
      captionTitle: item.title,
      accountCodeList: [item.accountCode.toString()]
    }
  }
}
const ggla = gla.map(e => {
  const captionTitle = e.caption && e.caption.trim()
  const captionKey = captionTitle && captionTitle.replace(/[^a-zA-Z]/g, "")
  // console.log(captionTitle, ' => ', captionKey, !captionTitle && e)
  captionKey &&
    insert({ key: captionKey, title: captionTitle, accountCode: e.accountCode })
  const c = removeProperty(e, "caption")
  c.accountCode = c.accountCode.toString()
  c["entity"] = "PCB"
  return c
})
// console.log(captionObj)
const captionSet = {
  captionSetTitle: "Financial Statement",
  captionList: []
}
Object.keys(captionObj).forEach(key =>
  captionSet.captionList.push(captionObj[key])
)
fs.writeFileSync("./pcb-data/dist/captionSet.json", JSON.stringify(captionSet))
//glAccount 만들기
console.log(ggla)
fs.writeFileSync("./pcb-data/dist/glAccount.json", JSON.stringify(ggla))
//entrySet 만들기
const tt = entry => {
  const { account, debit, credit } = entry
  return {
    account: {
      accountCode: account.accountCode.toString()
    },
    debit: {
      amount: debit.amount
    },
    credit: {
      amount: credit.amount
    }
  }
}
const ccur = current.map(tt)
const pprev = prev.map(tt)
fs.writeFileSync("./pcb-data/dist/entry-current.json", JSON.stringify(ccur))
fs.writeFileSync("./pcb-data/dist/entry-prev.json", JSON.stringify(pprev))

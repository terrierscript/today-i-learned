// import fetch from "isomorphic-unfetch"
import { getPagenateList } from "./files"
import qs from "querystring"
export const isomophic = async (apiName, exec) => {
  // @ts-ignore
  // console.log(process.browser)
  // @ts-ignore
  if (typeof fetch === "function") {
    console.log("fetch mode")
    return await fetch(apiName)
  } else {
    return exec()
    // return async (req, res) => {
    //   const result = await exec(req, res)
    //   res.setHeader("Content-Type", "application/json")
    //   res.statusCode = 200
    //   res.end(JSON.stringify(result))
    // }
  }
}

export const getBlogList = params => {
  return isomophic(`./api/blogs?${qs.stringify(params)}`, () => {
    console.log("exxx")
    return {} //getPagenateList(params.page, params.limit)
  })
}
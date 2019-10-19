console.log("files")

const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")
const grayMatter = require("gray-matter")

export const getMarkdownFiles = () => {
  console.log("getMarkdownFiles")
  const pagesPath = path.resolve("contents/pages")
  const markdowns = klawSync(pagesPath)
    .filter(p => {
      const ext = path.extname(p.path)
      return [".md"].includes(ext)
    })
    .map(item => {
      const name = item.path.replace(pagesPath, "")
      return {
        path: item.path,
        name
      }
    })
  return markdowns
}
export const getMatter = async path => {
  // @ts-ignore
  const content = await promisify(fs.readFile(path, { encoding: "UTF-8" }))
  console.log(content)
}
export const getPagenateList = (page = 1, limit = 10) => {
  console.log("getPagenateList")
  const items = exports.getMarkdownFiles()
  return items.slice((page - 1) * limit, limit)
}
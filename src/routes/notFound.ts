import Logger from "@/loaders/logger"
import httpErrors from 'http-errors'

export default (req:any, res:any, next: Function) => {
  next(httpErrors(404))
}
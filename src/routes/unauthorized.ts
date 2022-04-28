import {HttpError} from "http-errors"
import Logger from "@/loaders/logger"


export default (err: HttpError, req: any, res: any, next: Function) => {
  Logger.info(`【Unauthorized】${err.message}`)
  if(err.statusCode === 401) {
    return Logger.error(`【Unauthorized】${err.message}`)
  }
  next(err)
}
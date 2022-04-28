import express from 'express'

import indexRoute from "@/routes/index";
import userRoute from "@/routes/user";
import unauthorizedRoute from "@/routes/unauthorized";
import notFoundRoute from "@/routes/notFound";
import { HttpError } from 'http-errors';
import Logger from './logger';

export default ({ app }: { app: express.Application }) => {
  // routes and middleware
  app.use('/', indexRoute)
  app.use('/user', userRoute)

  /**
   * 404 Error Handler
   */
  app.use(notFoundRoute)

  // /**
  //  * Unanthorized Error Handler
  //  */
  // app.use(unauthorizedRoute)

  /**
   * Handle All Error
   */
  app.use((err: HttpError | Error, req: any, res: any, next: Function) => {
    console.log('Error Happened')
    Logger.error(err)
    res.status(err.statusCode || 500)
    res.render('error', {error: err})
  })
}

import express from 'express'
import path from 'path'
import expressLoader from './express'
import Logger from './logger'

// 获得app

export default ({ expressApp }: { expressApp: express.Application }) => {

  // view engine setup
  expressApp.set('views', path.join(__dirname, '../views/templates'));
  expressApp.set('view engine', 'jade');

  // static
  // expressApp.use(express.static(path.join(__dirname, 'views/assets')));
  
  expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded');
}

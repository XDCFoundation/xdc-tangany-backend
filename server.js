import APP from 'express'
import DBConnection from './config/dbConnection'
import Utils from './app/utils'
import Config from './config'
import routes from './routes'
import { httpConstants } from './app/common/constants'
// import EventController from "./app/modules/events";
import EventEmitter from './app/service/eventEmitter';

const app = new APP()
require('./config/express')(app)
global.lhtWebLog = Utils.lhtLog
global.eventEmitter = new EventEmitter();
app.use('/public', APP.static(__dirname + '/public'));
console.log("innnnnnnnnnnnnn")
class Server {
  async listen() {
    Promise.all([DBConnection.connect()]).then(() => {
      app.listen(Config.PORT)
      // EventController.addListeners();
      console.log("innnnnnnnnnnnnn",Config.PORT)

      Utils.lhtLog('listen', `Server Started on port ${Config.PORT}`, {}, 'Revathi', httpConstants.LOG_LEVEL_TYPE.INFO)
      routes(app)
      // require("./config/jobInitializer");
      // const conn = amqpController.conn(Config.AMQP_HOST_URL).catch(function (errr) {
      //   console.log(errr)
      // });
    }).catch(error => Utils.lhtLog('listen', 'failed to connect', { err: error }, 'Revathi', httpConstants.LOG_LEVEL_TYPE.ERROR))
  }
}


new Server().listen()

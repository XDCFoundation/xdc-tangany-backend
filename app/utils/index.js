/**
 * Created by AyushK on 18/09/20.
 */

'use strict'
import { apiFailureMessage, httpConstants } from '../common/constants'
import moment from 'moment'
export default class Utils {
  static response (res, data, message, success, code) {
    const responseObj = {
      responseData: data,
      message: message,
      success: success,
      responseCode: code
    }
    res.format({
      json: () => {
        res.send(responseObj)
      }
    })
  }

  static responseForValidation (res, errorArray, success, code = 400) {
    const responseObj = {
      message: 'Invalid Request',
      errors: errorArray,
      success: success,
      responseCode: code
    }
    res.format({
      json: () => {
        res.send(responseObj)
      }
    })
  }

  static handleError (err, req, res) {
    if (!res) { return false }
    err = err || {}
    const msg = err.message ? err.message : apiFailureMessage.INTERNAL_SERVER_ERROR
    const code = err.code ? err.code : httpConstants.RESPONSE_CODES.SERVER_ERROR
    this.response(res, {}, msg, httpConstants.RESPONSE_STATUS.FAILURE, code)
  }

  /**
   * This function is made to handle success and error callback!
   * @param promise
   * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
   */
  static async parseResponse (promise) {
    return promise.then(data => {
      return [null, data]
    }).catch(err => [err])
  }

  /**
   * To throw error
   * @param data
   * @param message
   * @param code
   * @returns {{code: number, data: *, message: *}}
   */
  static error (data, message, code = 500) {
    return {
      data: data,
      message: message,
      code: code
    }
  }

  static getFormattedDate () {
    const date = new Date()
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }

  /**
   * @param functionName
   * @param message
   * @param payload:should be in object form
   * @param developerAlias
   * @param logType ["INFO", "WARNING", "ERROR"]
   * @constructor
   */
  static lhtLog (functionName, message, payload, developerAlias, logType = 'INFO') {
    // console.log(`[ ${this.getFormattedDate()} ] ${logType}: ${functionName}: ${message}: ${JSON.stringify(payload)}: Developer : ${developerAlias}`)
  }
  static replaceSpecialCharacter(data){
    if(!data || !data.length)
      return
    return data.replace(/\_+/g, "&")
  }
  static removeSpaceAndSpecialChar=(data)=>{
    if(!data)
      return
    return data.replace(/[^A-Z0-9]+/ig, "_")
  }
  static timezoneCheck=(data)=>{
    if(!data)
      return
    var date = moment.unix(data);
    console.log(date.tz("America/Vancouver").format('ll HH:mm:ss Z'))
  }
}

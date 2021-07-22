const request = require('request')
// import request from 'request';
// import Constants from '../common/constants';
/**
 * execute Http Request
 */
class HttpService {
    static httpRequest(method, headers = {}, hostname, path = '', data = {}, url, requestID = '0') {
        return new Promise(function (fulfill, reject) {
            let options = {
                url: hostname + path,
                method: method,
                headers: headers,
                family: 4
            };
            if (headers && headers['Content-Type'] === "application/x-www-form-urlencoded")
                options.form = data;
            else
                options.json = data;
            request(options, function (error, response, body) {
                let payload = {
                    data: {
                        method: method,
                        hostname: hostname,
                        path: path,
                        url: url,
                        data: data,
                        headers: headers
                    }
                };
                if (error) {
                    data.error = error;
                    reject(error);
                } else {
                    data.response = response;
                    data.body = body;
                    fulfill(body);
                }
            });
        });
    }

    static async executeHTTPRequest(method, url, data, headers) {
        // static async executeHTTPRequest(method, hostname, path, data, headers) {
            console.log(url,method,data,headers,"errrrrr")

        return await new Promise(function (fulfill, reject) {

            request({
                url: url,
                method: method,
                headers: headers,
                json: data
            }, function (error, response, body) {
                console.log(error,"errrrrr")
                if (error) {
                    console.log('err' + error)
                    reject(error)
                } else {
                    fulfill(body)
                }
            })
        })
    }
}

module.exports = HttpService;


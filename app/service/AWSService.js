import config from '../../config/index';
import {genericConstants} from "../common/constants";
import AWS from "aws-sdk";
import request from "request";

export const getFile = (key, expiryTime = genericConstants.EXPIRY_TIME) => {
    console.log(key,"keyyyyy")
    AWS.config.update({
        accessKeyId: config.ACCESS_KEY_ID,
        secretAccessKey: config.SECRET_ACCESS_KEY
    });
    const params = {
        Bucket: config.BUCKET,
        Key: key,
        // Expires: expiryTime
    };
    const s3Bucket = new AWS.S3();

    return new Promise(function (resolve, reject) {
        s3Bucket.getObject(params, function (err, file) {
            if (err)
                return reject(err);
            else
                return resolve(file)
        });
    });
};
// export const uploadFile = async (url, key, bucket = config.S3_DOCUMENT_BUCKET) => {

export const uploadFile = async (url, key, bucket = config.S3_DOCUMENT_BUCKET) => {
    
    if (!url || !key)
        return false;

    const s3Bucket = new AWS.S3();
    AWS.config.update({
        accessKeyId: config.ACCESS_KEY_ID,
        secretAccessKey: config.SECRET_ACCESS_KEY
    });
    console.log(url,"url")
    // url= "./new.pdf";
    // let imageBuffer = await getImageBufferFromUrl(url);
    // if (!imageBuffer)
    //     return false;
    return new Promise(function (resolve, reject) {
        s3Bucket.upload({
            Bucket: bucket,
            // Bucket: bucket,"pdf-files"
            Key: key,
            Body: url,
            ContentType: 'application/pdf',
            ACL: 'public-read'
        }, function (error, response) {
            if (error)
                reject(error);
            resolve(response);
        });
    });
};

let getImageBufferFromUrl = (url) => {
    if (!url)
        return false;

    return new Promise((function (resolve, reject) {
        request({url: url, encoding: null}, function (err, res, body) {
            if (err)
                reject(err);
                console.log(body)
            resolve(body);
        });
    }));
};

export const getSignedURL = async(key, expiryTime = config.EXPIRY_TIME, bucket = config.BUCKET) => {
    return new Promise(function (resolve, reject) {
        const s3 = new AWS.S3();

        AWS.config.update({
            accessKeyId: config.ACCESS_KEY_ID,
        secretAccessKey: config.SECRET_ACCESS_KEY,
        region:"us-east-1"
        });
        if (!key) {
            return reject(false);
        }
        // let s3 = new AWS.S3();
        let paramsForGetURL = {Bucket: bucket, Key: "pdf-files/"+key, Expires: expiryTime};
        // console.log(paramsForGetURL,"tyyy")

        s3.getSignedUrl('getObject', paramsForGetURL, function (err, data) {
            if(err) {
                console.log(err,"errrr")
            }
            console.log(data,"data")
            return resolve(data);
        });
    });
}



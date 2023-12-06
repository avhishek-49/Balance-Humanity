'use strict';

((minioHelper) => {
  const Minio = require('minio');
  const Promise = require('bluebird');
  const axios = require('axios').default;
  const minioConstants = require('service_config/minio_constants');
  let minioClient;
  minioHelper.getInstance = () => {
    return minioClient;
  };
  // Instantiate the minio client with the endpoint
  minioHelper.init = () => {
    minioClient = new Minio.Client({
      endPoint: process.env.MINIO_HOST,
      port: parseInt(process.env.MINIO_PORT),
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
      useSSL: false
    });
    console.log(
      'Connected to Minio...',
      {
        endPoint: process.env.MINIO_HOST,
        port: 9000
      }
    );
    return minioClient;
  }

  minioHelper.objectStatus = (bucket, objectName)=>{
    return new Promise((resolve, reject)=>{

      try {
        minioClient.statObject(bucket, objectName, function(err, stat){
          if(err){
            resolve(err)
            return
          }
          resolve(stat)
        })
      }
      catch(error){
        return reject(error)
      }
    })
  }

  // check bucket in minio
  minioHelper.bucketExists = (bucketName) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.bucketExists(bucketName, (err, exists) => {
          if (err) {
            return resolve({
              status: false,
              message: err
            });
          } else if (!exists) {
            minioClient.makeBucket(bucketName, err => {
              if (err) {
                return resolve({
                  status: false,
                  message: 'Error on Bucket Creating'
                });
              }
              return resolve({
                status: true,
                message: 'Bucket Created'
              });
            })
          } else {
            return resolve({
              status: true,
              message: 'Bucket Available'
            });
          }
        })
      } catch (error) {
        return reject(error)
      }
    })
  };
  // make bucket in minio
  minioHelper.makeBucket = (bucketName) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.makeBucket(bucketName, err => {
          if (err) {
            return resolve({
              status: false,
              message: 'Error on Bucket Creating'
            });
          }
          return resolve({
            status: true,
            message: 'Bucket Created'
          });
        })
      } catch (error) {
        return reject(error)
      }
    })
  };
  // remove bucket from minio
  minioHelper.removeBucket = (bucketName) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.removeBucket(bucketName, err => {
          if (err) {
            return resolve({
              status: false,
              message: 'Error on Bucket Removing'
            });
          }
          return resolve({
            status: true,
            message: 'Bucket Removed'
          });
        })
      } catch (error) {
        return reject(error)
      }
    });
  };
  // put object in minio
  minioHelper.putObject = (bucketName, logogbime, file, metaData) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.putObject(bucketName, logogbime, file, metaData, err => {
          if (err) {
            return resolve({
              status: false,
              message: 'Error on Object Store'
            });
          }
          return resolve({
            status: true,
            message: 'Object Stored Successfully'
          });
        })
      } catch (error) {
        return reject(error)
      }
    })
  };
  // remove object from minio
  minioHelper.removeObject = (bucketName, object) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.removeObject(bucketName, object, err => {
          if (err) {
            return resolve({
              status: false,
              message: 'Error on Object Removing'
            });
          }
          return resolve({
            status: true,
            message: 'Object Removed Successfully'
          });
        })
      } catch (error) {
        return reject(error)
      }
    })
  };
  // list of objects in a bucket
  minioHelper.listObjects = (bucketName, prefix) => {
    return new Promise((resolve, reject) => {
      try {
        var data = []
        var stream = minioClient.listObjects(bucketName, prefix)
        stream.on('data', function (obj) { data.push(obj) })
        stream.on('end', function () {
          if (data.length > 1) {
            // if (data[0].name == process.env.LOGO && data[1].name == process.env.WATERMARK) {
            return resolve({
              status: true,
              message: 'objects found'
            });
            // }
          }
          return resolve({
            status: false,
            message: 'object not found'
          });
        })
        stream.on('error', function (err) {
          return resolve({
            status: true,
            message: err
          });
        })
      } catch (error) {
        return reject(error)
      }
    })
  };


  minioHelper.fetchImage = async (url) => {
    const image = await axios.get(url, {
      responseType: 'arraybuffer'
    })
    return image.data;
  }

  // put metadata of object in minio
  minioHelper.fPutObject = (bucketName, object) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.fPutObject(bucketName, object, err => {
          if (err) {
            return resolve({
              status: false,
              message: 'Error on Object Fetching'
            });
          }
          return resolve({
            status: true,
            message: 'Object Fetched Successfully'
          });
        })
      } catch (error) {
        return reject(error)
      }
    })
  };
  //
  minioHelper.presignedGetObject = (bucketName, object, expires) => {
    return new Promise((resolve, reject) => {
      try {
        minioClient.presignedGetObject(bucketName, object, expires, (err, presignedUrl) => {
          if (err) {
            return resolve({
              status: false,
              message: 'Error on Object Fetching'
            });
          }
          // console.log(presignedUrl)
          return presignedUrl;
        })
      } catch (error) {
        return reject(error)
      }
    })
  };

  minioHelper.detectMimeType = (base64file) => {
    // console.log(base64file)
    let signatures = {
      '/9j/': 'image/jpeg',
      iVBORw0KGgo: 'image/png'
    }

    for (let signature in signatures) {
      if (base64file.indexOf(signature) == 0) {
        return signatures[signature]
      }
    }
  }

  minioHelper.getPresignedUrl = async(bucket, object)=>{
    let objectStatus = await minioHelper.objectStatus(bucket, object);

    if(objectStatus.code){
      return {error: objectStatus.code};
    }
    return new Promise((resolve, reject)=>{
      let urlExpiresIn = minioConstants.PRESIGNED_URL_EXPIRES_IN;
      try{
        minioClient.presignedUrl('GET', bucket, object, urlExpiresIn, function(err, presignedUrl){
          if(err){
            resolve(err)
            return;
          }
          resolve(presignedUrl)
        })
      }catch(err){
        return reject(err)
      }
    })
  }
})(module.exports);
// hint for image upload in minio
// const file = fs.readFileSync('/home/manoj/bfi-tech/backend/common/mcs-common-service-node/server/assets/Global_IME_logo.png')
//   var metaData = {
//        'Content-Type': 'image/png',
//      }
//   minioHelper.putObject('globalstore', 'gbme.png', file, metaData ).then(message => console.log(message));

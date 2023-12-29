## A). Image upload and get from bucket

### 1). To upload an image into the bucket
- The user will have a single bucket to store his images.
#### Method : POST
#### Url : {{humanity}}/api/v1/image/upload

- Request Payload: This request is sent in form-data
    ```
    [{"key":"file","description":"","type":"file","enabled":true,"value":["/C:/Users/bibek.regmi/OneDrive/Pictures/ululu.png"],}
    ,{"key":"bucketName","value":"9898989898"},{"key":"customer_id","value":"2"}
    ,{"key":"image_type","value":"profile"}]
    ```

- Response Payload: The response for successfull message will be shown as:

    ```
    {
    "bucketImageList":{"status":200,"message":"bucket image relation successfully matched"},
    "putIntoBucket":{"status":200,"message":"Object Stored Successfully"}
    }
    ```


### 2.) To get image from the bucket.
- The user can request for the certain image type using the unique name, that is: image_type.
#### Method : GET
#### Url : {{humanity}}/api/v1/image/get

- Request Payload:
    ```
    {
    "customer_id":"2",
    "image_type":"profile"
    }
    ```

- Response Payload: The response for successfully image found is shown as:

    ```
    {
        "photo": "PCFkb2N...................",
        "mimeType": "image/png"
    }
    ```
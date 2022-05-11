# AWS_REKOGNITION_NODE

## Objective
How to use Amazon rekognization video APIs in your code. NodeJS is used as programming language.
<br /> The example are kept very simple and S3 bucket is used for fetching video in API.

## Documentation
https://docs.aws.amazon.com/rekognition/latest/dg/video-analyzing-with-sqs.html

## Create S3 Bucket
To keep the example simple, we are uploading video to S3 bucket so that we can call our video directly from S3 bucket in our node js code. 
<br />Bucket policy will be below.
<br />``{``
    <br />&emsp;``"Version": "2012-10-17",``
    <br />&emsp;``"Statement": [``
            <br />&emsp;&emsp;``{``
            <br />&emsp;&emsp;&emsp;``"Sid": "AWSRekognitionS3AclBucketRead20191011",``
            <br />&emsp;&emsp;&emsp;``"Effect": "Allow",``
            <br />&emsp;&emsp;&emsp;``"Principal": {``
                <br />&emsp;&emsp;&emsp;&emsp;``"Service": "rekognition.amazonaws.com"``
            <br />&emsp;&emsp;&emsp;``},``
            <br />&emsp;&emsp;&emsp;``"Action": [``
                <br />&emsp;&emsp;&emsp;&emsp;``"s3:GetBucketAcl",``
                <br />&emsp;&emsp;&emsp;&emsp;``"s3:GetBucketLocation"``
            <br />&emsp;&emsp;&emsp;``],``
            <br />&emsp;&emsp;&emsp;``"Resource": "arn:aws:s3:::bucketName"``
        <br />&emsp;&emsp;``},``
        <br />&emsp;&emsp;``{``
            <br />&emsp;&emsp;&emsp;``"Sid": "AWSRekognitionS3GetBucket20191011",``
            <br />&emsp;&emsp;&emsp;``"Effect": "Allow",``
            <br />&emsp;&emsp;&emsp;``"Principal": {``
                <br />&emsp;&emsp;&emsp;&emsp;``"Service": "rekognition.amazonaws.com"``
            <br />&emsp;&emsp;&emsp;``},``
            <br />&emsp;&emsp;&emsp;``"Action": [``
                <br />&emsp;&emsp;&emsp;&emsp;``"s3:GetObject",``
                <br />&emsp;&emsp;&emsp;&emsp;``"s3:GetObjectAcl",``
                <br />&emsp;&emsp;&emsp;&emsp;``"s3:GetObjectVersion",``
                <br />&emsp;&emsp;&emsp;&emsp;``"s3:GetObjectTagging"``
            <br />&emsp;&emsp;&emsp;``],``
            <br />&emsp;&emsp;&emsp;``"Resource": "arn:aws:s3:::bucketName/*"``
        <br />&emsp;&emsp;``},``
        <br />&emsp;&emsp;``{``
            <br />&emsp;&emsp;&emsp;``"Sid": "AWSRekognitionS3ACLBucketWrite20191011",``
            <br />&emsp;&emsp;&emsp;``"Effect": "Allow",``
            <br />&emsp;&emsp;&emsp;``"Principal": {``
                <br />&emsp;&emsp;&emsp;&emsp;``"Service": "rekognition.amazonaws.com"``
            <br />&emsp;&emsp;&emsp;``},``
            <br />&emsp;&emsp;&emsp;``"Action": "s3:GetBucketAcl",``
            <br />&emsp;&emsp;&emsp;``"Resource": "arn:aws:s3:::bucketName"``
        <br />&emsp;&emsp;``},``
        <br />&emsp;&emsp;``{``
            <br />&emsp;&emsp;&emsp;``"Sid": "AWSRekognitionS3PutObject20191011",``
            <br />&emsp;&emsp;&emsp;``"Effect": "Allow",``
            <br />&emsp;&emsp;&emsp;``"Principal": {``
                <br />&emsp;&emsp;&emsp;&emsp;``"Service": "rekognition.amazonaws.com"``
            <br />&emsp;&emsp;&emsp;``},``
            <br />&emsp;&emsp;&emsp;``"Action": "s3:PutObject",``
            <br />&emsp;&emsp;&emsp;``"Resource": "arn:aws:s3:::bucketName/*”,``
            <br />&emsp;&emsp;&emsp;``"Condition": {``
                <br />&emsp;&emsp;&emsp;&emsp;``"StringEquals": {``
                    <br />&emsp;&emsp;&emsp;&emsp;&emsp;``"s3:x-amz-acl": "bucket-owner-full-control"``
                <br />&emsp;&emsp;&emsp;&emsp;``}``
            <br />&emsp;&emsp;&emsp;``}``
        <br />&emsp;&emsp;``}``
    <br />&emsp;``]``
<br />``}``
## Clone and Setup
clone and setup the project in your local
<br/>create .env file on root level and paste the content of sample-env for setting the **AWS** credentials
## Install Dependencies
npm install
## Run
npm run start
## Output
You will get the maximum 10 label details from uploded video 
<br/>``JobID: 3a7e9b5b0d86e645e17adc2e671ba09fe61718bc7efcf3e94fffc8591b1617de``
<br/>``Retrieving results:``
<br/>``Retrieving Label Detection results``
<br/>``Timestamp: 0``
<br/>``Label: 'labelName'``
<br/>``Confidence: 91.5926284790039``
<br/>``Instances:``
   <br/>&emsp;``Parents:``
<br/>``Timestamp: 0``
<br/>``Successfully deleted.

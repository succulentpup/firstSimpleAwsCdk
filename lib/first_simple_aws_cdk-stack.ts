import { Bucket } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class FirstSimpleAwsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucket = new Bucket(this, 'FistBucket', { });

    new cdk.CfnOutput(this, 'FirstBucketCfnExport', {
      value: bucket.bucketName,
      exportName: 'FirstBucketName',
    })
  }
}

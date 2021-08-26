import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as FirstSimpleAwsCdk from '../lib/first_simple_aws_cdk-stack';
import '@aws-cdk/assert/jest';

test('FirstStack with output params', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FirstSimpleAwsCdk.FirstSimpleAwsCdkStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
        "Resources": {
            "FistBucket239E01BB": {
                "Type": "AWS::S3::Bucket",
                "UpdateReplacePolicy": "Retain",
                "DeletionPolicy": "Retain",
            },
        },
        "Outputs": {
            "FirstBucketCfnExport": {
                "Value": {
                    "Ref": "FistBucket239E01BB"
                },
                "Export": {
                    "Name": "FirstBucketName"
                }
            }
        },
    }, MatchStyle.EXACT))
});
test('Stack creating S3 bucket', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FirstSimpleAwsCdk.FirstSimpleAwsCdkStack(app, 'MyTestStack');
    // THEN
    expect(stack).toHaveResource('AWS::S3::Bucket');
});

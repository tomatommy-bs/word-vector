import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { vectorizeWordFunction, MODEL_ID } from './function/vectorize/resource';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
	auth,
	data,
	vectorizeWordFunction
});

backend.vectorizeWordFunction.resources.lambda.addToRolePolicy(
	new PolicyStatement({
		effect: Effect.ALLOW,
		actions: ['bedrock:InvokeModel'],
		resources: [`arn:aws:bedrock:*::foundation-model/${MODEL_ID}`]
	})
);

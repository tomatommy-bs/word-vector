import { defineFunction } from '@aws-amplify/backend';

export const MODEL_ID = 'amazon.titan-embed-text-v1';

export const vectorizeWordFunction = defineFunction({
	entry: './handler.ts',
	environment: {
		MODEL_ID
	},
	timeoutSeconds: 30,
	runtime: 20
});

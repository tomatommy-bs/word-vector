import {
	BedrockRuntimeClient,
	InvokeModelCommandInput,
	InvokeModelCommand
} from '@aws-sdk/client-bedrock-runtime';
import type { Handler } from 'aws-lambda';

// Constants
const AWS_REGION = process.env.AWS_REGION;
const MODEL_ID = process.env.MODEL_ID;

// Initialize Bedrock Runtime Client
const client = new BedrockRuntimeClient({ region: AWS_REGION });

export const handler: Handler = async (event) => {
	console.log('event', event);
	const { word } = event.arguments;
	const body = JSON.stringify({ inputText: word });
	const cmdInput: InvokeModelCommandInput = {
		body: body,
		modelId: MODEL_ID,
		contentType: 'application/json',
		accept: '*/*'
	};

	try {
		const command = new InvokeModelCommand(cmdInput);
		const response = await client.send(command);
		const responseBody = JSON.parse(new TextDecoder().decode(response.body));
		return responseBody.embedding;
	} catch (error) {
		console.error('Error in chat handler:', error);
		throw error; // Re-throw to be handled by AWS Lambda
	}
};

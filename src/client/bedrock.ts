import {
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	AWS_SESSION_TOKEN,
	AWS_REGION,
	NODE_ENV
} from '$env/static/private';
import {
	BedrockRuntimeClient,
	InvokeModelCommand,
	type InvokeModelCommandInput
} from '@aws-sdk/client-bedrock-runtime';

// Bedrockのクライアントを作成
const bedrockRuntimeClient = new BedrockRuntimeClient({
	region: AWS_REGION,
	credentials:
		NODE_ENV === 'development'
			? {
					accessKeyId: AWS_ACCESS_KEY_ID,
					secretAccessKey: AWS_SECRET_ACCESS_KEY,
					sessionToken: AWS_SESSION_TOKEN
				}
			: undefined
});
const config = {
	defaultModel: 'amazon.titan-embed-text-v1'
} as const;

export class BedrockApi {
	private client: BedrockRuntimeClient;

	constructor(args?: { bedrockRuntimeClient: BedrockRuntimeClient }) {
		this.client = args?.bedrockRuntimeClient ?? bedrockRuntimeClient;
	}

	getEmbedding = async (args: { input: string; modelId?: string }): Promise<number[]> => {
		const { input, modelId = config.defaultModel } = args;
		const body = JSON.stringify({ inputText: input });
		const contentType = 'application/json';
		const accept = '*/*';

		const cmdInput: InvokeModelCommandInput = {
			body: body,
			modelId: modelId,
			contentType: contentType,
			accept: accept
		};

		const command = new InvokeModelCommand(cmdInput);

		try {
			const response = await this.client.send(command);
			const responseBody = JSON.parse(new TextDecoder().decode(response.body));
			return responseBody.embedding;
		} catch (error) {
			console.error('Error calling Bedrock:', error);
			throw error;
		}
	};
}

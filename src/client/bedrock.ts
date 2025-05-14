import {
	BedrockRuntimeClient,
	InvokeModelCommand,
	type InvokeModelCommandInput
} from '@aws-sdk/client-bedrock-runtime';

// Bedrockのクライアントを作成
const bedrockRuntimeClient = new BedrockRuntimeClient();
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

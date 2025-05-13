import { BedrockApi } from '../../client/bedrock';
import type { Actions } from './$types';

const api = new BedrockApi();

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const text = formData.get('text');
		const vector = await api.getEmbedding({ input: text?.toString() ?? '' });
		return {
			vector
		};
	}
} satisfies Actions;

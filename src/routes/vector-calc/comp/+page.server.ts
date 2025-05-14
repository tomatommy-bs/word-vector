import { BedrockApi } from '../../../client/bedrock';
import { cosineSimilarity } from '../../../util/math';
import type { Actions } from './$types';

const api = new BedrockApi();

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const textA = formData.get('textA')?.toString();
		const textB = formData.get('textB')?.toString();

		const vectorA = await api.getEmbedding({ input: textA ?? '' });
		const vectorB = await api.getEmbedding({ input: textB ?? '' });
		const ans = cosineSimilarity(vectorA, vectorB);
		return {
			textA,
			textB,
			vectorA,
			vectorB,
			ans
		};
	}
} satisfies Actions;

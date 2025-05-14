import { BedrockApi } from '../../../client/bedrock';
import { cosineSimilarity, vectorSubtract } from '../../../util/math';
import type { Actions } from './$types';

const api = new BedrockApi();

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const textA = formData.get('textA')?.toString();
		const textB = formData.get('textB')?.toString();
		const textC = formData.get('textC')?.toString();

		const vectorA = await api.getEmbedding({ input: textA ?? '' });
		const vectorB = await api.getEmbedding({ input: textB ?? '' });
		const vectorC = await api.getEmbedding({ input: textC ?? '' });
		const subtractedVector = vectorSubtract(vectorB, vectorA);

		const ans = cosineSimilarity(subtractedVector, vectorC);
		return {
			textA,
			textB,
			textC,
			vectorA,
			vectorB,
			vectorC,
			ans
		};
	}
} satisfies Actions;

/**
 * コサイン類似度
 */
export const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
	if (vecA.length !== vecB.length) {
		throw new Error('Vectors must be of the same length');
	}

	const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
	const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
	const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
	return dotProduct / (magnitudeA * magnitudeB);
};

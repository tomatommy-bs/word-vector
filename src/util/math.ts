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

/**
 * ベクトル加算
 */
export const vectorAdd = (vecA: number[], vecB: number[]): number[] => {
	if (vecA.length !== vecB.length) {
		throw new Error('Vectors must be of the same length');
	}

	return vecA.map((val, i) => val + vecB[i]);
};

/**
 * ベクトル減算
 * vecA - vecB
 */
export const vectorSubtract = (vecA: number[], vecB: number[]): number[] => {
	if (vecA.length !== vecB.length) {
		throw new Error('Vectors must be of the same length');
	}

	return vecA.map((val, i) => val - vecB[i]);
};

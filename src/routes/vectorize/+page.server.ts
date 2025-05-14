import { amplifyClient } from '../../amplify-utils';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const text = formData.get('text');

		if (text == null) return null;

		const vector = await amplifyClient.queries.vectorize({ word: text.toString() });

		return {
			vector
		};
	}
} satisfies Actions;

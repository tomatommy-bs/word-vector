<script lang="ts">
	import { enhance } from '$app/forms';
	import { cosineSimilarity } from '../../../util/math';
	import type { PageProps, SubmitFunction } from './$types';
	let { form }: PageProps = $props();
	let log: { textA: string; textB: string; textC: string; ans: number }[] = $state([]);

	const submitHandler: SubmitFunction = ({ formData, action }) => {
		return async ({ update, result }) => {
			await update({ reset: false });
			if (result.type === 'success' && result.data) {
				const { ans } = result.data;
				log = [
					{
						textA: formData.get('textA') as string,
						textB: formData.get('textB') as string,
						textC: formData.get('textC') as string,
						ans: ans
					},
					...log
				];
			}
		};
	};
</script>

<div class="container mx-auto">
	<form class="flex items-center gap-4" method="POST" use:enhance={submitHandler}>
		<label class="input" for="textA"
			>テキストA
			<input required class="grow" type="text" id="textA" name="textA" />
		</label>

		<i class="text-2xl font-extrabold">+</i>

		<label class="input" for="textB"
			>テキストB
			<input required class="grow" type="text" id="textB" name="textB" />
		</label>

		<i class="text-2xl font-extrabold">=</i>

		<label class="input" for="textC"
			>テキストA+B
			<input required class="grow" type="text" id="textC" name="textC" />
		</label>

		<button class="btn btn-neutral" type="submit">submit</button>
	</form>

	<table class="table">
		<thead>
			<tr>
				<th>テキストA</th>
				<th>テキストB</th>
				<th>テキストA+B</th>
				<th>コサイン類似度</th>
			</tr>
		</thead>
		<tbody>
			{#each log as { textA, textB, textC, ans }}
				<tr>
					<td>{textA}</td>
					<td>{textB}</td>
					<td>{textC}</td>
					<td>{ans}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

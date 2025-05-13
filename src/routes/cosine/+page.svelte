<script lang="ts">
	import { cosineSimilarity } from '../../util/math';

	const create5DimVector = () => {
		const vector = [];
		for (let i = 0; i < length; i++) {
			vector.push(Math.random());
		}
		return vector;
	};

	let vector: { vA: number[]; vB: number[] } | null = $state(null);
	let length = $state(5);
</script>

<div class="container mx-auto">
	<h2>コサイン類似度実験室</h2>
	<section>
		<h3>ランダムベクトル生成</h3>
		<label class="input" for="length">
			ベクトルの次元数
			<input class="grow" type="number" id="length" bind:value={length} min="1" max="100" />
		</label>
		<button
			class="btn"
			onclick={() => {
				vector = {
					vA: create5DimVector(),
					vB: create5DimVector()
				};
			}}>生成</button
		>
		{#if vector}
			<p>コサイン類似度: {cosineSimilarity(vector.vA, vector.vB)}</p>
			<table class="table">
				<thead>
					<tr>
						<th>ベクトルA</th>
						<th>ベクトルB</th>
					</tr>
				</thead>
				<tbody>
					{#each vector.vA as _, idx}
						<tr>
							<td>{vector?.vA[idx]}</td>
							<td>{vector?.vB[idx]}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</section>
</div>

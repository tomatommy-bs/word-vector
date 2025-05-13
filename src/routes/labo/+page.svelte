<script lang="ts">
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>

<div class="container mx-auto">
	<form method="POST">
		<label for="text"
			>テキスト
			<input class="rounded-md border" type="text" id="text" name="text" />
		</label>

		<button type="submit">submit</button>
	</form>

	{#if form?.vector}
		<table>
			<thead>
				<tr>
					<th> vector </th>
				</tr>
			</thead>
			<tbody>
				{#each form.vector as v}
					<tr>
						<td>
							{v}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

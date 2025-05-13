<script lang="ts">
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>

<div class="container mx-auto">
	<form method="POST">
		<label class="input" for="text"
			>テキスト
			<input class="grow" type="text" id="text" name="text" />
		</label>

		<button class="btn btn-neutral" type="submit">submit</button>
	</form>

	{#if form?.vector}
		<table class="table">
			<thead>
				<tr>
					<th>#</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each form.vector as v, idx}
					<tr>
						<td>{idx}</td>
						<td>
							{v}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

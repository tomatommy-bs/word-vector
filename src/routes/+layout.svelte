<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<nav
		class="container mx-auto my-4 flex h-16 items-center justify-between rounded-2xl bg-gray-800 px-4 text-white"
	>
		<ul class="flex items-center gap-4">
			<li>
				<a href="/" class="uppercase">word vector</a>
			</li>
			<li>
				<a href="/vectorize">ベクトル化実験室</a>
			</li>
			<li>
				<a href="/cosine">コサイン類似度実験室</a>
			</li>
		</ul>
	</nav>
	<main>
		{@render children()}
	</main>

	<footer></footer>
</div>

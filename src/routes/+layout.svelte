<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<nav
		class="container mx-auto my-4 flex h-16 justify-between rounded-2xl bg-gray-800 px-4 text-white"
	>
		<ul class="flex gap-4">
			<li class="my-auto">
				<a href="/" class="uppercase">word vector</a>
			</li>
			<li class="my-auto">
				<a href="/vectorize">ベクトル化実験室</a>
			</li>
			<li class="my-auto">
				<a href="/cosine">コサイン類似度実験室</a>
			</li>
			<li class="my-auto">
				<a href="/vector-calc/comp">比較</a>
			</li>
			<li class="my-auto">
				<a href="/vector-calc/add">加算</a>
			</li>
			<li class="my-auto">
				<a href="/vector-calc/sub">減算</a>
			</li>
		</ul>
	</nav>
	<main>
		{@render children()}
	</main>

	<footer></footer>
</div>

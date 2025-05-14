<script lang="ts">
	import { Hub } from 'aws-amplify/utils';
	import '../app.css';
	import { getCurrentUser, signInWithRedirect, signOut } from 'aws-amplify/auth';

	let { children } = $props();

	Hub.listen('auth', async ({ payload }) => {
		console.log(payload);
		switch (payload.event) {
			case 'signInWithRedirect':
				getUser();
				break;
		}
	});

	function handleSignInClick() {
		signInWithRedirect();
	}

	function handleSignOutClick() {
		signOut();
	}

	let isAuthorizedUser = false;

	async function getUser() {
		try {
			const user = await getCurrentUser();
			if (user.userId) {
				isAuthorizedUser = true;
			}
		} catch (Exception) {
			isAuthorizedUser = false;
		}
	}

	getUser().then(console.log);
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
		<button type="button" onclick={handleSignOutClick}> ログアウト </button>
		<button type="button" onclick={handleSignInClick}> ログイン </button>
	</nav>
	<main>
		{@render children()}
	</main>

	<footer></footer>
</div>

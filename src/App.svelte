<script lang="ts">
	import DataPage from './components/DataPage.svelte';
	import DesignPage from './components/DesignPage.svelte';

	let activePage = DataPage;
</script>

<div id="app">
	<div id="nav">
		<div
			class="link"
			on:click={() => {
				activePage = DataPage;
			}}
			class:active={activePage == DataPage}
		>
			Data
		</div>
		<div
			class="link"
			on:click={() => {
				activePage = DesignPage;
			}}
			class:active={activePage == DesignPage}
		>
			Design
		</div>
	</div>
	<svelte:component this={activePage} />
</div>

<style lang="scss" global>
	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
	}
	#nav {
		display: flex;
		align-items: stretch;
		gap: 2px;
		flex-shrink: 0;
		height: 2em;
		background-color: rgb(48, 48, 48);
		z-index: 1;
		padding-top: 0.1em;

		.link {
			color: white;
			font-weight: bold;
			display: flex;
			align-items: center;
			padding: 0.5em;
			border-radius: 3px 3px 0 0;
			cursor: pointer;

			&:hover {
				background-color: grey;
			}

			&.active {
				background-color: white;
				color: black;
				text-decoration: underline;
			}
		}
	}
	#app > .page {
		overflow: hidden;
		flex-grow: 1;
		font-size: 10pt;
	}

	@media print {
		html,
		body {
			visibility: hidden;
		}

		#print-layout {
			position: absolute;
			left: 0;
			top: 0;
			* {
				visibility: visible;
			}
		}
	}
</style>

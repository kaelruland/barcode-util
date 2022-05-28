<script lang="ts">
	import { data, state } from '../stores';

	const loadTextToData = (text: string, useHeaders: boolean = false, delimiter: string = '\t') => {
		if (text.trim() == '') {
			return;
		}
		let rows = text.trim().split('\n');
		if (!rows) {
			return;
		}
		if (useHeaders) {
			let headers = rows
				.shift()
				?.split(delimiter)
				.map((h) => h.toLowerCase().replace(' ', '_'));
			if (headers) {
				$data.headers = headers;
			}
		} else {
			$data.headers = Array.from(Array(rows[0].split(delimiter).length).keys()).map((i) => `column${i}`);
		}
		$data.items = rows.map((row, index) => ({ id: index, values: row.split('\t') }));
	};
</script>

<div id="data-page" class="page panels">
	<div class="panel options">
		<h3>Load from text</h3>
		<div class="option">
			<input id="useHeaders" type="checkbox" bind:checked={$state.useHeaders} />
			<span>Use headers</span>
		</div>
		<textarea bind:value={$state.rawText} style="height: 20em;" />

		<button on:click={() => loadTextToData($state.rawText, $state.useHeaders)}>Load from text</button>
	</div>
	{#if $data.items.length}
		<div id="data-preview" class="panel">
			<h3>Current data ({$data.items.length} rows)</h3>
			<table>
				<thead>
					<tr>
						{#each $data.headers as header}
							<td>{header}</td>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each $data.items as item}
						<tr>
							{#each item.values as value}
								<td>{value}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="panel no-data">
			<div>Load some data to get started.</div>
		</div>
	{/if}
</div>

<style lang="scss">
	#data-page {
		.options {
			textarea {
				min-width: 20em;
			}
			.option {
				display: flex;
				gap: 0.5em;
			}
		}
	}

	#data-preview {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		table {
			border-collapse: collapse;
			color: rgb(39, 39, 39);
			width: 100%;
			border: 1px solid lightgrey;
			position: relative;
			thead {
				background-color: grey;
				color: white;
				position: sticky;
				top: 0;
			}
			tr {
				&:nth-child(even) {
					background-color: rgb(240, 240, 240);
				}
			}
			td {
				padding: 0.5em;
			}
		}
	}
</style>

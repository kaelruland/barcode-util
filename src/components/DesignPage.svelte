<script lang="ts">
	import PrintLayout from './PrintLayout.svelte';
	import PrintLayout2 from './PrintLayout2.svelte';
	import StepInput from './shared/StepInput.svelte';
	import { data, errors, options, state } from '../stores';
	import { bcidOptions } from '../options';
	import FontPicker from './shared/FontPicker.svelte';
	import Label from './Label.svelte';

	const handlePreviewScroll = (e: WheelEvent) => {
		if (e.ctrlKey) {
			e.preventDefault();
			if (e.deltaY > 0) {
				state.update((s) => ({ ...s, previewScale: Math.min(Math.max($state.previewScale - 10, 50), 250) }));
			} else {
				state.update((s) => ({ ...s, previewScale: Math.min(Math.max($state.previewScale + 10, 50), 250) }));
			}
		}
	};

	let units: string = $options.units;
	let prevBcid = $options.bcid;
	let prevBarcodeValueIndex = $options.barcodeValueIndex;
	errors.set([]);

	$: status = {
		total: $data.items.length,
		completed: Object.values($errors).filter((e) => e !== undefined).length,
		errors: Object.values($errors).filter((e) => e).length
	};

	$: {
		if (prevBcid != $options.bcid || prevBarcodeValueIndex != $options.barcodeValueIndex) {
			errors.set([]);
			prevBcid = $options.bcid;
			prevBarcodeValueIndex = $options.barcodeValueIndex;
		}
	}
</script>

<div id="design-page" class="page panels">
	<div class="panel options">
		<h3>Page</h3>
		<div class="group">
			<div class="option">
				<div>Width</div>
				<StepInput bind:value={$options.pageWidth} min={0} step={0.25} suffix={units} />
			</div>
			<div class="option">
				<div>Height</div>
				<StepInput bind:value={$options.pageHeight} min={0} step={0.25} suffix={units} />
			</div>
			<h4>Margins</h4>
			<div class="group">
				<div class="option">
					<div>Top</div>
					<StepInput bind:value={$options.pageMarginTop} min={0} step={0.125} suffix={units} />
				</div>
				<div class="option">
					<div>Bottom</div>
					<StepInput bind:value={$options.pageMarginBottom} min={0} step={0.125} suffix={units} />
				</div>
				<div class="option">
					<div>Left</div>
					<StepInput bind:value={$options.pageMarginLeft} min={0} step={0.125} suffix={units} />
				</div>
				<div class="option">
					<div>Right</div>
					<StepInput bind:value={$options.pageMarginRight} min={0} step={0.125} suffix={units} />
				</div>
			</div>
			<h4>Grid</h4>
			<div class="group">
				<div class="option">
					<div>Rows</div>
					<StepInput bind:value={$options.gridRows} min={1} step={1} integer={true} />
				</div>
				<div class="option">
					<div>Columns</div>
					<StepInput bind:value={$options.gridColumns} min={1} step={1} integer={true} />
				</div>
				<div class="option">
					<div>Transpose</div>
					<input type="checkbox" bind:checked={$options.transpose} />
				</div>
			</div>
		</div>
		<h3>Cells</h3>
		<div class="group">
			<h4>Margins</h4>
			<div class="group">
				<div class="option">
					<div>Top</div>
					<StepInput bind:value={$options.cellMarginTop} min={0} step={0.125} suffix={units} />
				</div>
				<div class="option">
					<div>Bottom</div>
					<StepInput bind:value={$options.cellMarginBottom} min={0} step={0.125} suffix={units} />
				</div>
				<div class="option">
					<div>Left</div>
					<StepInput bind:value={$options.cellMarginLeft} min={0} step={0.125} suffix={units} />
				</div>
				<div class="option">
					<div>Right</div>
					<StepInput bind:value={$options.cellMarginRight} min={0} step={0.125} suffix={units} />
				</div>
			</div>
			<div class="option">
				<div>Justify</div>
				<select bind:value={$options.cellJustifyContent}>
					<option value={'space-around'}>Space around</option>
					<option value={'space-between'}>Space between</option>
					<option value={'space-evenly'}>Space evenly</option>
					<option value={'center'}>Center</option>
					<option value={'start'}>Top</option>
					<option value={'end'}>Bottom</option>
				</select>
			</div>
		</div>
		<h3>Barcode</h3>
		<div class="group">
			<div class="option">
				<div>Barcode format</div>
				<select bind:value={$options.bcid}>
					{#each bcidOptions as option}
						<option value={option.value}>
							<div>{option.label}</div>
						</option>
					{/each}
				</select>
			</div>
			<div class="option">
				<div>Use column</div>
				<select bind:value={$options.barcodeValueIndex}>
					{#each $data.headers as header, i}
						<option value={i}>{header}</option>
					{/each}
				</select>
			</div>
			<div class="option">
				<div>Width</div>
				<StepInput
					bind:value={$options.barcodeWidthPercent}
					min={0}
					max={100}
					integer={true}
					step={5}
					suffix="%"
					disabled={$options.barcodePreserveAspectRatio == 'height'}
				/>
			</div>
			<div class="option">
				<div>Height</div>
				<StepInput
					bind:value={$options.barcodeHeightPercent}
					min={0}
					max={100}
					integer={true}
					step={5}
					suffix="%"
					disabled={$options.barcodePreserveAspectRatio == 'width'}
				/>
			</div>
			<div class="option">
				<div>Preserve aspect ratio</div>
				<select bind:value={$options.barcodePreserveAspectRatio}>
					<option value={undefined}>Off</option>
					<option value={'width'}>based on width</option>
					<option value={'height'}>based on height</option>
				</select>
			</div>
		</div>
		<h3>Header/Footer</h3>
		<div class="group">
			{#if $options.footer.show || $options.header.show}
				<div class="format-hints">
					{$data.headers.map((h) => `$${h}`).join(', ')}, &lt;b&gt;, &lt;i&gt;, &lt;div&gt; etc...
				</div>
			{/if}
			<div class="option">
				<h4>Header</h4>
				<input type="checkbox" bind:checked={$options.header.show} />
			</div>
			{#if $options.header.show}
				<div class="group">
					<div>Header Format</div>
					<textarea bind:value={$options.header.format} placeholder="(none)" />
					<FontPicker bind:style={$options.header.style} />
				</div>
			{/if}
			<div class="option">
				<h4>Footer</h4>
				<input type="checkbox" bind:checked={$options.footer.show} />
			</div>
			{#if $options.footer.show}
				<div class="group">
					<div>Format</div>
					<textarea bind:value={$options.footer.format} placeholder="(none)" />
					<FontPicker bind:style={$options.footer.style} />
				</div>
			{/if}
		</div>
	</div>

	{#if $data.items.length}
		<div class="panel preview" style={`--preview-scale:${$state.previewScale / 100}`} on:wheel={handlePreviewScroll}>
			<div id="preview-info">
				<div id="preview-scale">
					<StepInput bind:value={$state.previewScale} min={50} max={250} step={10} integer={true} --width="3em" suffix="%" />
					<div on:click={() => ($state.previewScale = 100)} style="cursor:pointer;font-size: 1.5em;">🔎</div>
				</div>
				<div id="status" class:error={status.errors} class:noerror={!status.errors && status.completed == status.total}>
					<span
						>{`Processed ${status.completed}/${status.total}`}
						<span>{`(${status.errors} errors)`}</span></span
					>
				</div>
			</div>
			<PrintLayout2>
				{#each $data.items as item}
					<Label {item} />
				{/each}
			</PrintLayout2>
		</div>
	{:else}
		<div class="panel no-data">Load some data to begin designing</div>
	{/if}
</div>

<style lang="scss">
	.options {
		.group {
			display: flex;
			flex-direction: column;
			gap: 0.25em;
			padding-left: 1em;
			margin-bottom: 0.5em;
			border-left: 1px solid lightgrey;
		}
		.option {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1em;
			& > * {
				flex-basis: 0;
				flex-grow: 1;
			}
			input[type='checkbox'] {
				flex-grow: 0;
			}
		}
		.format-hints {
			font-family: monospace;
			font-style: italic;
			color: dimgrey;
		}
		textarea {
			max-width: 100%;
		}
	}
	.preview {
		@media screen {
			position: relative;
		}
		padding: 0;
		min-width: max-content;
		--background-color: lightgrey;
		--line-color: grey;
		background: var(--background-color);
		background-size: calc(0.25in * var(--preview-scale, 1)) calc(0.25in * var(--preview-scale, 1));
		background-image: linear-gradient(var(--line-color) 1px, transparent 1px),
			linear-gradient(90deg, var(--line-color) 1px, transparent 1px);
		background-attachment: local;
		background-position: 50% 0;

		#preview-info {
			z-index: 100;
			position: fixed;
			display: flex;
			flex-direction: column;
			gap: 0.5em;
			margin: 0.5em;
			filter: opacity(80%);
		}

		#preview-scale {
			display: flex;
			align-items: center;
			gap: 0.5em;
			width: min-content;
		}

		#status {
			background-color: rgb(223, 206, 58);
			padding: 0.5em;
			border-radius: 3px;
			&.error {
				background-color: red;
				color: white;
			}
			&.noerror {
				background-color: green;
				color: white;
			}
		}
	}
</style>

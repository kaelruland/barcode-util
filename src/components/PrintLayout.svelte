<script lang="ts">
	import { identity } from 'svelte/internal';
	import { data, errors, options } from '../stores';
	import Barcode from './shared/Barcode.svelte';
	console.log($options);

	$: pageSize = $options.gridColumns * $options.gridRows;
	$: paginatedItems = paginateItems($data.items, pageSize);
	$: printStyleVars = Object.entries({
		'--page-width': `${$options.pageWidth}${$options.units}`,
		'--page-height': `${$options.pageHeight}${$options.units}`,
		'--page-margin-top': `${$options.pageMarginTop}${$options.units}`,
		'--page-margin-bottom': `${$options.pageMarginBottom}${$options.units}`,
		'--page-margin-right': `${$options.pageMarginRight}${$options.units}`,
		'--page-margin-left': `${$options.pageMarginLeft}${$options.units}`,
		'--grid-columns': $options.gridColumns,
		'--grid-rows': $options.gridRows,
		'--grid-auto-flow': $options.transpose ? 'column' : 'row',
		'--cell-margin-top': `${$options.cellMarginTop}${$options.units}`,
		'--cell-margin-right': `${$options.cellMarginRight}${$options.units}`,
		'--cell-margin-bottom': `${$options.cellMarginBottom}${$options.units}`,
		'--cell-margin-left': `${$options.cellMarginLeft}${$options.units}`,
		'--cell-justify-content': `${$options.cellJustifyContent}`,
		'--barcode-width-percent': `${$options.barcodeWidthPercent}%`,
		'--barcode-height-percent': `${$options.barcodeHeightPercent}%`,
		'--header-font-size': $options.header.style?.fontSize,
		'--header-font-family': $options.header.style?.fontFamily,
		'--footer-font-size': $options.footer.style?.fontSize,
		'--footer-font-family': $options.footer.style?.fontFamily
	})
		.map(([cssVar, value]) => `${cssVar}:${value}`)
		.join(';');

	const paginateItems = (items: any, pageSize: number): Array<Array<any>> => {
		let _items = [...items]; //As to not remove the items from the store. Could use slice() here but this looks tighter.
		let pages = [];
		while (_items.length) {
			pages.push(_items.splice(0, pageSize));
		}
		return pages;
	};

	const parseHeader = (item: Item, format: string) => {
		return $data.headers.reduce((s, headerName, i) => s?.replace(`$${headerName}`, item.values[i]), format);
	};

	//Sets error property on the item in the `data` store. undefined = not rendered yet, null = no error, anything else = bwip.js error
	const setError = (itemId: number, e: any) => {
		$errors[itemId] = e;
	};
</script>

<div id="print-layout" style={printStyleVars}>
	{#each paginatedItems as page}
		<div class="print-page">
			<div class="print-page-content">
				{#each page as item}
					{@const barcodeValue = String(item.values[$options.barcodeValueIndex])}
					{@const error = $errors[item.id]}
					<div class="print-cell" class:error>
						<div class="print-cell-content">
							{#if $options.header.show && $options.header.format != ''}
								<div class="header">
									{@html parseHeader(item, $options.header.format)}
								</div>
							{/if}
							<Barcode
								text={barcodeValue}
								bcid={$options.bcid}
								onRender={(e) => {
									setError(item.id, e);
								}}
							/>
							{#if $options.footer.show && $options.footer.format != ''}
								<div class="footer">
									{@html parseHeader(item, $options.footer.format)}
								</div>
							{/if}
						</div>
						{#if error}
							<div class="error-message">{error}</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	#print-layout {
		@media screen {
			gap: 2em;
			width: min-content;
			margin: 2em auto;

			transform: scale(var(--preview-scale, 1));
			transform-origin: 50% 0;
		}
		.print-page {
			width: var(--page-width, 8.5in);
			height: var(--page-height, 11in);
			display: flex;
			page-break-after: always;
			@media screen {
				background-color: white;
				box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
				margin-bottom: 1em;
			}

			.print-page-content {
				flex-grow: 1;
				margin-top: var(--page-margin-top, 0);
				margin-right: var(--page-margin-right, 0);
				margin-bottom: var(--page-margin-bottom, 0);
				margin-left: var(--page-margin-left, 0);
				display: grid;
				grid-template-columns: repeat(var(--grid-columns, 1), 1fr);
				grid-template-rows: repeat(var(--grid-rows, 1), 1fr);
				grid-auto-flow: var(--grid-auto-flow);

				@media screen {
					outline: 1px solid pink;
					outline-offset: -0.5px;
				}
				.print-cell {
					position: relative;
					display: flex;
					overflow: hidden;
					@media screen {
						outline: 1px dashed blue;
						outline-offset: -0.5px;
					}
					&.error {
					}
					.error-message {
						font-size: 12px;
						position: absolute;
						color: white;
						background-color: rgba(255, 0, 0, 0.75);
						outline: 1px solid red;
						padding: 0.5em;
						margin: 0.5em;
						border-radius: 3px;
						@media print {
							display: none;
						}
					}
				}
				.print-cell-content {
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: var(--cell-justify-content, space-between);
					margin-top: var(--cell-margin-top, 0);
					margin-right: var(--cell-margin-right, 0);
					margin-bottom: var(--cell-margin-bottom, 0);
					margin-left: var(--cell-margin-left, 0);
					overflow: hidden;

					@media screen {
						outline: 1px dashed #00a500;
						outline-offset: -0.5px;
					}
					:global(canvas) {
						height: var(--barcode-height-percent);
						width: var(--barcode-width-percent);
						max-width: 100%;
						max-height: 100%;
						aspect-ratio: 1/1;
					}

					.header,
					.footer {
						white-space: pre-wrap;
					}
					.header {
						font-size: var(--header-font-size, 10pt);
						font-family: var(--header-font-family, inherit);
					}
					.footer {
						font-size: var(--footer-font-size, 10pt);
						font-family: var(--footer-font-family, inherit);
					}
				}
			}
		}
	}
</style>

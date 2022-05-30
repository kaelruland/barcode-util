<script lang="ts">
	import type { SvelteComponent } from 'svelte/internal';
	// export let component: any | undefined = undefined;
	// export let propsList: Array<any> = [];
	console.log(typeof $$slots, $$slots);
	let pageSize: number = $$props['--grid-rows'] * $$props['--grid-columns'];
	$: printStyleVars = Object.entries({
		// '--page-width': `${$options.pageWidth}${$options.units}`,
		// '--page-height': `${$options.pageHeight}${$options.units}`,
		// '--page-margin-top': `${$options.pageMarginTop}${$options.units}`,
		// '--page-margin-bottom': `${$options.pageMarginBottom}${$options.units}`,
		// '--page-margin-right': `${$options.pageMarginRight}${$options.units}`,
		// '--page-margin-left': `${$options.pageMarginLeft}${$options.units}`,
		// '--grid-columns': $options.gridColumns,
		// '--grid-rows': $options.gridRows,
		// '--grid-auto-flow': $options.transpose ? 'column' : 'row',
		// '--cell-margin-top': `${$options.cellMarginTop}${$options.units}`,
		// '--cell-margin-right': `${$options.cellMarginRight}${$options.units}`,
		// '--cell-margin-bottom': `${$options.cellMarginBottom}${$options.units}`,
		// '--cell-margin-left': `${$options.cellMarginLeft}${$options.units}`,
		// '--cell-justify-content': `${$options.cellJustifyContent}`,
		// '--barcode-width-percent': `${
		// 	$options.barcodePreserveAspectRatio == 'height' ? 'unset' : $options.barcodeWidthPercent
		// }%`,
		// '--barcode-height-percent': `${
		// 	$options.barcodePreserveAspectRatio == 'width' ? 'unset' : $options.barcodeHeightPercent
		// }%`,
		// '--header-font-size': $options.header.style?.fontSize,
		// '--header-font-family': $options.header.style?.fontFamily,
		// '--footer-font-size': $options.footer.style?.fontSize,
		// '--footer-font-family': $options.footer.style?.fontFamily
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
</script>

<div class="print-layout">
	{#each Object.values($$slots) as page}
		<div class="print-page">
			<div class="print-page-content">
				{#each page as item}
					<div class="print-cell">
						<div class="print-cell-content">
							<slot />
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.print-layout {
		@media screen {
			gap: 2em;
			width: min-content;
			margin: 2em auto;
			//Zoom
			transform: scale(var(--preview-scale, 1));
			transform-origin: 50% 0;

			//Preview borders
			&.preview-borders {
				.print-page-content {
					outline: 1px solid rgb(255, 117, 244);
					outline-offset: -0.5px;
				}
				.print-cell {
					outline: 1px dashed rgb(0, 153, 255);
					outline-offset: -0.5px;
				}
				.print-cell-content {
					outline: 1px dashed #00a500;
					outline-offset: -0.5px;
				}
			}
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
				grid-auto-flow: var(--grid-auto-flow, row);
				.print-cell {
					position: relative;
					display: flex;
					overflow: hidden;
					z-index: 10;
				}
			}
		}
	}
</style>

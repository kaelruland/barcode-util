<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { toCanvas } from 'bwip-js';

	export let text: any = '';
	export let bcid: string = 'code128';
	let canvas: HTMLCanvasElement;

	const render = () => {
		setTimeout(() => {
			try {
				// if (canvas === null) {
				// 	console.log('canvas null');
				// 	return;
				// }
				canvas.getContext('2d')?.setTransform(1, 0, 0.5, 1, 0, 0.5);
				toCanvas(canvas, {
					bcid: bcid,
					text: text,
					scale: 1,
					height: 0
				});
			} catch (e) {
				canvas.getContext('2d')?.setTransform(1, 0, 0, 1, 0, 0);
				canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
			}
		});
	};

	afterUpdate(render);
</script>

<canvas bind:this={canvas} class="bwip-barcode" />

<style lang="scss">
	.bwip-barcode {
		image-rendering: pixelated;
	}
</style>

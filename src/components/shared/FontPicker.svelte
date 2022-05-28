<script lang="ts">
	import StepInput from './StepInput.svelte';
	import { fontOptions } from '../../options';

	let fontSize = 10;
	let fontFamily = 'Arial';
	export let style: any = { fontSize: `fontSize:${fontSize}pt`, fontFamily: fontFamily };
	$: style = { fontSize: `${fontSize}pt`, fontFamily: fontFamily };
</script>

<div class="font-picker" style="--font-family:{fontFamily}">
	<StepInput bind:value={fontSize} min={8} max={144} integer={true} suffix="pt" --width="2em" />
	<select bind:value={fontFamily}>
		{#each fontOptions as f}
			<option value={f} style={`font-family:${f};`}>{f}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.font-picker {
		display: flex;
		align-items: center;
		gap: 0.5em;
		select {
			font-family: var(--font-family, inherit);
		}
	}
</style>

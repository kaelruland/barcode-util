<script>
	//This component is for testing UI components
	import Barcode from '../components/shared/Barcode.svelte';
	import StepInput from '../components/shared/StepInput.svelte';

	let barcodeText = 'Hello';
	let barcodeBcid = 'code128';
	let valueA = 3;
</script>

<div class="ui-test">
	<Barcode text={barcodeText} bcid={barcodeBcid} />
	<input />
	<input type="number" />
	<select>
		{#each Array.from(Array(5).keys()) as i}
			<option>{i}</option>
		{/each}
	</select>
	<StepInput bind:value={valueA} step={0.125} round={3} min={0} />
</div>

<style lang="scss">
	.ui-test {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
	}
</style>

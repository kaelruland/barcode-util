<script lang="ts">
	import Barcode from './shared/Barcode.svelte';
	export let item: Item;
</script>

<div class="label">
	<Barcode text={item.values[0]} bcid="code128" />
</div>

<style lang="scss">
	.label {
		width: 100%;
		height: 100%;
	}
</style>

<script lang="ts">
	export let value: number = 0;
	export let step: number = 1;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let integer: boolean | undefined = false;
	export let round: number | undefined = undefined;
	export let suffix: string | undefined = undefined;
	export let disabled: boolean | undefined = false;
	let initialValue: number = value;
	let internalValue: number | string = value;
	let input: HTMLInputElement;

	const set = (v: number): void => {
		value = v;
		internalValue = v;
	};

	$: internalValue = value;

	const validate = (n: number | string): number => {
		if (typeof n == 'string') {
			n = parseFloat(n);
			if (isNaN(n)) {
				n = 0;
			}
		}
		if (typeof n != 'number') {
			n = initialValue;
		}
		if (min !== undefined && n < min) {
			n = min;
		}
		if (max !== undefined && n > max) {
			n = max;
		}
		if (integer) {
			n = n | 0;
		} else if (round) {
			n = parseFloat(n.toFixed(round));
		}
		return n;
	};

	const increment = () => {
		set(validate(value + step));
	};

	const decrement = () => {
		set(validate(value - step));
	};

	const handleChange = (e: any) => {
		set(validate(e.target.value));
	};

	const handleWheel = (e: any) => {
		e.preventDefault();
		if (e.wheelDelta > 0) {
			increment();
		} else {
			decrement();
		}
	};
</script>

<div class="step-input" class:disabled on:wheel={handleWheel}>
	<div class="step-button" on:click={decrement}>－</div>
	<input bind:this={input} bind:value={internalValue} on:change={handleChange} />
	{#if suffix}
		<div class="suffix" on:click={() => input.focus()}>{suffix}</div>
	{/if}
	<div class="step-button" on:click={increment}>＋</div>
</div>

<style lang="scss">
	@import '../../style/vars.scss';
	.step-input {
		display: flex;
		align-items: stretch;
		background-color: white;

		&:focus-within {
			box-shadow: $focus-box-shadow;
		}
		input {
			outline: none;
			border: 1px solid $input-border-color;
			text-align: center;
			width: var(--width, 4em);
			max-width: fit-content;
			border-left: none;
			border-right: none;
			z-index: 1;
			font-size: inherit;
			background-color: transparent;

			&:focus {
				outline: none;
				box-shadow: none;
			}
		}
		.step-button {
			width: 1.5em;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			line-height: 0%;
			border: 1px solid lightgrey;
			color: grey;
			font-family: Arial, Helvetica, sans-serif;
			font-weight: bold;
			cursor: pointer;
			user-select: none;
			background-color: rgb(250, 250, 250);

			&:hover {
				filter: brightness(0.9);
			}

			&:active {
				box-shadow: inset 0 0 0.5em 0px rgba(0, 0, 0, 0.25);
				filter: brightness(0.8);
			}
		}
		.suffix {
			border-top: 1px solid $input-border-color;
			border-bottom: 1px solid $input-border-color;
			display: flex;
			align-items: center;
			padding-right: 0.5em;
			color: grey;
			user-select: none;
		}
		&.disabled {
			filter: contrast(0.75);
			input {
				color: grey;
			}
			pointer-events: none;
		}
	}
</style>

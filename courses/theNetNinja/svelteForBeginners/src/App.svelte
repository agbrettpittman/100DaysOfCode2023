<script>
	let firstName = "John";
	let lastName = "Doe";
    let beltColor = "white"

    $: fullName = `${firstName} ${lastName}`
    $: {
        console.log(fullName)
        console.log(beltColor)
    }
</script>

<main>
	<p style="background-color: {beltColor};">{fullName} is a {beltColor} belt</p>
    <input type="text" bind:value={firstName} />
    <input type="text" bind:value={lastName} />
    <input type="text" bind:value={beltColor} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
    import AddPersonForm from "./AddPersonForm.svelte";
    import Modal from "./Modal.svelte";
    let showModal = false;
	let people = [
        {name: 'Yoshi', beltColor: 'green', age: 25, id: 1},
        {name: 'Mario', beltColor: 'black', age: 35, id: 2},
        {name: 'Luigi', beltColor: 'blue', age: 45, id: 3},
    ]

    function handleDelete(id){
        people = people.filter((x) => x.id != id)
    }

    function toggleModal(){
        showModal = !showModal
    }

    function addPerson(e){
        people = [...people, e.detail]
    }

</script>

<Modal message="Hey, I am a prop value" {showModal} on:click={toggleModal}>
    <div slot="title">
        <h3>Add a New Person</h3>
    </div>
    <AddPersonForm on:addPerson={addPerson} on:subDispatch={(e) => console.log(e)}/>
</Modal>

<main>
    {#each people as person (person.id)}
        <div class="person">
            <h4>{person.name}</h4>
            <p>{person.age} years old, {person.beltColor} belt.</p>
            <button on:click={() => handleDelete(person.id)}>Delete {person.name}</button>
            {#if person.beltColor === 'black'}
                <p><strong>MASTER NINJA</strong></p>
            {/if}
        </div>
    {:else}
        <p>There are no people to show...</p>
    {/each}
    <button on:click={toggleModal}>Open Modal</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
    .person {
        display: grid;
        grid-template-columns: auto 1fr auto repeat(3,200px);
        align-items: center;display: grid;
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
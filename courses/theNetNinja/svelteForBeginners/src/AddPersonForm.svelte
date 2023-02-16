<script>
    import { createEventDispatcher } from "svelte";
    import SubComponent from "./SubComponent.svelte";

    let dispatch = createEventDispatcher()

    let name
    let beltColor
    let age
    let skills = []

    function handleSubmit(){
        const person = {
            name, beltColor, age, skills, 
            id: Math.random()
        }
        dispatch("addPerson", person)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="number" placeholder="age" bind:value={age}>
    <p>Skills:</p>
    <label><input type="checkbox" bind:group={skills} value="fighting">fighting</label>
    <label><input type="checkbox" bind:group={skills} value="sneaking">sneaking</label>
    <label><input type="checkbox" bind:group={skills} value="running">running</label>
    <label>
        Belt Color:
        <select bind:value={beltColor}>
            <option value="black">black</option>
            <option value="orange">orange</option>
            <option value="brown">brown</option>
            <option value="white">white</option>
        </select>
    </label>
    <button>Add Person</button>
    <SubComponent />
</form>

<style>
    form {
        display: grid;
    }
    form button {
        margin-top: 20px;
    }
    form input[type="checkbox"] {
        margin-right: 5px;
    }
    form select {
        width: 100%;
    }
</style>
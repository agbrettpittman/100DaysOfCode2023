<script>
    export let type = 'primary'
    export let flat = false
    export let inverse = false
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click><slot /></button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }
    .primary {
        background-color: var(--red);
        color: white;
    }
    .secondary {
        background-color: var(--green);
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        background-color: white;
        color: var(--red);
        border: 2px solid var(--red);
    }
    .secondary.inverse {
        background-color: white;
        color: var(--green);
        border: 2px solid var(--green);
    }
</style>


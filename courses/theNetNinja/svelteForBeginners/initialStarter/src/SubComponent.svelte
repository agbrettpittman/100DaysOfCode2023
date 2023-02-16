<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()

</script>

<div on:click={() => dispatch("subDispatch", "wiii")}>I'm a sub component</div>
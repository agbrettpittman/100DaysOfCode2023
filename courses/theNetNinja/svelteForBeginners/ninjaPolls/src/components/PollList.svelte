<script>
    import PollDetails from "./PollDetails.svelte";
    import { flip } from "svelte/animate";
    import PollStore from '../stores/PollStore'
    import { fade, scale } from "svelte/transition";
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>

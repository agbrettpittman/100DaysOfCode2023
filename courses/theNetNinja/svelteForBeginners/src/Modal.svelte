<script>
    export let isPromo = false
    export let showModal = false
</script>

{#if showModal}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
        <slot name="title"></slot>
        <slot></slot>
    </div>
</div>
{/if}

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0,0,0,0.8)
    }
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: rgb(255, 81, 0);
        color: white;
    }

    .promo .modal {
        background: teal;
        color: white;
    }
</style>
<script>
    import CreatePollForm from "./components/CreatePollForm.svelte";
    import Footer from "./components/footer.svelte";
    import Header from "./components/header.svelte";
    import PollList from "./components/PollList.svelte";
    import Tabs from "./shared/Tabs.svelte";

    //tabs
    let items = ['Current Polls', 'Add New Poll']
    let activeItem = 'Current Polls'

    const tabChange = (e) => {
        activeItem = e.detail
    }

    function handleAdd(){
        activeItem = 'Current Polls'
    }

</script>

<Header />
<main>
    <Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
        <PollList />
    {/if}
	{#if activeItem === 'Add New Poll'}
        <CreatePollForm on:add={handleAdd}/>
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
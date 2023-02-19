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

    //polls

    let polls = [
        {
            id: 1,
            question: 'Python or Javascript?',
            answerA: 'Python',
            answerB: 'Javascript',
            votesA: 9,
            votesB: 15
        }
    ]

    function handleAdd(e){
        polls = [e.detail, ...polls]
        activeItem = 'Current Polls'
        console.log(polls);
    }

</script>

<Header />
<main>
    <Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
        <PollList {polls} />
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
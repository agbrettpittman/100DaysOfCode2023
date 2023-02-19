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

    function handleAdd(e){
        polls = [e.detail, ...polls]
        activeItem = 'Current Polls'
        console.log(polls);
    }

    function handleVote(e){
        const { id, option } = e.detail
        let copiedPolls = [...polls]
        let upvotedPoll = copiedPolls.find((poll) => poll.id == id)
        if (option === 'a') {
            upvotedPoll.votesA++
        } else if (option === 'b') {
            upvotedPoll.votesB++
        } 

        polls = copiedPolls;
    }

</script>

<Header />
<main>
    <Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
        <PollList on:vote={handleVote} />
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
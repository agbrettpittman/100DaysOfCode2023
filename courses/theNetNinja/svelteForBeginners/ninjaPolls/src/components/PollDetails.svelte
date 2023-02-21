<script>
    import Button from "../shared/Button.svelte";
    import Card from "../shared/Card.svelte";
    import PollStore from "../stores/PollStore";
    import { tweened } from 'svelte/motion'

    export let poll = {}

    $: totalVotes = poll.votesA + poll.votesB || 0
    $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0
    $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0

    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA)
    $: tweenedB.set(percentB)

    const handleVote = (option, id) => PollStore.update(currentPolls => {
        let copiedPolls = [...currentPolls]
        let upvotedPoll = copiedPolls.find((poll) => poll.id == id)

        if (option === 'a') upvotedPoll.votesA++
        else if (option === 'b') upvotedPoll.votesB++

        return copiedPolls;
    })        

    const handleDelete = () => PollStore.update(currentPolls => {
        return currentPolls.filter(currPoll => currPoll.id != poll.id)
    })

</script>

<Card class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={()=> handleVote('a', poll.id)}>
        <div class="percent percent-a" style="width: {$tweenedA}%"></div>
        <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={()=> handleVote('b', poll.id)}>
        <div class="percent percent-b" style="width: {$tweenedB}%"></div>
        <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete"><Button flat on:click={handleDelete}>Delete</Button></div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #efefef;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a {
        border-left: 4px solid rgba(217, 27, 66, 1);
        background: rgba(217, 27, 66, 0.2);
    }
    .percent-b {
        border-left: 4px solid rgba(69, 196, 150, 1);
        background: rgba(69, 196, 150, 0.2);
    }
    .delete {
        text-align: center;
        margin-top: 30px;
    }
</style>

<script>
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import { room } from "../../stores/room";
    import { user } from "../../stores/user";
    const dispatch = createEventDispatcher();
    function start() {
        dispatch("nextStep");
    }

    let name;
    let rounds = 1;
</script>

<div class="center" transition:slide>
    <img src="/skins/Boy.svg" alt="" />
    <h1>{$user.nickname}</h1>
    <button class="play" on:click={start}>Play</button>
</div>

<style>
    h1 {
        margin: 30px 0;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #ffbe00;
        color: white;
        font-size: 5rem;
    }
    .play {
        background: #ffbe00;
        border: 2px solid black;
        width: 150px;
        height: 60px;
        border-radius: 5px;
        font-size: 2rem;
        cursor: pointer;
    }
</style>

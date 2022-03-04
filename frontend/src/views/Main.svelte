<script>
    import { onMount, createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
    import WaitingRoom from "../components/Main/WaitingRoom.svelte";
    import CreateNickname from "../components/Main/CreateNickname.svelte";
    import SelectRoom from "../components/Main/SelectRoom.svelte";
    const dispatch = createEventDispatcher();
    onMount(() => {
        setTimeout(() => console.log("7re9 tizmok"), 3000);
    });

    export let step = 0;
</script>

<div class="center" transition:fade>
    <div class="status-bar">
        <div class="bar" class:colored={step >= 0} />
        <div class="bar" class:colored={step >= 1} />
        <div class="bar" class:colored={step >= 2} />
    </div>
    {#if step == 0}
        <CreateNickname on:nextStep={() => step++} />
    {:else if step == 1}
        <SelectRoom on:nextStep={() => step++} />
    {:else if step == 2}
        <WaitingRoom on:nextStep={() => dispatch("joinRoom")} />
    {:else}
        9ewed kho
    {/if}
</div>

<style>
    .status-bar {
        position: absolute;
        top: 200px;
        width: 80%;
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
        transform: translateY(-150px);
    }
    .bar {
        z-index: -1;
        width: 100px;
        height: 6px;
        background: white;
        border-radius: 5px;
    }
    .colored {
        background: #ffc700 !important;
    }
</style>

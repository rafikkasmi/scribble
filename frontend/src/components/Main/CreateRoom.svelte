<script>
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import { room } from "../../stores/room";
    const dispatch = createEventDispatcher();
    function onKeyPress(e) {
        if (e.key === "Enter") {
            room.set({ name, rounds });
            dispatch("nextStep");
        }
    }

    let name;
    let rounds = 1;
</script>

<div class="center" transition:slide>
    <h1>Create Room</h1>
    <input
        class="retro-input"
        type="text"
        placeholder="Room Name"
        on:keypress={onKeyPress}
        bind:value={name}
    />
    <div class="retro-input round-input">
        <p>Rounds:</p>
        <input
            class="input"
            type="number"
            bind:value={rounds}
            min="1"
            max="20"
        />
    </div>
</div>

<style>
    h1 {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #faf1ac;
        color: white;
        font-size: 4rem;
        margin: 20px 0;
    }
    .round-input {
        width: 80px;
        height: 60px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    .round-input p {
        font-size: 0.9rem;
    }
    .round-input input {
        background: transparent;
        border: none;
        width: 100%;
        padding-left: 30px;
        padding-top: 5px;
        font-size: 1rem;
    }
    .rounds::after {
        width: 100px;
        background-color: red;
        content: "Rounds";
    }
</style>

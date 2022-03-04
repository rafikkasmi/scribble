<script>
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import { room } from "../../stores/room";
    const dispatch = createEventDispatcher();
    function onKeyPress(e) {
        if (e.key === "Enter") {
            room.set({ name });
            dispatch("nextStep");
        }
    }

    let name;
</script>

<div class="center" transition:slide>
    <h1>Connect to Room</h1>
    <input
        class="retro-input"
        type="text"
        placeholder="Room Name"
        on:keypress={onKeyPress}
        bind:value={name}
    />
</div>

<style>
    h1 {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #faf1ac;
        color: white;
        font-size: 4rem;
        margin: 20px 0;
    }
</style>

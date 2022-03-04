<script>
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import { user } from "../../stores/user";
    const dispatch = createEventDispatcher();
    function onKeyPress(e) {
        if (e.key === "Enter") {
            user.set({ id: "nikberk", nickname, skin: null });
            dispatch("nextStep");
        }
    }

    export let nickname;
</script>

<div class="center" transition:slide>
    <img class="logo" src="/logo.png" alt="Logo" />
    <input
        class="retro-input"
        type="text"
        placeholder="NICKNAME"
        on:keypress={onKeyPress}
        bind:value={nickname}
    />
</div>

<style>
</style>

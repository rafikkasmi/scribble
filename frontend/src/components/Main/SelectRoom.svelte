<script>
    import ConnectToRoom from "./ConnectToRoom.svelte";
    import CreateRoom from "./CreateRoom.svelte";
    import { onMount, createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import { user } from "../../stores/user";
    const dispatch = createEventDispatcher();
    let step = "SELECT_SKIN";
    let boy;
    let girl;
    let rock;
    let currentSkin;
    onMount(() => (currentSkin = boy));
    function selectSkin(e) {
        let selectedElement = e.target;
        let classesOfCurrent = currentSkin.className;
        currentSkin.className = selectedElement.classList;
        selectedElement.className = classesOfCurrent;
        currentSkin = selectedElement;
        user.update((user) => ({
            ...user,
            skin: Number(currentSkin.getAttribute("value")),
        }));
    }
    function nextStep() {
        dispatch("nextStep");
    }
</script>

{#if step == "SELECT_SKIN"}
    <div class="center" transition:slide>
        <div class="selectSkin">
            <div class="skins">
                <img
                    on:click={selectSkin}
                    class="actif"
                    src="/skins/Boy.svg"
                    alt="Boy"
                    value={0}
                    bind:this={boy}
                />
                <img
                    on:click={selectSkin}
                    class="first"
                    src="/skins/Girl.svg"
                    alt="Girl"
                    value={1}
                    bind:this={girl}
                />
                <img
                    on:click={selectSkin}
                    class="second"
                    src="/skins/TheRock.svg"
                    alt="TheRock"
                    value={2}
                    bind:this={rock}
                />
            </div>
        </div>
        <h1>{$user.nickname}</h1>
        <div class="settings">
            <div class="room">
                <button on:click={() => (step = "CONNECT")} class="retro-button"
                    >Room Code</button
                >
                <button on:click={() => (step = "CREATE")} class="retro-button"
                    >Create Room</button
                >
            </div>
        </div>
    </div>
{:else if step == "CONNECT"}
    <ConnectToRoom on:nextStep={nextStep} />
{:else if step == "CREATE"}
    <CreateRoom on:nextStep={nextStep} />
{:else}
    9ewed kho
{/if}

<style>
    .skins {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
    }

    img {
        height: 100px;
        transition: 0.1s;
    }
    .actif {
        height: 200px;
        grid-column: 2;
        grid-row: 2;
        transform: translateY(-50px);
    }

    .second {
        grid-column: 1;
        grid-row: 1;
    }
    .first {
        grid-column: 3;
        grid-row: 1;
    }

    h1 {
        font-size: 2.3rem;
        color: white;
    }
    .retro-button {
        width: 300px;
        height: 50px;
        background: #faf1ac;
        border: 3px #ffc700 solid;
        outline: 1px solid black;
        text-align: center;
        font-size: 2rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: 0.5s;
    }
    .retro-button:hover {
        background: #f7eb93;
    }
    .retro-button:active {
        transform: scale(0.98);
    }
</style>

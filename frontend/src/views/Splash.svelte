<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    let progressBar;

    onMount(() => {
        setTimeout(() => console.log("7re9 tizmok"), 3000);
    });
</script>

<div class="center" transition:fade>
    <img class="logo" src="/logo.png" alt="Logo" />
    <div class="progressbar">
        <div class="internalPB animatePB" />
    </div>
</div>

<style>
    .logo,
    .progressbar {
        width: 500px;
        max-width: 90%;
    }
    .progressbar {
        height: 5px;
        background: white;
        margin: 10px;
        border-radius: 5px;
    }
    .internalPB {
        width: 0%;
        height: 80%;
        background: orange;
    }
    .animatePB {
        animation: fill 3s 1s ease forwards;
    }
    @keyframes fill {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
</style>

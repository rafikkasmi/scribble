<script>
    import { onMount } from "svelte";
    import Canvas from "../components/PlayRoom/Canvas.svelte";
    import { room } from "../stores/room";
</script>

<div class="container">
    <Canvas roomName={$room.name} />
</div>

<style>
    canvas {
        background: white;
    }
</style>

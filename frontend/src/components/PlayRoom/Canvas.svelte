<script>
    import { onMount } from "svelte";
    import CanvasFreeDrawing from "canvas-free-drawing";
    import io from "socket.io-client";
    const socket = io("http://localhost:8083");
    let x;
    function sendSignal() {
        socket.emit("test", x);
    }
    onMount(() => {
        context = canvas.getContext("2d");
        rect = canvas.getBoundingClientRect();
        onResize();
    });
    let canvas;
    let context;
    let rect;

    let current = {
        color: "black",
    };
    let drawing = false;
    export let roomName;

    socket.on(`draw-${roomName}`, onDrawingEvent);

    function drawLine(x0, y0, x1, y1, color, emit) {
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.stroke();
        context.closePath();

        if (!emit) {
            return;
        }
        let w = canvas.width;
        let h = canvas.height;

        socket.emit(
            "draw",
            {
                x0: x0 / w,
                y0: y0 / h,
                x1: x1 / w,
                y1: y1 / h,
                color: color,
            },
            roomName
        );
    }

    function onMouseDown(e) {
        drawing = true;
        current.x = e.clientX - rect.left;
        current.y = e.clientY - rect.top;
        console.log(e.clientX - rect.left);
    }

    function onMouseUp(e) {
        if (!drawing) {
            return;
        }
        drawing = false;
        drawLine(
            current.x,
            current.y,
            e.clientX - rect.left,
            e.clientY - rect.top,
            current.color,
            true
        );
    }

    function onMouseMove(e) {
        if (!drawing) {
            return;
        }
        drawLine(
            current.x,
            current.y,
            e.clientX - rect.left,
            e.clientY - rect.top,
            current.color,
            true
        );
        current.x = e.clientX - rect.left;
        current.y = e.clientY - rect.top;
    }

    function onColorUpdate(e) {
        current.color = e.target.className.split(" ")[1];
    }

    // limit the number of events per second
    function throttle(callback, delay) {
        let previousCall = new Date().getTime();
        return function () {
            let time = new Date().getTime();

            if (time - previousCall >= delay) {
                previousCall = time;
                callback.apply(null, arguments);
            }
        };
    }

    function onDrawingEvent(data) {
        let w = canvas.width;
        let h = canvas.height;
        drawLine(
            data.x0 * w,
            data.y0 * h,
            data.x1 * w,
            data.y1 * h,
            data.color
        );
    }

    // make the canvas fill its parent
    function onResize() {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
    }

    let parent;
</script>

<div>
    <div class="parent" bind:this={parent}>
        <canvas
            id="canvas"
            bind:this={canvas}
            on:mousedown={onMouseDown}
            on:mousemove={onMouseMove}
            on:mouseup={onMouseUp}
        />
    </div>
    <div class="toolbox">
        <!-- <button on:click={draw}>pen</button>
        <button on:click={clear}>clear</button> -->
    </div>
</div>

<style>
    .parent {
        width: 500px;
        height: 400px;
    }
    canvas {
        background: white;
        cursor: crosshair;
    }
</style>

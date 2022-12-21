<script setup lang="ts">
</script>

<template>
    <div class="background"></div>
</template>

<style scoped>
.background {
    width: 300px;
    height: 300px;
    background: url(../assets/earth.jpeg);
    border-radius: 50%;
    background-size: 610px;
    box-shadow: inset 8px 36px 80px 36px rgb(255, 255, 255),
        inset -6px 0 12px 4px rgba(255, 255, 255, 0.3);
    animation-name: rotate;
    animation-duration: 36s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: rotate;
    -webkit-animation-duration: 36s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    filter: grayscale(1) opacity(20%);
    rotate: -20deg;
    scale: 2;
}

@keyframes rotate {
    from {
        background-position: 0px 0px;
    }

    to {
        background-position: 610px 0px;
    }
}

@-webkit-keyframes rotate {
    from {
        background-position: 0px 0px;
    }

    to {
        background-position: 610px 0px;
    }
}
</style>
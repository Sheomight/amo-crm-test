<template>
  <div class="loader"></div>
</template>

<script setup>
</script>

<style>
.loader {
  min-width: 30px;
  min-height: 30px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
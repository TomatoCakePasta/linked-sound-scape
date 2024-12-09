<template>
  <div ref="canvasContainer">
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
      socket: Object,
      url: String
  });

  const socket = props.socket;

  const message = ref("");

  const playSound = () => {
    onClickPlay();
    console.log("onClickPlay");
  }

  socket.on("playEvent", (count) => {
    console.log(count)
    onClickPlay();
    drawLightning();
    message.value = "Bang !!!";
    setTimeout(() => {
      message.value = "";
    }, 100)
  });
  
</script>

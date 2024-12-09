<template>
  <div ref="canvasContainer">
    <v-btn @click="playSound()">Play</v-btn>
    <v-btn to="display">Display</v-btn>
  </div>
</template>

<script setup>
  const props = defineProps({
      socket: Object,
      url: String
  });

  const socket = props.socket;

  const playSound = () => {
    // console.log(props.socket, props.url);
    // alert("play");
    socket.emit("playEvent", 1);
  }
  
</script>

<template>
  <v-app>
    <v-main>
      <router-view :socket="socket" :url="url"/>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  import io from "socket.io-client";

  const PORT = 3001;
  // const url = `${import.meta.env.VITE_APP_URL}:${PORT}`;
  // const url = `localhost:${PORT}`;

  const socket = io.connect(url);
  // const socket = io.connect(url)

</script>

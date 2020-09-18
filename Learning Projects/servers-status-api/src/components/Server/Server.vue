<template>
  <div>
    <li
      v-bind:key="server.id"
      @click="selectServer()"
      class="list-group-item"
      style="cursor: pointer"
    >
      Server #{{ server.id }} :
      <strong>{{server.status}}</strong>
    </li>
  </div>
</template>

<script>
import { serverEvenBus } from "./../../main";
export default {
  props: ["server"],
  methods: {
    selectServer() {
      serverEvenBus.$emit("selectedServer", this.server);
    },
  },
};
</script>

<style scoped>
</style>

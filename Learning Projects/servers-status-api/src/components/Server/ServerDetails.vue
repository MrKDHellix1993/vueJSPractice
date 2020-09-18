<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="!serverInfo">
      <p>Server Details are currently not updated</p>
    </div>
    <div v-else>
      <h4>Server Details :</h4>
      <p><strong> Server #{{ serverInfo.id }}</strong> selected, Status: <strong> {{ serverInfo.status }} </strong> </p>
      <hr />
      <button @click="resetServerStatus">Change to Normal</button>
    </div>
  </div>
</template>

<script>
import { serverEvenBus } from "./../../main";
export default {
  created() {
    serverEvenBus.$on("selectedServer", (serverDetails) => {
      this.serverInfo = serverDetails;
    });
  },
  data() {
    return {
      serverInfo: null,
    };
  },
  methods :{
      resetServerStatus () {
          this.serverInfo.status = "Normal";
      }
  }
};
</script>

<style>
</style>

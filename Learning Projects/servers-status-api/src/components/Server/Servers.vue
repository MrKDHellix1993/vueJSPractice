<template>
   <div class="col-xs-12 col-sm-6">
     <ul class="list-group">
     <app-server v-for="server in serverList" v-bind:key="server.id" :server="server"></app-server>
     </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  data: function () {
    return {
      ServerStatus: undefined,
      serverList : [
        {
        id : 1,
        status : "Normal"
      },
        {
        id : 2,
        status : "Critical"
      },
        {
        id : 3,
        status : "Running"
      },
        {
        id : 4,
        status : "Terminated"
      },
        
      ] 
    };
  },
  props: {
    status: {
     type : String
    },
  },
  watch: {
  status : function(val) {
    this.ServerStatus = val;
  }
},
  methods: {
    switchStatus() {
      this.status = this.status == "Running" ? "Stopped" : "Running";
    }
  },
  components : {
    appServer : Server
  }
};
</script>

<style>
</style>

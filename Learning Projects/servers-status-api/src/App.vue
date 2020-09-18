<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <button @click="status = 'Running'">Start All Server</button>
    <button @click="status = 'Stoped'">Shutdown All Server</button>
    <hr>
    <p>
      All Server Status :
      <strong>{{ status }}</strong>
    </p>
    <hr />
    <div class="row">
      <servers :status="status"  @changedStatus="handleChange($event)"></servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer,
  },
  data: function () {
    return {
      status: "Running",
    };
  },
  methods :{
     handleChange(event){
       this.status = event; 
     } 
  }
};
</script>

<style>
</style>

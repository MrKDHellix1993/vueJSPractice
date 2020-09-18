import Vue from 'vue'
import App from './App.vue'
export const serverEvenBus = new Vue({
  methods :{
    sendServerDetails(server) {
      this.$emit('selectedServer',server);
    },
    resetServerStatus(resetedServer) {
      this.$emit('resetedServer',resetedServer);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

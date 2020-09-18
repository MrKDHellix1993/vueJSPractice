<template>
  <div  class="container">
    <div class="row">
      <div class="col-xs-12 panel-width">
        <app-quotes>
          <h2 slot="title">Breaking Bad Quotes</h2>
          <p>"Good guys never get ink like the bad guys do"
             <p style="float : right" >- Hank Schrader</p>
             <p slot="subtitle">Say my Name!!!</p>
          <!-- Naming Slots Example ...
          <p slot="body">"Good guys never get ink like the bad guys do"
             <p  slot="body" style="float : right" >- Hank Schrader</p> -->
        </p>
        </app-quotes>
      </div>
    </div>
  </div>
</template>

<script>
import Quotes from "./components/Quotes.vue";
export default {
  data() {
    return {
      msg: "Welcome Daily Quotes!!!",
    };
  },
  components: {
    appQuotes: Quotes,
  },
};
</script>

<style scoped>
.panel-width {
  width: 100%;
}
h2{
  color: red;
}
</style>

<template>
  <div class="row">
    <quote v-for="(quote,index) in quotes" @click.native="emitQuoteIndex(index)">
      <p>{{quote}}</p>
    </quote>
  </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  methods: {
    emitQuoteIndex(index) {
      this.$emit("selectedQuoteIndex", index);
    },
  },
  components: {
    quote: Quote,
  },
};
</script>
<style scoped>
</style>
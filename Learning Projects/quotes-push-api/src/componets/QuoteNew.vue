<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button
          :disabled="toggleAddQuoteBtn()"
          class="btn btn-primary"
          @click.prevent="createNew"
        >Add quote</button>
      </div>
    </form>
  </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
  props: ['quotesMaxCount', 'quotes'],
  data() {
    return {
      quote: undefined,
    };
  },
  methods: {
    createNew() {
      self = this;
      self.$emit("quoteAdded", self.quote);
      self.quote = undefined;
    },
    toggleAddQuoteBtn : function(){
      self = this;
      return !self.quote;
    },
  },
};
</script>
<style>
</style>
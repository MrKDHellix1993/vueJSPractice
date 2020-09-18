<template>
  <div class="container">
    <br />
    <header-app :quoteCount="quotes.length" :maxQuoteCount="maxQuotesCounter"></header-app>
    <quoteNew :quotesMaxCount="maxQuotesCounter" :quotes="quotes" @quoteAdded="pushNewQuotes"></quoteNew>
    <quote-grid :quotes="quotes" @selectedQuoteIndex="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info : Click on the Quote to Delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesGrid from "./componets/QuotesGrid.vue";
import QuoteNew from "./componets/QuoteNew.vue";
import HeaderApp from "./componets/HeaderComp.vue";
export default {
  data() {
    return {
      quotes: ["Just a Normal Quote"],
      maxQuotesCounter: 10,
    };
  },
  methods: {
    pushNewQuotes(event) {
      if (event) {
        if (this.quotes.length >= this.maxQuotesCounter) {
          return alert("You have reached maximum Quotes Quota Limit. Kindly Delete some old ones :D");
        }
        this.quotes.push(event);
      }
    },
    deleteQuote(index) {
      if (this.quotes) {
        this.quotes.splice(index, 1);
      }
    },
  },
  components: {
    quoteGrid: QuotesGrid,
    quoteNew: QuoteNew,
    headerApp: HeaderApp,
  },
};
</script>

<style>
</style>

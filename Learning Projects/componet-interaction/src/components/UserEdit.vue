<template>
  <div class="component">
    <h3>You may edit the User here [Child-2]</h3>
    <p>
      User Age :
      <strong>{{userAge}}</strong>
      <br>
      <hr>
      <button @click="updateAge">Update Age</button>
    </p>
      </div>
</template>

<script>
import {eventBus} from './../main';
export default {
  props: {
    userAge: Number,
    ageModifyHandler : Function
  },
  watch: {
    userAge: function (val) {
      this.userAgeEdit = val;
    },
  },
  methods: {
    updateAge: function () {
      this.userAge = 30;
      eventBus.ageChangeHandler(this.userAge);
      // this.$emit('update-age', this.userAgeEdit);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>

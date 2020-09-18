<template>
  <div class="component">
    <h3>See User Details here [Child-1]</h3>
    <p>Many Details</p>
    <p>
      Logged In User Name :<strong>{{userName}}</strong>
       <br>
       User Age : <strong>{{userAge}}</strong>
      <hr>
      <!-- <button @click="resetUserName" >Reset Name</button> -->
      <button @click="resetFn()" >Reset Name</button> 
      <!-- W/o writitng method in child user Parent method via Props -->
    </p>
  </div>
</template>

<script>
import {eventBus} from './../main';
export default {
   created(){
    eventBus.$on('update-age', (age)=>{
      this.userAge = age;
    });
  },
  data: function () {
    return {
      userNameChild: undefined,
    };
  },
  props: {
    userName: {
      type: String,
    },
    resetFn : Function,
    userAge : Number
  },
  watch: {
    userName: function (val) {
      this.userNameChild = val;
    },
  },
  methods: {
    resetUserName() {
      this.userNameChild = "Mr. KD";
      this.$emit("reseted-value", this.userNameChild);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

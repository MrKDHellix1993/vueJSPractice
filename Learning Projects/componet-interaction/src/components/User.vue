<template>
  <div class="component">
    <h1>The User Component [Parent]</h1>
    <p>
      Welcome
      <strong>{{userNameParent}}</strong>
      <input id="username" type="text" :value="userNameParent" @change="changeUserName()" />
      <button @click="changeNameFromParent">Change Name</button>
       <br>
       User Age : <strong>{{age}}</strong>
      <hr>
    </p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :userName="userNameParent"
          @reseted-value="resetNameFromedChild($event)"
          :userAge="age"
          :resetFn="resetNameFromParent"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" :ageModifyHandler="updatedAge"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
// import {eventBus} from './../main';

export default {
  data: function () {
    return {
      userNameParent: "Mr. KD",
      age: 27,
      userNameTemp: undefined,
    };
  },
  methods: {
    changeUserName() {
      this.userNameTemp = event.target.value;
    },
    changeNameFromParent() {
      this.userNameParent = this.userNameTemp;
    },
    resetNameFromParent() {
      if (this.userNameParent == "Mr. KD") {
        document.getElementById("username").value = this.userNameParent;
        this.userNameTemp = event;
      } else {
        this.userNameParent = "Mr. KD";
        this.userNameTemp = event;
      }
    },
    resetNameFromedChild(event) {
      if (this.userNameParent == event) {
        document.getElementById("username").value = this.userNameParent;
        this.userNameTemp = event;
      } else {
        this.userNameParent = event;
        this.userNameTemp = event;
      }
    },
     updatedAge: function (val) {
      this.age = val;
    //   this.$emit('update-age', this.userAgeEdit);
    },
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>

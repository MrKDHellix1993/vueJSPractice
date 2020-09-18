<template>
  <div>
    <div>
      <slot name="title"></slot>
      <span style="color : #ccc">
        <slot name="subtitle">The Subtitle</slot>
      </span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>    
<script>
export default {};
</script>
<style scoped>
div {
  margin: 30px auto;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  text-align: center;
}
</style>


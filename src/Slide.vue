<template>
  <div class='slide'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log(this.$listeners)
  }
}
</script>

<style lang='scss' scoped>
$time-of-transition: 0.5s;

.slide {
  flex: 0 0 200px;
  height: 200px;

  border: 1px solid black;
  overflow: hidden;
}
</style>

import Vue from 'vue'

export default Vue.component('carousel-transition', {
  functional: true,
  render (createElement, context) {
    const data = {
      on: {
        beforeEnter (el) {
          console.log(el)
        }
      }
    }
    return createElement('transition-group', data, context.children)
  }
})

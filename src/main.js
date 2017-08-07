import Vue from 'vue'
import Carousel from './Carousel'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Carousel/>',
  components: { Carousel }
})

<template>
  <div class="carousel-container">
    <transition-group 
      name="carousel-animation" 
      tag="div" 
      class="carousel">
      <slide 
        v-for="slide in slides" 
        :key="slide.title">
        {{ slide.title }}
        {{ slide.content }}
        <button></button>
      </slide>
    </transition-group>
    <div class='carousel-controls'>
      <button @click="previous">prev</button>
      <button @click="next">next</button>
     </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import Slide from './Slide'

export default {
  name: 'carousel',

  data () {
    return {
      slides: [
        {
          title: 'The Letter A',
          content: 'I am the first letter. None is like me.'
        },
        {
          title: 'The Letter B',
          content: 'I am the second letter'
        },
        {
          title: 'The Letter C',
          content: 'I am the third letter'
        },
        {
          title: 'The Letter D',
          content: 'I am the fourth letter'
        },
        {
          title: 'The Letter E',
          content: 'I am the fifth letter'
        },
        {
          title: 'The Letter F',
          content: 'I am the sixth letter'
        },
        {
          title: 'The Letter G',
          content: 'I am the seventh letter'
        }
      ]
    }
  },

  components: {
    Slide
  },

  methods: {
    previous: throttle(function () {
      this.slides = [ this.slides.pop() ].concat(this.slides)
    }, 500),
    next: throttle(function () {
      this.slides = this.slides.concat(this.slides.shift())
    }, 500)
  }
}
</script>

<style lang='scss' scoped>

.carousel-container {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel {
  display: flex;
  justify-content: center;
}

.carousel-controls button {
  font-size: 3em;
  margin: 0 1em;
  padding: 0.2em;
}

.carousel-animation-move {
  transition: transform 0.5s;
}
</style>

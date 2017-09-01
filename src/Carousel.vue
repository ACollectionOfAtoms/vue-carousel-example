<template>
  <div class='carousel-view'>
    <h1 class='carousel-view__header'> Transition-Group Carousel Example </h1>
    <transition-group
      name='carousel'
      class='carousel'
      tag="div">
      <div
        v-for="(slide, index) in slides" 
        class='slide'
        :key="slide.id">
        <img class='slide__image' :src='slide.imgLink'>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',

  data () {
    return {
      slides: [
        {
          imgLink: require('./assets/catA.jpg'),
          id: 1
        },
        {
          imgLink: require('./assets/catB.jpg'),
          id: 2
        },
        {
          imgLink: require('./assets/catC.jpg'),
          id: 3
        },
        {
          imgLink: require('./assets/catD.jpg'),
          id: 4
        },
        {
          imgLink: require('./assets/catE.jpg'),
          id: 5
        }
      ]
    }
  },

  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>

<style>
body, html {
  margin: 0;
  background-color: #BACAB9;
  font-family: "Comic Sans MS", cursive, sans-serif;
}

.carousel-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(rgba(176, 212, 214, 1) 20%, transparent 0);
  background-size: 20em 20em;
  background-position: left;
}

.carousel-view__header {
  color: #fff;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #A47565;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25em;
  min-height: 25em;

  border: 1em dashed #BACAB9;
  overflow: hidden;
  background-color: #83B4AE;
}

.slide {
  transform: translateZ(0) scale(1.0, 1.0);
  height: 20em;
  border: 0.6em dashed #A47565;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  opacity: 1;

  margin: 1em;
  flex: 0 0 20em;
}

.slide:first-of-type {
  opacity: 0;
}

.slide:last-of-type {
  opacity: 0;
}

.slide__image {
  width: auto;
  height: 110%;
  display: flex;
}

.carousel-controls {
  margin: 2em;
}

.carousel-controls__button:hover {
  text-decoration: underline;
  cursor: pointer;
}

.carousel-controls__button:nth-of-type(1):hover {
  animation: underlineToDots 0.5s infinite linear;
}
.carousel-controls__button:nth-of-type(2):hover {
  animation: underlineToDots 0.5s infinite linear;
}

@keyframes underlineToDots {
  0% {
    text-decoration: underline;
    text-decoration-style: dashed;
  }
  100% {
    text-decoration-style: solid;
  }
}

.carousel-controls__button {
  font-family: inherit;
  outline: none;
  color: #fff;
  border-radius: 10%;
  border: 5px dashed #A47565;
  background-color: #83B4AE;
  margin: 0 2em;
  font-size: 3em;
}
</style>

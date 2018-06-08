<template>
<div class="hello">
  <canvas id="myCanvas" ref="canvas" width="1000" height="600"></canvas>
  <img id="hero" ref="hero" src="../assets/sp.png" alt="hero">
  <div></div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      ctx: '',
      cX: 0,
      cY: 0,
      cWidth: 20,
      cHeight: 20,
    }
  },
  mounted() {
    var canvas = this.$refs.canvas;
    this.ctx = canvas.getContext("2d");
    this.drawHero()
  },
  methods: {
    drawHero: function() {
      var img = this.$refs.hero;
      this.ctx.drawImage(img, 28, 21, 20, 20, this.cX, this.cY, this.cWidth, this.cHeight);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myCanvas {
  border: 1px solid black
}

#hero {
  width: 72px;
  height: 80px;
}
</style>

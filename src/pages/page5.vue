<template>
    <div>
      <h1>我全都要！</h1>
      <blockquote>
        <p>未来的未来不是我想要的未来</p>
      </blockquote>
      <div class="img-container">
      <img src="../assets/more1.jpg" alt="">
      </div>
      <blockquote>
        <p>无名美爆！</p>
      </blockquote>
      <div class="img-container">
        <img src="../assets/more2.jpg" alt="">
      </div>
      <blockquote>
        <p>新岛真</p>
      </blockquote>
      <div class="img-container">
        <img src="../assets/more3.jpg" alt="">
      </div>
      <blockquote>
        <p>宁宁鸡翘可爱，诶黑</p>
      </blockquote>
      <div class="img-container">
        <img src="../assets/more4.png" alt="">
      </div>
    </div>
</template>
<script>
export default {
  name: "page5",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.img-container {
  max-width: 100%;
  margin: 10px;
  img {
    max-width: 100%;
  }
}
blockquote {
  border-left: 0.25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
  margin-bottom: 16px;
  margin: 0;
}
</style>

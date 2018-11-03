<template>
    <div>
      <h1>小泉花阳</h1>
      <blockquote>
        <p>小泉花阳(Koizumi Hanayo)</p>
        <p>最爱吃米饭的肥萌花花，性格内向，看起来是u's里最不起眼的那个；</p>
        <p>但我就是 永远喜欢小泉花阳！花花的单曲 「縄跳」 也是敲棒，花阳赛高！</p>
      </blockquote>
      <div class="img-container">
      <img src="../assets/hanayo.jpg" alt="">
      </div>
      <blockquote>
        <p>谁か助けて～っ！</p>
      </blockquote>
      <div class="img-container">
        <img src="../assets/hanayo2.jpg" alt="">
      </div>
      <blockquote>
        <p>我曾经也是欧皇呀</p>
      </blockquote>
      <div class="img-container">
        <img src="../assets/hanayo3.jpg" alt="">
      </div>
    </div>
</template>
<script>
export default {
  name: "page1",
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

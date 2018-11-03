<template>
    <div>
      <h1>加藤惠</h1>
      <blockquote>
        <p>加藤惠(Koizumi Hanayo)</p>
        <p>「路人女主」唯一指定正宫——圣人惠！</p>
        <p>其实她没有学姐那种高冷风骚，也没有英梨梨那种双马尾傲娇，但不知道为什么，圣人惠就是这么有魅力；所谓的路人女主可能就是要这种效果吧</p>
      </blockquote>
      <div class="img-container">
      <img src="../assets/megumi.png" alt="">
      </div>
      <blockquote>
        <p>曾经用了好久的手机壳</p>
      </blockquote>
      <div class="img-container">
        <img src="../assets/megumi2.jpg" alt="">
      </div>
    </div>
</template>
<script>
export default {
  name: "page2",
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

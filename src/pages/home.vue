<template>
<div>
    <transition name="fade">
    <header class="header" v-show="!scrollTop">
        <span>Necroogre's World</span>
    </header>
    </transition>
    <div class="content" ref="content">
        <img src="../assets/faQ.gif" alt="">
    </div>
</div>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      scrollTop: false
    };
  },
  mounted() {
    let pageYOffset = 0;
    window.addEventListener(
      "scroll",
      e => {
        if (pageYOffset < window.pageYOffset) {
          this.scrollTop = true;
        } else {
          this.scrollTop = false;
        }
        pageYOffset = window.pageYOffset;
      },
      true
    );
  }
};
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  width: 100%;
  background: greenyellow;
  justify-content: center;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  align-items:center;
  height: 40px;
}
.content {
  padding-top: 50px;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

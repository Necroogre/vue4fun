<template>
<div>
    <header class="header" v-bind:style="{transform:'translateY('+transformY+'px)'}" ref="header">
        <h3>Necroogre</h3>
    </header>
    <transition name="slide-left">
        <div class="navi" v-bind:style="{transform:'translateX('+transformX+'px)'}">
          <ul>
            <li v-for="(item,index) in routes" :key="index">
              <router-link :to="item.path">
                <img :src="item.image" alt="">
              </router-link>
            </li>
          </ul>
        </div>
    </transition>
    <div class="wrapper" v-bind:style="{transform:'translateX('+transformX+'px)'}">
        <div class="content">
          <router-view></router-view>
        <!-- <img src="../assets/faQ.gif" alt=""> -->
        </div>
    </div>
</div>

</template>

<script>
import cloud from "../assets/cloud.svg";
import rain1 from "../assets/rain1.svg";
import rain2 from "../assets/rain2.svg";
import rain3 from "../assets/rain3.svg";
import rain4 from "../assets/rain4.svg";
export default {
  name: "home",
  data() {
    return {
      showHeader: true,
      routes: [
        {
          image: cloud,
          name: "",
          path: "/page1"
        },
        {
          image: rain1,
          name: "",
          path: "/page2"
        },
        {
          image: rain2,
          name: "",
          path: "/page3"
        },
        {
          image: rain3,
          name: "",
          path: "/page4"
        },
        {
          image: rain4,
          name: "",
          path: "/page5"
        }
      ],
      transformY: 0,
      transformX: 0
    };
  },
  mounted() {
    let pageYOffset = 0;
    let vm = this;
    let distancePerFrame = 5;
    window.addEventListener(
      "scroll",
      e => {
        console.log(pageYOffset, window.pageYOffset, vm.transformY);
        if (pageYOffset < window.pageYOffset) {
          if (vm.transformY > -40) {
            vm.transformY = vm.transformY - distancePerFrame;
            vm.transformX = vm.transformX - distancePerFrame;
          }
        } else {
          if (vm.transformY < 0) {
            vm.transformY = vm.transformY + distancePerFrame;
            vm.transformX = vm.transformX + distancePerFrame;
          }
        }
        // if (window.pageYOffset < this.$refs.header.clientHeight) {
        //   this.showHeader = true;
        // } else {
        //   if (pageYOffset < window.pageYOffset) {
        //     this.showHeader = false;
        //   } else {
        //     this.showHeader = true;
        //   }
        // }

        pageYOffset = window.pageYOffset;
      },
      true
    );
  }
};
</script>

<style scoped lang="less">
.slide-top-enter-active {
  animation: slide-top 0.3s;
}
.slide-top-leave-active {
  animation: slide-top 0.3s reverse;
}
@keyframes slide-top {
  0% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0px);
  }
}

.slide-left-enter-active {
  animation: slide-left 0.3s;
}
.slide-left-leave-active {
  animation: slide-left 0.3s reverse;
}
@keyframes slide-left {
  0% {
    transform: translateX(-40px);
  }
  100% {
    transform: translateX(0px);
  }
}

.header {
  display: flex;
  position: fixed;
  margin: 0 auto;
  width: 100%;
  background: white;
  justify-content: center;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 40px;
  font-family: "Helvetica";
  z-index: 999;
}
.navi {
  position: fixed;
  width: 50px;
  top: 50px;
  bottom: 50px;
  -moz-box-shadow: 0px 0px 5px #333333;
  -webkit-box-shadow: 0px 0px 5px #333333;
  box-shadow: 0px 0px 5px #333333;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 20px 0px;
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    li {
      cursor: pointer;
      padding: 5px;
      margin-bottom: 10px;
      img {
        width: 100%;
      }

      img:hover {
        -moz-box-shadow: 0px 0px 5px #333333;
        -webkit-box-shadow: 0px 0px 5px #333333;
        box-shadow: 0px 0px 5px #333333;
      }
    }
  }
}
.wrapper {
  padding-top: 50px;
  left: 60px;
  position: relative;
  .content {
    -moz-box-shadow: 0px 0px 5px #333333;
    -webkit-box-shadow: 0px 0px 5px #333333;
    box-shadow: 0px 0px 5px #333333;
    min-height: 100vh;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px;
  }
}
.active {
  margin-left: 10px;
}
</style>

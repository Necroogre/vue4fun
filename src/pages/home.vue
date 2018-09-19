<template>
<div>
    <transition name="fade">
    <header class="header" v-show="!scrollTop">
        <span>Necroogre</span>
    </header>
    </transition>
        <div class="navi">
          <ul>
            <li v-for="(item,index) in routes" :key="index">
              <router-link :to="item.path">
                <img :src="item.image" alt="">
              </router-link>
            </li>
          </ul>
        </div>
    <div class="wrapper">
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
      scrollTop: false,
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
      ]
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

<style scoped lang="less">
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
  margin-left: 60px;
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
</style>

<template lang="html">
  <div class="top">
    <div class="topIn">
      <ul>
        <li v-for="item in topData"><a :href="item.address">{{item.name}}</a></li>
      </ul>
      <div class="takeMe">
        <!-- <person></person> -->
        <i><img src="../img/bajiu.jpg"></i>
        <span>订阅我</span>
      </div>
    </div>
  </div>
</template>

<script>
// import person from './portrait/portrait.vue';
export default {
  data() {
    return {
      a: 89,
      topData: [{
          name: "首页",
          address: "",
        },
        {
          name: "Demo",
          address: "https://github.com/bajiu/bars/blob/master/README.md"
        },
      ]
    }
  },
  // components:{
  //   person: person
  // }
}
</script>

<style lang="scss">
.top {
    // position: absolute;
    // top: 0;
    height: 60px;
    width: 100%;
    background: hsla(0,0%,100%,.86);
    box-shadow: 0 0 25px #ccc;
    // opacity: 0.6;
    line-height: 60px;
    // z-index: 99;
    // transition: all .3s;
    overflow: hidden;

    .topIn {
        width: 80%;
        height: inherit;
        margin: 0 auto;
        ul {
            li {
                float: left;
                padding-right: 20px;
            }
        }
        a {
            font-size: 24px;
        }
        .takeMe {
            float: right;
            &:hover {
                cursor: pointer;
                color: #20A0FF;
            }
            i {
                display: block;
                margin-top: 5px;
                border-radius: 100%;
                overflow: hidden;
                height: 50px;
                width: 50px;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            span {
                padding: 0 20px;
                font-size: 24px;
            }
        }
    }
}
</style>

<template>
<div class="home-container">
  <div class="about">
    <full-page :options="options">
      <div class="section">
        <div class="box1">
          <index-first></index-first>
        </div>
      </div>
      <div class="section">
          <div class="box2">
          <index-second></index-second>
          </div>
      </div>
      <div class="section">
          <div class="box3">
          <index-three></index-three>
          </div>
      </div>
      <div class="section" id="section4">
          <div class="box4">
          <index-four></index-four>
          </div>
      </div>
    </full-page>
  </div>
  </div>
</template>

<script>
import IndexFirst from "./childComps/IndexFirst.vue"
import IndexFour from './childComps/IndexFour.vue'
import IndexSecond from './childComps/IndexSecond.vue'
import IndexThree from './childComps/IndexThree.vue'

export default {
  name: '',
  props: {},
  components: {
    IndexFirst,
    IndexSecond,
    IndexThree,
    IndexFour
  },
  data () {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          "#f5f6fa",
          "#f5f6fa",
          "#f5f6fa",
          "#fff"
        ]
      }
    }
  },
}
</script>

<style  lang="less" scoped>
  .box1,.box2,.box3{
    height: cacl(100% - 85px);
    position: relative;
    top: 85px;
  }
  /deep/.fp-tableCell{
    background: url('../../../assets/bg.png') no-repeat;
    background-size: cover;
    height: 800px;
  }
  /* 第四屏页脚高度 */
  #section4{
    height: 360px !important;
  }
  .box4{
    position: relative;
    height: 360px;
  }
  .about{
    width: 86%;
    margin: 0 auto;
    box-shadow: 0 0 13px #ddd;
  }
  .home-container{
    background:url('../../../assets/image/bgcover.jpg') no-repeat;
    background-size: contain;
  }
</style>

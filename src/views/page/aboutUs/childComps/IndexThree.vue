<template>
  <div class="three">
    <div class="title">
      <p class="big-title">关于我们</p>
      <p class="en-title">ABOUT US</p>
    </div>
    <div class="content">
        <div :class="{'bg':isActive[0]}" @click="change(0)">
          <p>创作理念</p>
          <hr>
          <p class="el-icon-star-off"></p>
          <p>小柚智汇<br>卓越生态管理平台<br>旨在服务与本校师生<br>满足其协同办公需求</p>
        </div>
        <div :class="{'bg':isActive[1]}" @click="change(1)">
          <p>学院投入</p>
           <hr>
           <p class="el-icon-help"></p>
          <p>校企合作工程实训
            <br>
            各项大赛资金支持
            <br>
            固定场所设备支持</p>
        </div>
        <div :class="{'bg':isActive[2]}" @click="change(2)">
          <p>师资力量</p>
           <hr>
           <p class="el-icon-s-check"></p>
          <p>创新创业基地负责人<br>文老师
            <br>
            三舍公司总监<br>辛惠老师
            <br>
            计算机院副教授<br>王文浪老师</p>
        </div>
        <div :class="{'bg':isActive[3]}" @click="change(3)">
          <p>团队信仰</p>
           <hr>
           <p class="el-icon-s-opportunity"></p>
          <p>多元极化
            <br>
              以人为本
              <br>
              协同创作
              <br>
              合作共赢
              <br>
              师徒传承</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {},
  data () {
    return {
      isActive: [false, false, false, false]
    }
  },
  methods: {
    change (index) {
      this.isActive = [false, false, false, false]
      this.isActive[index] = true
    }
  }
}
</script>

<style lang="less" scoped>
  .title{
    position: relative;
    top: 20px;
    p{
      text-align: center;
    }
    .big-title{
      font-size: 34px;
      margin-bottom: 10px;
      position: relative;
    .en-title{
      margin-top: 0;
    }
  }
  .big-title::before,.big-title::after{
        content: '';
        display: inline-block;
        width: 20px;
        height: 1px;
        background-color: #000;
        position: absolute;
        top: 20px;

      }
    .big-title::before{
      left: 50%;
      transform: translate(-102px, 0);
    }
    .big-title::after{
        right: 50%;
        transform: translate(102px, 0);
      }
    }
  .content{
    width: 94%;
    margin: 40px auto 0;
    display: flex;
    height: calc(60vh);
    padding: 0 40px;
      div{
        flex: 1;
        display: inline-block;
        margin: 3% 15px;
        height: 85%;
        background-color: #facd91;
        border-radius: 5px;
        box-shadow: 0 0 15px #ddd;
        text-align: center;
        cursor: pointer;
        p:nth-child(1){
          color:#e6586a;
          font-size: 28px;
        }
        hr{
          width: 180px;
        }
        p:nth-child(3){
          color:  #f69b24;
          font-size: 60px;
          margin: 10px 100px;
        }
        p:nth-child(4){
          color: gray;
          margin: 5%;
          letter-spacing: 2px;
          font-size: 15px;
          line-height: 30px;

        }
    }
    div:nth-child(4){
      p:nth-child(2){
          text-align: center;
        }
    }
    .bg{
      box-shadow: 0px 2px 9.8px 0.2px rgb(0 0 0 / 5%);
      border: 0;
    }
  }

</style>

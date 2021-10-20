<template>
  <div class="four">
    <div class="content">
      <div class="message">
        <div>
          <img src="~assets/image/erweima.jpg" alt="">
          <p>B站</p>
        </div>
        <div>
          <img src="~assets/image/erweima.jpg" alt="">
          <p>公众号</p>
        </div>
        <div>
          <p>邮箱: wds3721@sina.com</p>
          <p> qq :  894433689</p>
        </div>
      </div>
      <div class="foot_img">
        <img src="../../../../assets/image/foot.png" alt="">
        </div>
      <div class="text">
        <p class="text1">小柚智汇</p>
        <p class="text2">卓越生态管理平台</p>
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
    return {}
  },
}
</script>

<style lang="less" scoped>
  .content{
    height: 360px;
    position: relative;
    background: url('../../../../assets/bg.png') no-repeat right;
  }
  .foot_img{
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-left: 0;
  }
  .foot_img img{
    width: 100%;
    height: 20%;
  }
  .message{
    position: absolute;
    right: 20px;
    top: 0;
  }
  .message div{
    display: inline-block;
  }
  .message div:nth-child(1), :nth-child(2){
    margin-right: 20px;
    /* margin-top: 20px; */
    p{
      width: 70px;
      text-align: center;
      margin-top: 10px;
    }
  }
  .message div:nth-child(3){

    p{
      margin-top: 0;
      width: 200px;
      margin-top: 10px;
    }
  }
  .message img{
    width: 70px;
    height: 70px;
  }
  .text{
    width: 400px;
    position: absolute;
    bottom: 8%;
    color: #fff;
    margin-left: 40px;
    text-align: center;
    z-index: 999;
  }
  .text1{
    display: inline;
    font-size: 40px;
    letter-spacing: 1px;
    bottom: 30px;
  }
  .text2{
    display: inline;
    margin-left: 40px;
  }
</style>

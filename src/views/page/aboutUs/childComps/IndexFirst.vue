<template>
  <div class="first">
    <div class="block-nav">
      <p class="p2">目标  </p>
      <p class="p1">挖掘自己<br>释放潜能</p>
    </div>
    <div class="block">
      <el-carousel trigger="click">
        <el-carousel-item>
          <div class="small">
            <img src="https://liyun-oss1.oss-cn-beijing.aliyuncs.com/superb-class/image/img/36.jpg?versionId=CAEQDxiBgICH7uKC2BciIDIwMmE3MWUwMzQ4MTQ4N2ZhOTM2NThiZjM3NmFhMDk2">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="small">
            <img src="https://liyun-oss1.oss-cn-beijing.aliyuncs.com/superb-class/image/img/38.jpg?versionId=CAEQDxiBgMCV7uKC2BciIGUwN2UwNTVlYmQ2ODQ4YzI4MWRmMjFlMjgzNmE4ZDNj">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="small">
            <img src="https://liyun-oss1.oss-cn-beijing.aliyuncs.com/superb-class/image/img/37.jpg?versionId=CAEQDxiCgMCO7uKC2BciIDZlZTMxOWM1YTY1MDQ5ZjRiZjM0MTg1MTRmNGI2MjJl">
          </div>
          </el-carousel-item>
      </el-carousel>
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
.block-nav{
  width: 300px;
  height: 220px;
  position: absolute;
  z-index: 999;
  background-color: #fff;
  left: 30px;
  border-bottom-right-radius: 50%;
  .p2{
    color: gray;
     margin-left: 50px;
     font-size: 20px;
  }
  .p1{
    margin-top: 0;
    font-size: 45px;
    margin-left: 50px;
  }
}
  .first{
    height: 100%;
  }
  .block{
    height: 100%;
  }
  .el-carousel{
    height: 100%;
  }
  .el-carousel /deep/ .el-carousel__container {
    position: relative;
    height: calc(100vh - 85px);
  }
  .el-carousel__item{
    height: calc(100vh - 85px)
  }

  .el-carousel__item div {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel__item div img{
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>

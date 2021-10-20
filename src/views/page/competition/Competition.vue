<template>
   <div class="competition">
     <div class="compet">
       <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="medium">{{ item }}</h3>
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
    return {
      activeNames: ['1'],
      image: []
    }
  },
}
</script>

<style lang="less" scoped>
  .competition{
    margin-top: 85px;
    background: url('../../../assets/bg.png') no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    .compet{
      margin-top: 60px;
    }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  }
</style>

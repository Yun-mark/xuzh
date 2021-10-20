<template>
  <div class="topBar">
    <!-- <img src="~assets/image/topBarImg.png" alt="" class="top-bar-img"> -->
  <!-- Tab栏字体：默认为白色#ffffff，选中时 a.变为白色加粗 b.其他颜色，需要和背景色对比明显，可以参考其他网站样式和配色 -->
  <img src="~assets/logoBlue.png" alt="" class="top-bar-img">
    <el-menu
  :default-active="this.$route.path"
  class="el-menu-demo"
  mode="horizontal"
  text-color="#000"
  active-text-color="#f49e7e"
  router
  >

  <el-menu-item index="/aboutUs">关于我们</el-menu-item>
  <el-menu-item index="/plan">成长计划</el-menu-item>
  <el-menu-item index="/competition">卓越赛事</el-menu-item>
  <el-menu-item index="/story">成员风采</el-menu-item>
  <el-menu-item index="/joinUs">加入我们</el-menu-item>
  <el-submenu index="6">
    <template slot="title">更多信息</template>
    <el-menu-item>敬请期待</el-menu-item>
  </el-submenu>
</el-menu>
  <!-- <el-menu-item index="/login">登录</el-menu-item> -->
  <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {},
  data () {
    return {
    };
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  .topBar{
    position: fixed;
    z-index: 9;
    top: 0;
    width: 100%;
    height: 85px;
    background-color: #fff;
    box-shadow: 0 0 15px #ddd;
    .top-bar-img{
      position: absolute;
      top: -54px;
      z-index: 9;
      left: 150px;
      height: 200px;
      left: 130px;
    }
    ul{
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      height: 85px;
      li{
        height: 60px;
        font-size: 18px;
        line-height: 85px;
        border: 0 ;
      }
      .div{
        font-size: 18px;
      }

    }
    button{
      position: absolute;
      top: 17px;
      right: 130px;
      transform: translate(-50%, 0);
      width: 150px;
      height: 50px;
      border-radius: 25px;
      border: 0;
      cursor: pointer;
      background-color: #f69b24;
      color: #fff;
      font-size: 20px;
    }
  }
  .el-menu::after, .el-menu::before {
    color: #fbcf5f;
    position: absolute;
    display: inline-block;
    top: 50px;
}
  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }
  .el-submenu /deep/ .el-submenu__title {
    font-size: 18px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
  }
  .el-menu-item{
    font-size: 18px;
  }
  .el-menu--horizontal>.el-submenu /deep/ .el-submenu__title {
    height: 85px;
    line-height: 85px;
    border-bottom: 2px solid transparent;
    color: #909399;
}
</style>

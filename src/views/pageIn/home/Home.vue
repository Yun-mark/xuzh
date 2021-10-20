<template>
  <el-container class="home-container">
     <!--头部区域-->
     <el-header class="header">
       <el-dropdown>
                <div class="avatar-wrap">
                    <img class="avatar" src="../../../assets/orange.jpg" >
                    <span> 马珂</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
     </el-header>
     <!--页面主体区域-->
       <el-container>
       <!--侧边栏-->
         <el-aside width="150px">
           <app-aside></app-aside>
         </el-aside>
       <!--右侧内容-->
       <el-main>
         <router-view></router-view>
       </el-main>
       </el-container>
    </el-container>
</template>

<script>
import AppAside from '@/componets/aside'
export default {
  name: '',
  props: {},
  components: {
    AppAside
  },
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$confirm('确认退出吗？', '退出提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清除用户登录状态
        window.localStorage.removeItem('user')
        // 跳转到登录页面
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.header {
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 25px;
}
.avatar-wrap {
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 20px;
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right:10px ;
    }
}
.el-header {
  background-color: #ff8c00;
}
.el-aside {
  background-color: #cd853f;
}
</style>

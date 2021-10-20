<template>
  <el-menu router background-color="#cd853f"
    text-color="#fff" active-text-color="#ffd04b"
    default-active="/page">
      <el-menu-item index="/page/card">
        <i class="el-icon-s-unfold"></i>
        <span slot="title">首页</span>
      </el-menu-item>
       <el-menu-item index="/page/memory">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">柚子记录</span>
      </el-menu-item>
      <el-menu-item index="/page/clock">
        <i class="el-icon-s-claim"></i>
        <span slot="title">柚子打卡</span>
      </el-menu-item>
      <el-menu-item index="/page/group">
        <i class="el-icon-share"></i>
        <span slot="title">柚子小组</span>
      </el-menu-item>
      <el-menu-item index="/page/admin">
        <i class="el-icon-setting"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
       <el-menu-item index="/page/statement">
        <i class="el-icon-s-custom"></i>
        <span slot="title">关于我们</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'layout',
  components: {},
  props: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
i{
  color: #f5deb3;
}
span{
  color: #f5deb3;
}
</style>

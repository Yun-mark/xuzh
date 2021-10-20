<template>
  <div class="login-container">
    <div class="login-nav">
      <img src="../../../assets/u6.svg" alt="">
    </div>
    <div class="login-head">
      <img src="../../../assets/xyzh.png">
    </div>
    <el-button class="goback" type="warning" icon="el-icon-switch-button" @click="logout">返回官网</el-button>
    <el-form class="login-form" ref="login-form" :model="user" :rules="formRules">
      <div class="login-top">用户登录</div>
      <el-form-item class="el-form-one" prop="username">
        <el-input  prefix-icon="el-icon-user" v-model="user.username" placeholder="请输入学号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input  prefix-icon="el-icon-lock" v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox>我已阅读并同意《用户协议和隐私条款》</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/utils/api/user'
export default {
  name: 'Login',
  props: {},
  components: {},
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          { required: true, message: '学号不能为空', trigger: 'blur' },
          { pattern: /^\d{8}$/, message: '请输入正确的学工号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 表单验证
      this.$refs['login-form'].validate(valid => {
        if (!valid) {
          return
        }
        this.login()
      })
    },
    login () {
      // 开启登录
      login(this.user).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          // 登录成功
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          // 将接口返回的用户存储到本地方便应用
          window.sessionStorage.setItem('user', JSON.stringify(res.data.data))
          // 通过编程式导航跳转到后台主页
          this.$router.push('/page')
        } else { this.$message.error('密码或学号错误') }
      }).catch(err => {
        console.log('登录失败', err)
        this.$message.error('登录失败，手机号或验证码错误')
      })
    },
    logout () {
      this.$router.push('/aboutUs')
    }
  },
}
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: url('../../../assets/bg.png') no-repeat;
  justify-content: center;
  align-items: center;
  background-size: cover;
  .login-nav img{
    position: absolute;
    top: 20px;
    left: 50px;
    width: 300px;
    margin: 0 auto;
  }
  .goback{
    position: absolute;
    right: 50px;
    top: 30px;
  }
  .login-head{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        top: 140px;
        left: 500px;
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #fff;
        }
     }
  .login-form {
    background-color: #fbdd83;
    padding: 30px;
    min-width: 300px;
    border-radius: 10px;
    box-shadow: 0 15px  25px rgba(0,0,0,.5);
    .login-top{
      text-align: center;
      color: black;
      font-size: 25px;
    }
    .el-form-one {
      margin-top: 22px;
    }
    .el-form-item {
      margin-bottom: 19px;
    }
    .el-checkbox {
      color: #f59b22;
    }
    .login-btn {
      width: 100%;
      font-size: 20px;
      background-color: #f59b22;
      color: white;
    }
  }
}
</style>

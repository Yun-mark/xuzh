<template>
  <div class="join">
    <div class="joinUS-container">
      <el-form
        class="join-form"
        ref="form"
        size="mini"
        :model="userInfo"
        :rules="rules"
        hide-required-asterisk
      >
      <el-row>
        <el-col span='24'>
        <div class="join-title"><h2>加入我们</h2></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='10'>
        <el-form-item prop="username" class="join-inputbox">
          <el-input v-model="userInfo.username" placeholder="姓名" class="join-input"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span='10'>
          <el-form-item prop="userclass" class="join-inputbox">
          <el-input v-model="userInfo.userclass" placeholder="专业班级"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='10'>
          <el-form-item  prop="userId" class="join-inputbox">
          <el-input v-model="userInfo.userId" placeholder="学号"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span='10'>
         <el-form-item prop="phone" class="join-inputbox">
          <el-input v-model="userInfo.phone" placeholder="联系方式"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='20'>
          <el-form-item prop="introduce" class="join-textarea">
          <el-input type="textarea" v-model="userInfo.introduce" placeholder="自我简介"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='24'>
          <el-form-item>
        <div class="join-title">
            <el-button size="big" type="warning" @click="submitForm('form')">提交</el-button>
        </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>

      </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joinUs',
  props: {},
  components: {},
  methods: {
    submitForm (formName) {
      // validate 对整个表单进行校验，参数为一个回调函数
      this.$refs[formName].validate(isPass => {
        if (isPass) {
          // 校验成功
          // 在这里提交
          console.log(this.userInfo)
          // 发起post请求
          // this.$axios({
          //   method: 'POST',
          //   url: '',
          //   data: this.userInfo
          // }).then(response => {
          //   console.log(response)
          // })
          // alert('submit!')
        } else {
          return false
        }
        // 刷新表单
        // this.$nextTick(() => {
        //   // this.$refs[formName].clearValidate()
        //   this.$refs.form.resetFields()
        // })
      })
    }
  },
  data () {
    return {
      // 数据
      userInfo: {
        username: '',
        userclass: '',
        userId: '',
        phone: '',
        introduce: ''
      },
      // 表单验证规则
      rules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入姓名'
          }
        ],
        userclass: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入专业班级'
          }
        ],
        userId: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入学号'
          }
        ],
        introduce: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入简介'
          }
        ],
        phone: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入联系方式'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.join {
  margin-top: 85px;
  background: url('../../../assets/bg.png') no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  .join-title {
    text-align: center;
  }
  .joinUS-container {
    width: 600px;
  }
  .join-inputbox {
    .text {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 10px;
      display: block;
      transition: 0.5s;
      pointer-events: none;
    }
  }
  /deep/.el-col-10,
  /deep/.el-col-20{
  border-bottom: 1px solid #000;
  padding: 0;
  margin-left: 15px;
  margin-right: 30px;
}
}
/deep/.el-textarea__inner ,
/deep/ .el-input__inner{
  border: none;
  &::placeholder{
    color: #ff8c00;
    font-size: 18px;
  }
  background-color: transparent;
  color: #000;
}
/deep/.el-textarea__inner {
  height: 100px;
  margin-left: 10px;
}

/deep/ .el-input__inner {
  // border-color: #fff;
  padding: 0 10px;
  z-index: 1;
}
/deep/.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
  margin-bottom: 0;
  margin-left: -10px;
}
.el-row{
  margin-bottom: 15px;
}
.join-form {
  min-width: 300px;
  max-width: 600px;
  height: 24em;
  background:rgba(243, 238, 238, 0.6);
  padding: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

</style>

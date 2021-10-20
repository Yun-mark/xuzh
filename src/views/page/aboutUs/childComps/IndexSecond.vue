<template>
  <div class="second">
    <div class="title">
      <p class="big-title">助力学习</p>
      <p class="en-title">PRODUCT FEATURES</p>
    </div>
    <div class="content">
      <div>
        <div :class="{'bg':isActive[0]}" @click="change(0)">
          <img src="~assets/image/youzi1.jpg" alt="">
          <div>
            <p>小柚智汇</p>
            <p>开启专属<br> 时光之旅</p>
          </div>
          <button>详情</button>
        </div>
        <div :class="{'bg':isActive[1]}" @click="change(1)">
          <img src="~assets/image/youzi2.jpg" alt="">
          <div class="text">
            <p>柚子时光</p>
            <p>记录迭代<br>留存日志</p>
          </div>
          <button>详情</button>
        </div>
        <div :class="{'bg':isActive[2]}" @click="change(2)">
          <img src="~assets/image/youzi3.jpg" alt="">
          <div>
            <p>柚子打卡</p>
            <p>定位签到<br>日常打卡</p>
          </div>
          <button>详情</button>
        </div>
      </div>
      <div>
        <div :class="{'bg':isActive[3]}" @click="change(3)">
          <img src="~assets/image/youzi4.jpg" alt="">
          <div>
            <p>柚子通知</p>
            <p>老师班委<br>实时通知</p>
          </div>
          <button>详情</button>
        </div>
        <div :class="{'bg':isActive[4]}" @click="change(4)">
          <img src="~assets/image/youzi5.jpg" alt="">
          <div>
            <p>每周柚记</p>
            <p>每周总结<br>积少成多</p>
          </div>
          <button>详情</button>
        </div>
        <div :class="{'bg':isActive[5]}" @click="change(5)">
          <img src="~assets/image/youzi6.png" alt="">
          <div>
            <p>柚子打卡</p>
            <p>点赞交流<br>实时互动</p>
          </div>
          <button>详情</button>
        </div>
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
      isActive: [false, true, false, false, false, false]
    }
  },
  methods: {
    change (index) {
      this.isActive = [false, false, false, false, false, false]
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
      width: 80%;
      margin: 70px auto;
      height: calc(55vh);
      background-color: #fff;
      >div{
        height: 50%;
        display: flex;
        box-shadow: 0 0 13px #ddd;
        >div:hover{
          background-color:  #facd91;
          transition: all 0.5s;
        }
        >div{
          flex: 1;
          position: relative;
          cursor: pointer;
          img{
            width: 132px;
            height: 111px;
            position: absolute;
            top: 5%;
            left: 3%;
            border-radius: 5px;
          }
          >div{
            position: absolute;
            top: 0;
            right: 60px;
            p:nth-child(1){
              color: #f9b523;
              font-size: 28px;
              margin-right: 10px;
            }
            p:nth-child(2){
              font-size: 18px;
              height: 50px;
              color: gray;
              letter-spacing: 5px;
            }
          }
          .text{
            right: 50px;
          }
          button{
            position: absolute;
            top: 72%;
            left: 50%;
            transform: translate(-50%, 0);
            width: 110px;
            height: 32px;
            border-radius: 25px;
            border: 0;
            cursor: pointer;
           box-shadow: 0 0 10px #ddd;
          }
        }
      }
    }
    button{
      background-color: #f4b2ba;
      color: #fff;
    }
    .bg{
      background-color: #facd91;
      >div{
        p:nth-child(1), p:nth-child(2){
          color: #fff !important;
        }
      }
      button{
        box-shadow: 0 0 10px #ddd;
        color: #000;
        background-color: #fff;
      }
    }
</style>

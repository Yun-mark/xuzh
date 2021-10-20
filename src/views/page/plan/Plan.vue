<template>
  <timeline-carousel
    :timelineList="[{
      id: 1,
      text: '四年计划',
    },
    {
      id: 2,
      text: '大一'
    },
    {
      id: 3,
      text: '大二'
    },
    {
      id: 4,
      text: '大三'
    },
    {
      id: 5,
      text: '大四'
    }]"
    :carouselList="[{
      id: 1,
      img: require('../../../assets/1.png'),
      title: '成长路线',
      info: '盛年不重来，一日难再晨。及时宜自勉，岁月不待人。'
    },
    {
      id: 2,
      img: require('../../../assets/2.jpg'),
      title: '大一',
      info: ' C语言程序设计。数据结构与算法。最小系统板。'
    },
    {
      id: 3,
      img: require('../../../assets/3.jpg'),
      title: '大二',
      info: ' Web。嵌入式软件。算法。产品运营。'
    },
    {
      id: 4,
      img: require('../../../assets/4.jpg'),
      title: '大三',
      info: ' 程序设计项目。校企合作项目。'
    },
    {
      id: 5,
      img: require('../../../assets/5.jpg'),
      title: '大四',
      info: '面试。就业。考研。毕设。'
    }
    ]"
    themeColor="#ff8c00"
    timelineNum="4"
    timelineWidth="230"
    :mouseEvent="true"
  />
</template>

<script>

export default {
  name: '',
  props: {},
  components: {
  },
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
  .container{
    margin-top: 45px;
    background: url('../../../assets/bg.png') no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 1s linear;
    /deep/ .slider span{
      border-radius: 25px;
      width: 700px;
      box-shadow: 0 15px  25px rgba(0,0,0,.5);
    }
    /deep/ .slider .slider-box .slider-box__item:nth-child(2){
      background: whitesmoke;
      opacity: 0.8;
    }
    /deep/ .slider .slider-box__item img{
    height: 260px;
    background-size: cover;
    }
    /deep/ .timeline .line{
      width: 88%;
      background-color: gray;
    }
    /deep/.slider .slider-box .slider-box__item:nth-child(2) .item-title{
    font-size: 40px;
    margin-top: 25px;
    }
    /deep/ .slider .slider-box .slider-box__item:nth-child(2) .item-info{
    font-size: 20px;
    letter-spacing: 1px;
    margin-right: 25px;
    }
    /deep/ .timeline .timeline-container .item .list .text{
      margin-top: 18px;
      margin-left: 12px;
      color: rgb(255, 140, 0);
      font-size: 18px;
      font-family:'宋体';
    }
    /deep/.timeline .timeline-container .item .list .circle{
      background: url('../../../assets/time.png');
      background-size: contain;
      width: 30px;
      height: 30px;
      margin-top: -18px;
    }
     /deep/.timeline .timeline-container .item .item-next{
       background: url('../../../assets/right.png');
       background-size: cover;
       border: 3px solid salmon;
     }
     /deep/.timeline .timeline-container .item .item-prev{
       background: url('../../../assets/left.png');
       background-size: cover;
       border: 3px solid salmon;
     }
  }
</style>

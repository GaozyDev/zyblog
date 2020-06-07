<template>
  <div class="home">
    <div class="profile">
      <div class="profile-box">
        <div class="introduction">
          <div class="idt-1">
            <span class="span-1">//Create Person class to say.</span>
            <br />
            <span class="span-2">new Person().Say("Hello Body !");</span>
          </div>
          <div class="idt-2">
            <span
              class="span-3"
            >Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.</span>
            <br />
            <span class="span-4">——Beginner's mind.</span>
          </div>
        </div>
        <div class="portrait"></div>
      </div>
    </div>
    <div class="about-me">
      <div class="container">
        <div class="title">About Me(关于我)</div>
        <div class="more-info">
          <div>
            <strong>作者：</strong> ZongYang...
          </div>
          <div>
            <strong>爱好：</strong>爱游泳，爱爬山，爱发明，爱创新，爱研究，也爱想象，热爱天文，喜欢电子产品，向往极地运动...
          </div>
          <div>
            <strong>编程：</strong>我小时候其实没想过会学编程，只想着学习数学、物理长大以后当数学家、科学家；想想都有些小激动呢。天意弄人啊，机缘巧合下，大学选择了计算机，从此开始了我的编程生涯...
          </div>
          <div>
            <strong>忆尘夕：</strong>一直有这样一种感觉，愿灰尘的记忆如夕阳般美好!
          </div>
          <div class="motto">
            <strong>——初学者的心态；愿此生不悔！</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="works-display">
      <div class="container">
        <div class="title">This Works (作品)</div>
        <div class="works">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in works" v-bind:key="index">
              <div class="image fl">
                <img v-bind:src="item.img" alt />
              </div>
              <div class="text">
                <span class="title">{{item.title}}</span>
                <br />
                <br />
                <span class="desc">{{item.desc}}</span>
                <br />
                <br />
                <span class="dev-background">{{item.devBackground}}</span>
                <br />
                <br />
                <span class="download">{{item.download}}</span>
              </div>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="technical-ability">
      <div class="container">
        <div class="title">Technical Ability (技能)</div>
        <div class="chart" id="chart" :style="{width: '800px', height: '600px'}"></div>
      </div>
    </div>
    <div class="more-information">
      <div class="container">
        <div class="title">More Information(更多)</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ".././assets/js/shine.js";
export default {
  name: "home",
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var echarts = require("echarts/lib/echarts");
      require("echarts/lib/chart/pie");
      let chart = echarts.init(document.getElementById("chart"), "shine");
      chart.setOption({
        series: [
          {
            type: "pie",
            radius: "95%",
            data: [
              { value: 3, name: "Java" },
              { value: 3, name: "Android" },
              { value: 1, name: "Dart" },
              { value: 2, name: "Flutter" },
              { value: 1, name: "前端" },
              { value: 1, name: "Vue" }
            ],
            itemStyle: {
              normal: {
                label: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              }
            }
          }
        ]
      });
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 8000
        },
        loop: true,
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      works: [
        {
          img: "/imgs/coolweather.png",
          title: "Cool天气",
          desc:
            "使用Flutter开发的天气APP，准确预报未来两小时的降雨情况，精确到分钟级。",
          devBackground:
            "之前使用的是小米手机，感觉小米天气一直非常准确，特别是两小时的雨势预测功能非常赞，让我面对下雨天时有了很大的安全感，我可以在小米天气里看到几分钟之后下雨，几分钟之后变大，几分钟之后雨变小，什么时候雨会停。后来换到一加手机，没了两小时的雨势预测这个功能，总让我感觉少了点东西，加上我最近在学习Flutter，于是乎我用小米天气的数据源“彩云天气”和Flutter开发了这个APP。自从手机装上Cool天气，感觉再也不用怕下雨天了，哈哈。",
          download:
            "目前APP发布在酷安应用商店，感兴趣的话，可以点击下面的链接进行下载。 https://www.coolapk.com/apk/www.gl.com.coolweather"
        },
        {
          img: "/imgs/compass.jpg",
          title: "指南针",
          desc: "一款简单好用的安卓指南针APP",
          devBackground:
            "本人有些路痴，一加手机又没有官方指南针应用，出门用导航都会走错方向，特别是走地下通道，唉~ 寻遍市场上所有指南针应用，发现要么带广告，要么界面太丑，想着也不难，所以花了点时间自己写了一个。",
          download:
            "目前APP发布在酷安应用商店，感兴趣的话，可以点击下面的链接进行下载。 https://www.coolapk.com/apk/com.sunny.www.compass"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.home {
  .profile {
    background: transparent url("/imgs/home-bg.jpg") center center;
    background-size: cover;
    min-height: 840px;
    text-align: center;
    .profile-box {
      margin-top: 150px;
      position: relative;
      display: inline-block;
      width: 1000px;
      .introduction {
        text-align: left;
        position: absolute;
        margin-top: 280px;
        font-size: 20px;
        color: #ffffff;
        z-index: 1;
        border-left: 5px solid #ffffff;
        padding: 20px 15px;
        .idt-1 {
          .span-1 {
            font-size: 12px;
          }
          .span-2 {
            font-size: 36px;
          }
        }
        .idt-2 {
          margin-top: 20px;
          .span-3,
          .span-4 {
            font-size: 17.5px;
          }
        }
      }
      .portrait {
        color: #ffffff;
        position: absolute;
        font-size: 20px;
        right: 0;
        width: 600px;
        height: 600px;
        background-size: cover;
        background: url("/imgs/portrait.png") no-repeat center right;
        background-size: contain;
      }
    }
  }
  .about-me {
    padding: 80px 0;
    background-color: rgba(242, 242, 241, 1);
    .title {
      text-align: center;
      font-size: 36px;
    }
    .more-info {
      margin-top: 50px;
      font-size: 22px;
      .motto {
        margin-top: 20px;
        text-align: right;
      }
    }
  }
  .works-display {
    padding: 80px 0;
    background-color: #34475e;
    .title {
      text-align: center;
      font-size: 36px;
      color: #ffffff;
    }
    .works {
      .swiper {
        height: 520px;
        margin-top: 80px;
        .swiper-slide {
          padding: 0 100px;
          box-sizing: border-box;
          img {
            width: 270px;
            height: 480px;
          }
          .text {
            box-sizing: border-box;
            padding: 20px;
            margin-left: 300px;
            height: 480px;
            color: #ffffff;
            font-size: 18px;
            .title {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
  .technical-ability {
    padding: 80px 0;
    background-color: #43b5e9;
    .title {
      text-align: center;
      font-size: 36px;
      color: #ffffff;
    }
    .chart {
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .more-information {
    padding: 80px 0;
    .title {
      text-align: center;
      font-size: 36px;
    }
  }
}
</style>
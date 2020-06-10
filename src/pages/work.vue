<template>
  <div class="work">
    <div class="container">
      <div class="work-top clearfix">
        <div class="icon">
          <img src="/imgs/ic-coolweather-launcher.png" alt />
        </div>
        <div class="info">
          <div class="name">
            Cool天气
            <span>1.5.8</span>
          </div>
          <div class="message">21.3M / 3465下载 / 176人关注 / 71个评论 / 简体中文</div>
          <div class="download">下载APK</div>
        </div>
      </div>
      <div class="work-detail-info">
        <div class="title">应用截图</div>
        <div class="content">
          <div class="screenshot-list">
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(0);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(1);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(2);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(3);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(4);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(5);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(6);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(7);"
            />
            <img
              src="/imgs/coolweather.png"
              data-toggle="modal"
              data-target="#ex-screenshot-modal"
              onclick="$(&quot;#ex-screenshot-carousel&quot;).carousel(8);"
            />
          </div>
        </div>
        <div class="title">新版特性</div>
        <div class="content">
          1.优化新型冠状病毒肺炎疫情地图页加载速度
          <br />2.修复了一些已知的小bug
        </div>
        <div class="title">应用简介</div>
        <div class="content">
          纯Flutter开发的跨平台APP，支持Android和iOS双平台，未来会添加Web端支持
          <br />界面设计参考一加天气APP，简洁流畅，杜绝广告
          <br />支持实时预测未来两小时降雨趋势
          <br />注：APP内使用了大量一加官方APP的图片资源和UI设计，如造成侵权，请联系作者，必在第一时间删除相关资源
          <br />代码地址∶https://github.com/GaozyDev/CoolWeather
        </div>
        <div class="title">应用评分</div>
        <div class="content clearfix">
          <div class="grade">4.5</div>
          <div class="grade-star">
            <div class="star"></div>
            <div class="rater">共18个评分</div>
          </div>
          <div class="grade-dist">
            <div class="grade-5"></div>
            <div class="grade-4"></div>
            <div class="grade-3"></div>
            <div class="grade-2"></div>
            <div class="grade-1"></div>
          </div>
        </div>
        <div class="title">详细信息</div>
        <div class="content">
          应用包名：www.gl.com.coolweather
          <br />更新时间：2020-03-07 14:40:05
          <br />支持ROM：4.1+
          <br />开发者名称：SunnyGL
        </div>
        <div class="title">权限信息</div>
        <div class="content">
          · 大致位置（基于网络）
          <br />· 精确位置（基于GPS和网络）
          <br />· 获取额外的位置信息提供程序命令
          <br />· 查看网络连接
          <br />· 查看WLAN连接
          <br />· 与蓝牙设备配对
          <br />· 访问蓝牙设置
          <br />· 连接WLAN网络和断开连接
          <br />· 完全的网络访问权限
          <br />· 读取手机状态和身份
          <br />· 修改或删除您的USB存储设备中的内容
          <br />· 更改系统显示设置
          <br />· 防止手机休眠
          <br />· 读取您的USB存储设备中的内容
          <br />· 修改系统设置
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "work"
};
</script>
<style lang="scss">
.work {
  padding: 100px 0;
  background-color: #f7f7f7;
  .work-top {
    background-color: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    .icon {
      float: left;
      img {
        width: 90px;
      }
    }
    .info {
      margin-left: 110px;
      .name {
        font-size: 22px;
        font-weight: normal;
        span {
          font-size: 14px;
          font-weight: lighter;
        }
      }
      .message {
        font-size: 14px;
        color: #999999;
        margin-top: 6px;
      }
      .download {
        width: 120px;
        height: 35px;
        border-radius: 5px;
        font-size: 16px;
        color: white;
        background-color: #4caf50;
        margin-top: 6px;
        border: none;
        line-height: 35px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .work-detail-info {
    display: inline-block;
    width: 100%;
    background-color: #ffffff;
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    &:last-child {
      padding-bottom: 40px;
    }
    .title {
      font-size: 18px;
      color: #4caf50;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    .content {
      font-size: 14px;
      color: #666666;
      margin-bottom: 20px;
      width: 80%;
      line-height: 22px;
      .screenshot-list {
        height: 310px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        img {
          height: 300px;
          margin-right: 10px;
        }
      }
      .grade {
        float: left;
        font-size: 40px;
        float: left;
        line-height: 40px;
        font-weight: 500;
        color: #333333;
      }
      .grade-star {
        margin-left: 20px;
        font-size: 12px;
        color: #999999;
        float: left;
        .star {
          display: inline-block;
          width: 75px;
          height: 14px;
          line-height: 14px;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: url("/imgs/ic-stars.gif");
        }
        .rater {
          margin-top: 4px;
        }
      }
      .grade-dist {
        float: left;
        margin-left: 20px;
        .grade-5 {
          height: 8px;
          background-color: #4caf50;
          width: 94px;
        }
        .grade-4 {
          height: 8px;
          background-color: #ccdb38;
          width: 40px;
        }
        .grade-3 {
          height: 8px;
          background-color: #ffea39;
          width: 15px;
        }
        .grade-2 {
          height: 8px;
          background-color: #ffb234;
          width: 10px;
        }
        .grade-1 {
          background-color: #ff8b5a;
          height: 8px;
          width: 2px;
        }
      }
    }
  }
}
</style>
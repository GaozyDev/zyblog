<template>
  <div class="work">
    <div class="container">
      <div class="wrapper">
        <div class="work-list">
          <span v-for="(item, index) in workList" v-bind:key="index">
            <span
              class="name"
              v-bind:class="{'current':currentId==item.id}"
              v-on:click="getWorkData(item.id)"
            >{{item.name}}</span>
            <span class="divider" v-if="index!=(workList.length-1)">/</span>
          </span>
        </div>
        <div class="work-top clearfix">
          <div class="icon">
            <img v-bind:src="work.logo" alt />
          </div>
          <div class="info">
            <div class="name">
              {{work.name}}
              <span>{{work.version}}</span>
            </div>
            <div class="meta">{{work.meta}}</div>
            <div class="download">下载APK</div>
          </div>
          <div class="qrcode">
            <img v-bind:src="work.qrcode" />
            <p>扫码下载APK</p>
          </div>
        </div>
        <div class="work-detail-info">
          <div class="title">应用截图</div>
          <div class="content">
            <div class="screenshot-list">
              <img v-for="(url, index) in work.screenshot" v-bind:key="index" v-bind:src="url" />
            </div>
          </div>
          <div class="title">新版特性</div>
          <div class="content">
            <span
              v-for="(introduct,index) in work.versionIntroduct"
              v-bind:key="index"
            >{{introduct}}</span>
          </div>
          <div class="title">应用简介</div>
          <div class="content">
            <span v-for="(desc,index) in work.workDesc" v-bind:key="index">{{desc}}</span>
          </div>
          <div class="title">应用评分</div>
          <div class="content clearfix">
            <div class="grade">{{work.comment.gradle}}</div>
            <div class="grade-star">
              <div class="star"></div>
              <div class="rater">共{{work.comment.quantity}}个评分</div>
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
            <span v-for="(info,index) in work.detailInfo" v-bind:key="index">{{info}}</span>
          </div>
          <div class="title">权限信息</div>
          <div class="content">
            <span v-for="(permission,index) in work.permission" v-bind:key="index">{{permission}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "work",
  data() {
    return {
      workList: [],
      currentId: 0,
      work: {}
    };
  },
  mounted() {
    this.getWorkData(1);
  },
  methods: {
    getWorkData(id) {
      this.axios.get(`api/work/${id}`).then(data => {
        this.workList = data.workList;
        this.currentId = data.currentId;
        this.work = data.work;
      });
    }
  }
};
</script>
<style lang="scss">
.work {
  margin-top: 80px;
  background-color: #f7f7f7;
  text-align: center;
  .wrapper {
    width: 1000px;
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 50px;
    .work-list {
      text-align: left;
      font-size: 18px;
      margin-bottom: 10px;
      padding-left: 10px;
      .name {
        cursor: pointer;
        &:hover {
          color: #0681d0;
        }
      }
      .current {
        color: #000000;
      }
      .divider {
        margin: 0 5px;
      }
    }
    .work-top {
      text-align: left;
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
        margin-left: 20px;
        float: left;
        .name {
          font-size: 22px;
          font-weight: normal;
          span {
            font-size: 14px;
            font-weight: lighter;
          }
        }
        .meta {
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
      .qrcode {
        float: right;
        text-align: center;
        margin-right: 20px;
        img {
          width: 82px;
          height: 82px;
          float: right;
        }
      }
    }
    .work-detail-info {
      text-align: left;
      display: inline-block;
      width: 100%;
      background-color: #ffffff;
      margin-top: 20px;
      padding: 0 30px;
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
        width: 90%;
        line-height: 22px;
        span {
          display: block;
        }
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
            background-image: url("/icon/ic-stars.gif");
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
}
</style>
<template>
  <div class="blog-list">
    <div class="container">
      <div class="list">
        <div class="blog-item" v-for="(item, index) in blogList" v-bind:key="index">
          <div class="title">
            <a href="javascript:;" v-on:click="blogDetail(item.id)">{{item.title}}</a>
          </div>
          <div class="abstract">{{item.abstract}}</div>
          <div class="meta">
            <img src="/icon/ic-eye.png" alt />
            <span>{{item.visiter}}</span>
            <img src="/icon/ic-comment.png" alt />
            <span>{{item.comment}}</span>
            <img src="/icon/ic-heart.png" alt />
            <span>{{item.collect}}</span>
            <img src="/icon/ic-date.png" alt />
            <span>{{item.date}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-list",
  data() {
    return {
      blogList: []
    };
  },
  mounted() {
    this.getBlogList();
  },
  methods: {
    getBlogList() {
      this.axios.get("api/bloglist").then(data => {
        this.blogList = data.blogList;
      });
    },
    blogDetail(id) {
      this.$router.push(`/blog/${id}`);
    }
  }
};
</script>
<style lang="scss">
.blog-list {
  margin-top: 80px;
  background-color: #f7f7f7;
  text-align: center;
  .list {
    text-align: left;
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color: #ffffff;
    width: 1000px;
    .blog-item {
      padding: 40px 50px;
      .title {
        a {
          font-size: 26px;
          color: #555555;
          font-weight: 400;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #000;
            visibility: hidden;
            transform: scaleX(0);
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
          }
          &:hover {
            &:after {
              visibility: visible;
              transform: scaleX(1);
            }
          }
        }
      }
      .abstract {
        font-size: 16px;
        margin-top: 25px;
        color: #555555;
        line-height: 2;
      }
      .meta {
        line-height: 14px;
        font-size: 12px;
        margin-top: 20px;
        color: #999999;
        img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
        span {
          margin-right: 12px;
          vertical-align: top;
        }
      }
    }
  }
}
</style>
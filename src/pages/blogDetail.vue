<template>
  <div class="blog-detail">
    <div class="container">
      <div class="article">
        <div class="title">{{title}}</div>
        <div class="meta">
          <img src="/imgs/ic-eye.png" alt />
          <span>{{visiter}}</span>
          <img src="/imgs/ic-comment.png" alt />
          <span>{{comment}}</span>
          <img src="/imgs/ic-heart.png" alt />
          <span>{{collect}}</span>
          <img src="/imgs/ic-date.png" alt />
          <span>{{date}}</span>
        </div>
        <div class="divider"></div>
        <div class="text" id="text"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  name: "blog-detail",
  data() {
    return {
      title: "Android 缩减、混淆处理和优化您的应用",
      visiter: 10,
      comment: 3,
      collect: 5,
      date: "2020-02-05",
      text: ""
    };
  },
  mounted() {
    this.mdToHTML();
  },
  methods: {
    mdToHTML() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      this.axios.get("/jsonData").then(res => {
        this.text = res.data;
        document.getElementById("text").innerHTML = marked(this.text);
      });
    }
  }
};
</script>
<style lang="scss">
.blog-detail {
  margin-top: 80px;
  background-color: #f7f7f7;
  .article {
    background-color: #ffffff;
    margin-top: 20px;
    margin-bottom: 50px;
    display: inline-block;
    width: 100%;
    padding: 60px 100px;
    box-sizing: border-box;
    .title {
      text-align: center;
      font-weight: 400;
      font-size: 26px;
      color: #555555;
    }
    .meta {
      text-align: center;
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
    .divider {
      background-color: #ddd;
      background-image: repeating-linear-gradient(
        -45deg,
        #fff,
        #fff 4px,
        transparent 4px,
        transparent 8px
      );
      margin-top: 50px;
      margin-bottom: 20px;
      height: 2px;
    }
    .text {
      width: 100%;
      margin-top: 50px;
      font-size: 16px;
      line-height: 2;
    }
  }
}
</style>
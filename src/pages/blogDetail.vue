<template>
  <div class="blog-detail">
    <div class="container">
      <div class="paper">
        <div class="title">{{blog.title}}</div>
        <div class="meta">
          <img src="/icon/ic-eye.png" alt />
          <span>{{blog.visiter}}</span>
          <img src="/icon/ic-comment.png" alt />
          <span>{{blog.comment}}</span>
          <img src="/icon/ic-heart.png" alt />
          <span>{{blog.collect}}</span>
          <img src="/icon/ic-date.png" alt />
          <span>{{blog.date}}</span>
        </div>
        <div class="divider"></div>
        <div id="markdown"></div>
        <div class="catalogue-wrapper">
          <div class="catalogue">
            <div class="title">目录</div>
            <ol>
              <li>1、newSingleThreadExecutornewSingleThreadExecutor</li>
              <li>2、newSingleThreadExecutor</li>
              <li>3、newSingleThreadExecutor</li>
              <li>4、newSingleThreadExecutor</li>
            </ol>
          </div>
        </div>
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
      blog: {}
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
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: "",
        langPrefix: "language-",
        mangle: true,
        pedantic: false,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false
      });
      this.axios.get(`api/blog/${1}`).then(data => {
        this.blog = data;
        document.getElementById("markdown").innerHTML = marked(data.text);
      });
    }
  }
};
</script>
<style lang="scss">
.blog-detail {
  margin-top: 80px;
  background-color: #f7f7f7;
  text-align: center;
  .paper {
    background-color: #ffffff;
    margin-top: 20px;
    margin-bottom: 50px;
    display: inline-block;
    width: 1000px;
    padding: 80px 50px;
    box-sizing: border-box;
    position: relative;
    text-align: left;
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
      margin: 50px 0;
      height: 2px;
    }
    #markdown {
      width: 100%;
      font-size: 15px;
      line-height: 1.8;
      h1 {
        margin: 30px 0;
      }
      h2 {
        margin: 26px 0;
      }
      h3 {
        margin: 22px 0;
        font-weight: normal;
      }
      h4 {
        margin: 18px 0;
      }
      h5 {
        margin: 12px 0;
      }
      h6 {
        margin: 8px 0;
      }
      a {
        color: #0681d0;
      }
      ol {
        padding: 0px 25px;
        margin: 10px 0;
        li {
          list-style-type: decimal;
        }
      }
      ul {
        padding: 0px 25px;
        margin: 10px 0;
        li {
          list-style-type: disc;
        }
      }
      pre {
        background-color: #f7f7f7;
        padding: 10px;
        overflow-x: auto;
      }
      img {
        width: auto;
        max-width: 100%;
        margin: 10px 0;
      }
      blockquote {
        padding: 20px;
        background-color: #fafafa;
        border-left: 6px solid #e6e6e6;
        font-size: 16px;
        line-height: 30px;
        margin: 20px 0;
      }
      table {
        width: 100%;
        margin: 20px 0;
        border-collapse: collapse;
        line-height: 35px;
        tr:nth-of-type(2n) {
          background-color: hsla(0, 0%, 70.2%, 0.15);
        }
        th {
          font-weight: bold;
          padding-left: 15px;
          border: 1px solid #eeeeee;
        }
        td {
          padding-left: 15px;
          border: 1px solid #eeeeee;
        }
      }
    }
    .catalogue-wrapper {
      position: absolute;
      right: -10px;
      top: 0px;
      .catalogue {
        position: fixed;
        width: 250px;
        background-color: #ffffff;
        padding: 20px;
        .title {
          color: #a5a5a5;
          font-size: 15px;
          text-align: left;
          border-bottom: 1px solid #dddddd;
          padding: 10px 0;
          margin-bottom: 20px;
        }
        ol {
          padding: 0;
          li {
            text-align: left;
            font-size: 15px;
            margin: 12px 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            cursor: pointer;
            &:hover {
              color: #0681d0;
            }
          }
        }
      }
    }
  }
}
</style>
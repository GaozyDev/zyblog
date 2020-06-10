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
            <img src="/imgs/ic-eye.png" alt />
            <span>{{item.visiter}}</span>
            <img src="/imgs/ic-comment.png" alt />
            <span>{{item.comment}}</span>
            <img src="/imgs/ic-heart.png" alt />
            <span>{{item.collect}}</span>
            <img src="/imgs/ic-date.png" alt />
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
      blogList: [
        {
          id: "1",
          title: "Android 缩减、混淆处理和优化您的应用",
          abstract:
            "所有的 Java 开发人员可能会遇到这样的困惑？我该为堆内存设置多大空间呢？OutOfMemoryError 的异常到底涉及到运行时数据的哪块区域？该怎么解决呢？其实如果你经常解决服务器性能问题，那么这些问题就会变的非常常见，了解 JVM 内存也是为了服务器出现性能问题的时候可以快速的了解那块的内存区域出现问题，以便于快速的解决生产故障...",
          visiter: 10,
          comment: 3,
          collect: 5,
          date: "2020-02-05"
        },
        {
          id: "2",
          title: "Android 缩减、混淆处理和优化您的应用",
          abstract:
            "所有的 Java 开发人员可能会遇到这样的困惑？我该为堆内存设置多大空间呢？OutOfMemoryError 的异常到底涉及到运行时数据的哪块区域？该怎么解决呢？其实如果你经常解决服务器性能问题，那么这些问题就会变的非常常见，了解 JVM 内存也是为了服务器出现性能问题的时候可以快速的了解那块的内存区域出现问题，以便于快速的解决生产故障...",
          visiter: 10,
          comment: 3,
          collect: 5,
          date: "2020-02-05"
        },
        {
          id: "3",
          title: "Android 缩减、混淆处理和优化您的应用",
          abstract:
            "所有的 Java 开发人员可能会遇到这样的困惑？我该为堆内存设置多大空间呢？OutOfMemoryError 的异常到底涉及到运行时数据的哪块区域？该怎么解决呢？其实如果你经常解决服务器性能问题，那么这些问题就会变的非常常见，了解 JVM 内存也是为了服务器出现性能问题的时候可以快速的了解那块的内存区域出现问题，以便于快速的解决生产故障...",
          visiter: 10,
          comment: 3,
          collect: 5,
          date: "2020-02-05"
        },
        {
          id: "4",
          title: "Android 缩减、混淆处理和优化您的应用",
          abstract:
            "所有的 Java 开发人员可能会遇到这样的困惑？我该为堆内存设置多大空间呢？OutOfMemoryError 的异常到底涉及到运行时数据的哪块区域？该怎么解决呢？其实如果你经常解决服务器性能问题，那么这些问题就会变的非常常见，了解 JVM 内存也是为了服务器出现性能问题的时候可以快速的了解那块的内存区域出现问题，以便于快速的解决生产故障...",
          visiter: 10,
          comment: 3,
          collect: 5,
          date: "2020-02-05"
        },
        {
          id: "5",
          title: "Android 缩减、混淆处理和优化您的应用",
          abstract:
            "所有的 Java 开发人员可能会遇到这样的困惑？我该为堆内存设置多大空间呢？OutOfMemoryError 的异常到底涉及到运行时数据的哪块区域？该怎么解决呢？其实如果你经常解决服务器性能问题，那么这些问题就会变的非常常见，了解 JVM 内存也是为了服务器出现性能问题的时候可以快速的了解那块的内存区域出现问题，以便于快速的解决生产故障...",
          visiter: 10,
          comment: 3,
          collect: 5,
          date: "2020-02-05"
        },
        {
          id: "6",
          title: "Android 缩减、混淆处理和优化您的应用",
          abstract:
            "所有的 Java 开发人员可能会遇到这样的困惑？我该为堆内存设置多大空间呢？OutOfMemoryError 的异常到底涉及到运行时数据的哪块区域？该怎么解决呢？其实如果你经常解决服务器性能问题，那么这些问题就会变的非常常见，了解 JVM 内存也是为了服务器出现性能问题的时候可以快速的了解那块的内存区域出现问题，以便于快速的解决生产故障...",
          visiter: 10,
          comment: 3,
          collect: 5,
          date: "2020-02-05"
        }
      ]
    };
  },
  methods: {
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
  .list {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color: #ffffff;
    width: 100%;
    .blog-item {
      padding: 40px 60px;
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
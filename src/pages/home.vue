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
        <h2>About Me(关于我)</h2>
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
        <h2>This Works (作品)</h2>
      </div>
    </div>
    <div class="technical-ability">
      <div class="container">
        <h2>Technical Ability (技能)</h2>
      </div>
    </div>
    <div class="more-information">
      <div class="container">
        <h2>More Information(更多)</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home"
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
    h2 {
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
    h2 {
      text-align: center;
      font-size: 36px;
      color: #ffffff;
    }
  }
  .technical-ability {
    padding: 80px 0;
    background-color: #43b5e9;
    h2 {
      text-align: center;
      font-size: 36px;
      color: #ffffff;
    }
  }
  .more-information {
    padding: 80px 0;
    h2 {
      text-align: center;
      font-size: 36px;
    }
  }
}
</style>
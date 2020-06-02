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
    <div>text</div>
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
}
</style>
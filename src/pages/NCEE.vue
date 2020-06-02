<template>
  <div class="index">
    <h1>距离2020年高考还有</h1>
    <h2>{{countdown}}</h2>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      countdown: "",
      T: {}
    };
  },
  mounted() {
    this.startCountDown();
  },
  methods: {
    startCountDown() {
      this.calculateTime();
      this.T = setInterval(() => {
        this.calculateTime();
      }, 1000);
    },
    calculateTime() {
      let startDate = new Date();
      let endDate = new Date(2020, 6, 6);
      let second = parseInt((endDate.getTime() - startDate.getTime()) / 1000);
      let s = second % 60;
      let m = parseInt(second / 60) % 60;
      let h = parseInt(second / 60 / 60) % 60;
      let d = parseInt(second / 60 / 60 / 24);
      this.countdown = `${d}天${h}小时${m}分${s}秒`;
    }
  }
};
</script>

<style lang="scss">
.index {
  background-color: #000000;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  h1 {
    margin-top: 260px;
    color: #ffffff;
    font-size: 50px;
  }
  h2 {
    margin-top: 60px;
    color: #ffffff;
    font-size: 40px;
  }
}
</style>

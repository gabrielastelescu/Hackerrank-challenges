<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container align="center" >
      <b-row align-v="center" >
        <b-col>
          <ul class="menu-list">
            <li><router-link :to='{ name: "SockMerchant"}'>Sock Merchant</router-link></li>
            <li><router-link :to='{ name: "CountingValleys"}'>Counting Valleys</router-link></li>
            <li><router-link :to='{ name: "JumpingOnTheClouds"}'>Jumping on the Clouds</router-link></li>
            <li><router-link :to='{ name: "Holoalphabetic"}'>Holoalphabetic</router-link></li>
            <li><router-link :to='{ name: "MinimalOperations"}'>Minimal Operations</router-link></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Happy Coding!'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
.menu-list {
  width: 304px;
  a {
    font-size: 18px;
    // display: block;
    padding: 1px 0 8px 0;
    position: relative;
    display: inline-block;
    padding-left: 10px;
    line-height: 26px;
    vertical-align: middle;
  }
  li {
    text-align: left;
  }
}
h1 {
  font-weight: normal;
  color: #FF1493;
}
h2 {
  font-weight: normal;
  color: #A9A9A9;
}
.result {
  color: #00FF00;
}
.input {
  color: #0000ff;
}
</style>

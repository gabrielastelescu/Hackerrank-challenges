<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <b-row v-for="(arr, index) in testCases" v-bind:key="index">
        <b-col>
          <h2>{{ sampleInput }} {{index + 1}}</h2>
          <p class="input">Clouds and thunderheads: {{ arr.length }}</p>
          <p class="input">{{ arr }}</p>
          <h2>{{ sampleOutput }} {{index + 1}}</h2>
          <p class="result">Jumps: {{ jumpingOnClouds(arr) }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'JumpingOnTheClouds',
  data () {
    return {
      msg: 'Hackerank: Welcome to "Jumping on the clouds" challenge',
      sampleInput: 'Sample Input',
      sampleOutput: 'Sample Output',
      arr1: [0, 0, 1, 0, 0, 1, 0],
      arr2: [0, 0, 0, 0, 1, 0],
      arr3: [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
        1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      arr4: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      arr5: [0, 0, 0, 1, 0, 0]
    };
  },
  computed: {
    testCases () {
      return [this.arr1, this.arr2, this.arr3, this.arr4, this.arr5];
    }
  },
  methods: {
    jumpingOnClouds: function (c) {
      let clouds = [];

      for (var i = 0; i < c.length; i++) {
        if (c[i + 1] === 0 && i + 1 < c.length) {
          if (i + 2 < c.length && c[i + 2] === 0) {
            clouds.push(i + 2);
            i += 1;
          } else {
            clouds.push(i + 1);
          }
        } else if (c[i + 2] === 0 && i + 2 < c.length) {
          clouds.push(i + 2);
          i += 1;
        } else {
          i += 1;
        }
      }

      return clouds.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

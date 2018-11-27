<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>(D: Downhill, U: Uphill)</h2>
    <b-container>
      <b-row v-for="(str, index) in testStrings" v-bind:key="index">
        <b-col>
          <h2>{{ sampleInput }} {{index + 1}}</h2>
          <p class="input">Total steps: {{ str.length }}</p>
          <p class="input">{{ str }}</p>
          <h2>{{ sampleOutput }} {{index + 1}}</h2>
          <p class="result">Number of valleys the hiker went down: {{ countingValleys(str) }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'CountingValleys',
  data () {
    return {
      msg: 'Hackerank: Counting Valleys challenge',
      sampleInput: 'Sample Input',
      sampleOutput: 'Sample Output',
      str1: 'UDDDUDUU',
      str2: 'DDUUDDUDUUUD'
    };
  },
  computed: {
    testStrings () {
      return [this.str1, this.str2];
    }
  },
  methods: {
    countingValleys: function (s) {
      let seaLevel = 0;
      let currentLevel = 0;
      let nrOfValleys = 0;
      let valleyTrack = false;

      [...s].forEach((c) => {
        currentLevel = c === 'D' ? --currentLevel : ++currentLevel;

        if (currentLevel === seaLevel) {
          if (valleyTrack) nrOfValleys++;
          // reset
          valleyTrack = false;
        } else if (c === 'D' && currentLevel < 0) {
          valleyTrack = true;
        }
      });

      return nrOfValleys;
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

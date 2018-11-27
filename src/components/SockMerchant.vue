<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <b-row v-for="(arr, index) in testArrays" v-bind:key="index">
        <b-col>
          <h2>{{ sampleInput }} {{index + 1}}</h2>
          <p class="input">{{ arr.length }}</p>
          <p class="input">{{ arr }}</p>
          <h2>{{ sampleOutput }} {{index + 1}}</h2>
          <p class="result">Pairs of socks: {{ matchingPairs(arr) }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SockMerchant',
  data () {
    return {
      msg: 'Hackerank: Sock Merchant challenge',
      sampleInput: 'Sample Input',
      sampleOutput: 'Sample Output',
      arr1: [10, 20, 20, 10, 10, 30, 50, 10, 20],
      arr2: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
    };
  },
  computed: {
    testArrays () {
      return [this.arr1, this.arr2];
    }
  },
  methods: {
    matchingPairs: function (arr) {
      let socksGroupedByColor = [];
      let totalPairOfSocks = 0;

      // First, let's group socks by color
      for (var i = 0; i < arr.length; i++) {
        let pairs = arr.filter(k => k === arr[i]);
        let intersection = socksGroupedByColor.filter(element => element.includes(arr[i]));
        if (intersection.length === 0) {
          socksGroupedByColor.push(pairs);
        }
      }

      // Now that we got them all together,
      // let's see how many pairs we can make for each group of socks
      socksGroupedByColor.forEach(function (element) {
        totalPairOfSocks += ~~(element.length / 2);
      });

      return totalPairOfSocks;
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

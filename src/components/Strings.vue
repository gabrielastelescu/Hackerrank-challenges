<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <b-row v-for="(obj, index) in testCases" v-bind:key="index">
        <b-col>
          <h2>{{ sampleInput }} {{index + 1}}</h2>
          <p class="input">{{ obj.s }}</p>
          <p class="input">Number of characters the string can reach: {{ obj.n }}</p>
          <h2>{{ sampleOutput }} {{index + 1}}</h2>
          <p class="result">Total occurings {{ repeatedString(obj.n, obj.s) }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Strings2',
  data () {
    return {
      msg: 'Hackerank: Strings challenge',
      sampleInput: 'Sample Input',
      sampleOutput: 'Sample Output'
    };
  },
  computed: {
    testCases () {
      return [{ n: 10, s: 'aba' }, { n: 1000000000000, s: 'a' }, {s: 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', n: 736778906400}];
    }
  },
  methods: {
    repeatedString: function (n, s) {
      if (s.length === 1 && s === 'a') return n;

      let repeatingStringCount = Math.trunc(n / s.length);
      let charactersReminder = n % s.length;
      let matchingAInS = (s.match(/a/g) || []).length;
      let totalAChars = matchingAInS * repeatingStringCount;

      totalAChars += (s.substring(0, charactersReminder).match(/a/g) || []).length;

      return totalAChars;
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

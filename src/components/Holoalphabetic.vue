<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <b-row v-for="(obj, index) in testCases" v-bind:key="index">
        <b-col>
          <h2>{{ sampleInput }} {{index + 1}}</h2>
          <p class="input">{{ obj }}</p>
          <h2>{{ sampleOutput }} {{index + 1}}</h2>
          <p class="result">The given sentence is {{ checkString(obj) }}. </p>
        </b-col>
      </b-row>
      <p>Test result for panagrams as binary: {{ checkStrings(testCases)}}</p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Strings1',
  data () {
    return {
      msg: 'Hackerank: Holoalphabetic sentences  challenge',
      sampleInput: 'Sample Input',
      sampleOutput: 'Sample Output'
    };
  },
  computed: {
    testCases () {
      return ['We promptly judged antique ivory buckles for the next prize', 'We promptly judged antique ivory buckles for the prize', 'the quick brown fox jumps over the lazy dog', 'the quick brown fox jump over the lazy dog'];
    }
  },
  methods: {
    checkStrings: function (strings) {
      let result = '';
      strings.forEach(str => {
        // transform the string without spaces into an array of chars
        let charsArrayFromString = str.replace(/\s+/g, '').split('');
        // all distinct chars
        let unique = [...new Set(charsArrayFromString)];
        // nr of letters in the English alphabet is 26, therefore the result
        result += unique.length >= 26 ? 1 : 0;
      });
      return result;
    },
    checkString: function (str) {
      let result = '';
      let charsArrayFromString = str.replace(/\s+/g, '').split('');
      let unique = [...new Set(charsArrayFromString)];
      result += unique.length >= 26 ? 'a holoalphabetic sentence' : 'not a holoalphabetic sentence';
      return result;
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
  color: #008000;
}
.input {
  color: #0000ff;
}
</style>

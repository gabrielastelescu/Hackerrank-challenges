<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 class="problem">Problem: A string s is said to be Amazing if no two adjacent characters in the string are the same.<br>
    For example, "a", "ab" "abab", "abcbcb" are all Amazing strings whereas strings such as "abb", "aabb", "abcdeebdcc" are all not Amazing.<br>
    Given a set of words[ ] return the minimum number of operations required to convert the strings to Amazing. <br>Think of one operation as replacing one of the characters in the input string with any character from a-z.<br>
    So to make the string "aabb" amazing, we would need two operations. <br> And to make the string "aaab" amazing, we would need only one operation.</h3>
    <b-container>
      <b-row v-for="(word, index) in words" v-bind:key="index">
        <b-col>
          <h2>{{ sampleInput }} {{index + 1}}</h2>
          <p class="input">{{ word }}</p>
        </b-col>
      </b-row>
      <h2>{{ sampleOutput }}</h2>
      <p class="problem">Minimum number of operations to make a string amazing for each input:</p><h2> {{ minimalOperations(words)}}</h2>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Minimal Operations',
  data () {
    return {
      msg: 'Hackerank: Minimal Operations challenge',
      sampleInput: 'Sample Input',
      sampleOutput: 'Sample Output'
    };
  },
  computed: {
    words () {
      return ['ab', 'aab', 'abb', 'abab', 'abaaaba'];
    }
  },
  methods: {
    minimalOperations: function (words) {
      let result = [];
      words.forEach(str => {
        let strAsArray = [...str];
        let minOp = 0;
        for (var i = 0; i < strAsArray.length; i++) {
          if (strAsArray[i] === strAsArray[i + 1]) {
            minOp++;
            i++;
          }
        }
        result.push(minOp);
      });
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
.problem {
  font-weight: normal;
  color: #FF1493;
  text-align:center
}
.input {
  color: #0000ff;
}
</style>

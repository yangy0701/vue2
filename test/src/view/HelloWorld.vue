<template>
  <div class="hello">

   <button @click="preview">预览</button>
   <!-- <review></review> -->
  </div>
</template>

<script>
import {mixins} from "../methods/minxin"
// import review from "./pdf"
export default {
  name: 'HelloWorld',
  components:{
    review
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:"",
      dialogVisible:false
    }
  },
  methods:{
    preview(){
    let a  = '1'
      // this.url = "../../static/pdf/compressed.tracemonkey-pldi-09.pdf";
      // this.dialogVisible=true
    }
  },
  mixins:[mixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

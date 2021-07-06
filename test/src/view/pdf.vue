<template>
    <div class="previw">
        <pdf src="../../static/pdf/2222.pdf"></pdf>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  components: {pdf},
  // props:{
  //   url:{
  //     type:String,
  //     default:""
  //   },
  //   dialogVisible:{
  //     type:Boolean,
  //     default:false
  //   }
  // },
  data(){
    return {
      url:""
    }
  },
  methods:{
    // doCancel(){this.dialogVisible=false}
  }
}
</script>

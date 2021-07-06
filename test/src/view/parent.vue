<template>
    <div>
        <!-- parent
        <childrent ref="getchildrent" @getdata="getdata">
           <p>123465</p>
        </childrent> -->
        <!-- <p>{{message}}</p>
        <p>{{parent.name}}---{{parent.age}}</p> -->
        <div class="content">
          <div class='left'></div>
          <div class='right'></div>
        </div>
    </div>
</template>
<script>
import childrent from '../components/childrent.vue'
import {mixins} from "../methods/minxin"
export default {
    components:{
        childrent
    },
    mixins:[mixins],
    data(){
        return{
            parent:{
                name:"123",
                age:"12"
            }
        }
    },
    created(){
        console.log(123)
        this.message = "我是改变的mixin"
    },
    mounted(){
        console.log(process.env.NODE_ENV)
        this.$refs.getchildrent.add()
        this.$set(this.parent,"age",18)
        this.$delete(this.parent,"age")
    },
    methods:{
        getdata(event){
            console.log(event)
        }
    }
}
</script>
<style  scoped>
  .content{
    display :flex;
  }
  .left{
    width:200px;
    height: 100vh;
    background: red;
  }
  .right{
    flex:1;
    background: yellow;
  }
</style>

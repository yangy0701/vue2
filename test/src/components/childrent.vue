<template>
    <div class="children">
     <p>123</p>
        <slot></slot>
      <p>------------------</p>
        <!-- <p>msg:{{msg}}</p>
        <button @click='adds'>添加</button> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"123"
        }

    },
    methods:{
        add(){
            console.log(234)
        },
        adds(){
            this.$emit('getdata',"55555")
        }
    }
}
</script>

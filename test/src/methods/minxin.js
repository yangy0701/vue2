export  const mixins = {
    data(){
        return{
            message:"我是mixins"
        }
    },
    created(){
        console.log(this.message)
    },
    methods:{

    }
}
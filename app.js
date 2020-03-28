new Vue({
  el:"#vue-app",
  data:{
    name:"Petch Akkarapol",
    job:"Master Chef",
    age:34,
    status:false
  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(name){
      return this.name = name
    }
  }
})

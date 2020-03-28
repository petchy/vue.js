new Vue({
  el:"#vue-app",
  data:{
    name:"Petch Akkarapol",
    job:"Master Chef",
    age:34,
    status:false,
    website: "https://www.youtube.com",
    count:0,
    foods:[]
  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(name){
      return this.name = name
    },
    addAge:function(){
      console.log(++this.age)
    },
    subtrackAge:function(){
      console.log(--this.age)
    },
    addCount:function(){
      console.log(this.count++)
    }
  }
})

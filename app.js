Vue.component('showview', {
  props:{
    title:{
      type:String,
      required:true
    },
    view:{
      type:Number,
      default:0
    }
  },
  template:'<h3>{{title}} | {{ view }}</h3>'
});

Vue.component('showcomment', {
  props:["commentpost"],
  template:'<li><i>{{commentpost}}</i></li>'
});

new Vue({
  el: "#vue-app",
  data:{
    newComment:'',
    comments: ["Hello", "Vue.js", "PHP"]
  },
  methods:{
    addComment:function(){
     this.comments.push(this.newComment);
     this.newComment = '';
    }
  }
});

Vue.component('like', {
  data: function(){
    return{
      count:0
    }
  },
  template:'<button type="button" v-on:click="count++">Click : {{ count }}</button>'
});

Vue.component('post', {
  props:['title'],
  template:'<h3>{{title}}</h3>'
});

new Vue({
  el: "#vue-app"
});

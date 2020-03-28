Vue.component('like', {
  data: function(){
    return{
      count:0
    }
  },
  template:'<button type="button" v-on:click="count++">Click : {{ count }}</button>'
});

Vue.component('post', {
  template:'<h3>New Post</h3>'
});

new Vue({
  el: "#vue-app"
});

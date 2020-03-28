var post = new Vue({
  el:"#post",
  data:{
    title: "Covid-19",
    message: "Choose correctly! How to use each type of hygienic mask"
  }
});

var comment = new Vue({
  el:"#comment",
  data:{
    comment: "As we all know that nowadays Covid19 is spreading around very quickly. People are more aware of how to protect themselves. The easiest way to protect themselves is to wear a hygienic mask. But do you know there are 4 types of hygienic masks and are you sure that the one you are wearing is correct"
  }
});

var like = new Vue({
  el:"#likeSystem",
  data:{
    like:false
  }
});

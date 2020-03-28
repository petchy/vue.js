new Vue({
  el:"#vue-app",
  data:{
    newData:{
      name:"",
      salary:0
    },
    employees: [
      {name: "Jesica", salary: 20000},
      {name: "Peter", salary: 25000}
    ]
  },
  methods:{
    addEmployee:function(){
      this.employees.push({
        name: this.newData.name,
        salary: this.newData.salary
      })
      this.newData.name = '';
      this.newData.salary = 0;
    },
    showMessage:function(){
      console.log("Send data...");
    }
  },
  computed:{
    salarySummary:function(){
      var summary = this.employees.reduce(function(value, data) {
        return value + Number(data.salary);
      }, 0);
      return summary;
    },
    average:function(){
      var summary = this.employees.reduce(function(value, data) {
        return value + Number(data.salary);
      }, 0);
      return summary/this.employees.length;
    }
  },
  watch:{
    //after salarySummary call showMessage
    salarySummary:function(){
      this.showMessage();
    }
  }
})

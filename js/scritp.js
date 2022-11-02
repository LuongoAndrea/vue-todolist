const { createApp } = Vue
createApp({
  data() {
    return {
        newTask:{
            text: '',
            done: false
        },
        list:[
            {
                text: 'panini',
                done: false
            },
            {
                text: 'uova',
                done: false
            },
            {
                text: 'carne',
                done: false
            },
            {
                text: 'pasra',
                done: false
            },
            {
                text: 'latte',
                done: false
            }
        ]
    }

  },
  methods:{
    push(){
        if(newTask.text.length > 3){
        this.list.push({...this.newTask});
        }
        this.newTask.text = '';
    },
    remove(index){
        this.list.splice(index, 1);
    },
    linea(index){
        this.list[index].done = true;

        console.log(this.list[index].done);
        console.log(this.list[index]);
        console.log('');
    }
  }
}).mount('#app')

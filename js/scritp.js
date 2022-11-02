const { createApp } = Vue
createApp({
  data() {
    return {
        nuovo:{
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
        let newElemento = document.getElementById('text').value;
        console.log(newElemento)
        let aggiungi = Object.assign({}, newElemento)
        this.list.push(aggiungi);
        this.nuovo.text = '';
        document.getElementById('text').value = '';
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

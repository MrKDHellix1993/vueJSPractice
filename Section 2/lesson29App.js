let vm1 = new Vue({
    el: '#app1',
    data: {
        setRedCSS: false,
        color: 'green',
        width: 100,
        title: "Hello from Vue1 Object",
        todoList: []
    },
    beforeCreate: function () {
        console.log('beforeCreate');
    },
    created: function () {
        console.log('Created');
        fetch('https://fakestoreapi.com/products/').
        then(response => {
            console.log(response )
        }

        );
        // .then(this.todoList = response);
    },
    computed: {
        divClassCss: function () {
            return {
                red: this.setRedCSS,
                blue: !this.setRedCSS
            }
        },
        myStyle: function () {
            return {
                backgroundColor: 'orange',
                width: this.width + 'px'
            }
        }
    }
});

setTimeout(function () {
    console.log('Vue 2 Btn title change', vm2.$refs.vue2Btn);
    vm2.$refs.vue2Btn.title = "New Title";
}, 1000)

Vue.component('hello', {
    template: '<h2>Hello from Component</h2>'
});

const vm2 = new Vue({
    el: '#app2',
    data: {
        setRedCSS: false,
        color: 'green',
        width: 100
    },
    computed: {
        divClassCss: function () {
            return {
                red: this.setRedCSS,
                blue: !this.setRedCSS
            }
        },
        myStyle: function () {
            return {
                backgroundColor: 'orange',
                width: this.width + 'px'
            }
        }
    },
    methods: {
        updateTitle: function () {
            vm1.title = 'Updated New Tilte from Vue2 Obj...';
        }
    }
});
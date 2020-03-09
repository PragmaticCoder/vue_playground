new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Alvi',
        url: 'https://github.com/PragmaticCoder'
    },
    methods: {
        greet: function (time) {
            return `Hello there ${this.name}, Good ${time}`
        }
    }
})
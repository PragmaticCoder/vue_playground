new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Alvi'
    },
    methods: {
        greet: function (time) {
            return `Hello there ${this.name}, Good ${time}`
        }
    }
})
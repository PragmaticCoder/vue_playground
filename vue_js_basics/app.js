new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        name: 'Alvi'
    },
    methods: {
        greet: function () {
            return `Hello There! ${this.name}`
        }
    }
})
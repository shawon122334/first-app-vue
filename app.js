new Vue({
    el:"#app",
    data: {
        title : "Sabbir",
        bikes: ['Yamaha','Honda'],
        books: {
            name : "C programming by subeen "
        },
        photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        alt: 'this is an image',
        link: 'https://google.com',
        hi: 'hi this is vue js',
        yes: "<strong>Hello there</strong>" 
    },
    methods:{
        hello(){
            return this.books.name;
        }
    }
});
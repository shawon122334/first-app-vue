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
        yes: "<strong>Hello there</strong>" ,
        user_name : "john",
        user_age: 17,
        allowed_age: 18,
        bikes :['honda','yamaha','tvs','kawasaki'],
        users :{
            name: 'sabbir',
            age : 23,
            phone : 892598
        },
        myName: 'sabbir'
    },
    methods:{
        hello(){
            return this.books.name;
        },
        checkValidity(){
            return this.user_age >= this.allowed_age ? true:false ; 
        },
        update(){
            // setTimeout(() => {
            //     this.myName = 'Shawon'
            // }, 2000);
            this.myName='shawon'
        }
    }
});
'use strict';
const express= require ('express');
const server =express();
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

server.use(cors());
server.use(express.json());
const PORT=process.env.PORT || 3001;
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});



//create a schema
const BooksSchema = new mongoose.Schema({
    bookName: String,
    description: String,
    status: String,
    bookUrl:String,
});

//create a schema
const UserSchema = new mongoose.Schema({
    useremail: String,
    books: [BooksSchema]
});

//create a model 
const myBookModel = mongoose.model('Book', BooksSchema);

//create a model
const myUserModel = mongoose.model('User', UserSchema);

//data seeding (store data)
// function seedBooksCollection (){
//     const book1 = new myBookModel({
//         bookName : '1984',
//         description : 'The year 1984 has come and gone, but George Orwell\'s prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of "negative utopia"—a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.',
//         status : 'Top rated'
//     });

//     const book2 = new myBookModel({
//         bookName : 'The Lord of the Rings',
//         description : 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.',
//         status : 'favorite'
//     });

//     // console.log(frankie);
//     // console.log(sherry);

//     // book1.save();
//     // book2.save();
// }


//data seeding 
function seedUsersCollection (){
    const user1= new myUserModel({
    useremail:`ryandl7o07@gmail.com`,
    books: [
        {
        bookName : '1984',
        description : 'The year 1984 has come and gone, but George Orwell\'s prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of "negative utopia"—a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.',
        status : 'Top rated',
        bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470.jpg',
        },
        {
         bookName : 'The Lord of the Rings',
         description : 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.',
         status : 'favorite',
         bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg',
        },
        {
         bookName : 'Gone with the Wind',
         description : 'Scarlett O\'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman\'s March to the Sea. ',
         status : 'favorite',
         bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551144577l/18405._SY475_.jpg',
        }
    ]
    });
    const user2= new myUserModel({
    useremail:`ayanaser402@gmail.com`,
    books: [
        {
        bookName : '1984',
        description : 'The year 1984 has come and gone, but George Orwell\'s prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of "negative utopia"—a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.',
        status : 'Top rated',
        bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470.jpg',
        },
        {
         bookName : 'The Lord of the Rings',
         description : 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.',
         status : 'favorite',
         bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg',
        },
        {
         bookName : 'Gone with the Wind',
         description : 'Scarlett O\'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman\'s March to the Sea. ',
         status : 'favorite',
         bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551144577l/18405._SY475_.jpg',
        }
    ]
    });
    const user3= new myUserModel({
    useremail:`khalil_ghanem7@yahoo.com`,
    books: [
        {
        bookName : '1984',
        description : 'The year 1984 has come and gone, but George Orwell\'s prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of "negative utopia"—a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words.',
        status : 'Top rated',
        bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470.jpg',
        },
        {
         bookName : 'The Lord of the Rings',
         description : 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.',
         status : 'favorite',
         bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg',
        },
        {
         bookName : 'Gone with the Wind',
         description : 'Scarlett O\'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman\'s March to the Sea. ',
         status : 'favorite',
         bookUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551144577l/18405._SY475_.jpg',
        }
    ]
    });

    // console.log(user1);
    // console.log(user2);
    user1.save();
    user2.save();
    user3.save();
    // console.log(user1);
}
// seedUsersCollection ();

server.get('/',homeHandler);
server.get('/books', getBooksHandler);
server.post('/addbooks', addbBookssHandler);
server.delete('/deletebooks/:idx', deleteBookssHandler);
server.put('/updatebooks/:idx', updateBookssHandler);


function homeHandler(req,res){
    res.send('Home Route');
}

function getBooksHandler(req,res){
    let requestedUserEmail = req.query.useremail;
    myUserModel.find({useremail:requestedUserEmail},function(err,ownerData){
        if(err){
            res.send('something went wrong');
        }
        else
        {
            // console.log(ownerData[0].cats);
            res.send(ownerData[0].books);
        }
    })
}

function addbBookssHandler(req,res){
    // console.log(req.body);
    const {bookname,bookDescription,bookStatus,useremail} =req.body;
    myUserModel.find({useremail},(err,userdata)=>{
        if(err){
            res.send('something went wrong');
        }else{
            // console.log(userdata[0].books);
            userdata[0].books.push({
                bookName:bookname,
                description:bookDescription,
                status:bookStatus,
            })
            userdata[0].save();
            res.send(userdata[0].books);
        }
    })
}

function deleteBookssHandler (req,res){
    const {useremail} =req.query;
    const idx=Number(req.params.idx);
    // console.log(useremail,idx);
    myUserModel.find({useremail},(err,userdata)=>{
        if(err){
            res.send('something went wrong');
        }else{
            const bookArr=userdata[0].books.filter((book,index)=>{
                if(index !==idx){
                    return book;
                }
            });
            userdata[0].books=bookArr;
            userdata[0].save();
            res.send(userdata[0].books);
        }
    })

}

function updateBookssHandler (req,res){
    const {bookname,bookDescription,bookStatus,useremail}=req.body;
    const idx=Number(req.params.idx);
    myUserModel.findOne({useremail},(err,userdata)=>{
        if(err){
            res.send('something went wrong');
        }else{
             userdata.books.splice(idx,1,{
                bookName:bookname,
                description:bookDescription,
                status:bookStatus,
            });
            userdata.save();
            res.send(userdata.books);
        }
    })
}


server.listen(PORT, ()=>{
    console.log(`listening for PORT:${PORT}`);
});
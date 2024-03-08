import express from "express";
import { Book } from "./models/bookModel.js";

import {connectDB}  from "./connect.js"


//server
const app = express();

//connect to db and server
connectDB()



//Routes
app.use(express.json());

//main page
app.get('/', (request, response) => {
    return response.status(234).send('Welcome to Mern Stack Tutorial');
});


//create a new record of a book
app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
          !request.body.publishYear  
          ) {
            return response.status(400).send({
                message:'Send all required fields: title, author, publishYear',
            })
        }
        
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        
        const book = await Book.create(newBook);
        
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Get all books from database
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});
        response.status(200).json({count:books.length,data:books });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
        
    }
});

//Route for get one element from database by id
app.get('/books/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        response.status(200).json({book});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
        
    }
});



//Route for update a Book
app.put('/books/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
          !request.body.publishYear  
          ) {
            return response.status(400).send({
                message:'Send all required fields: title, author, publishYear',
            })
        }
        
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        response.status(200).send({message:'book updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
        
    }
});


//Route for delet a Book
app.delete('/books/:id', async (request, response) => {
    try {
        
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        response.status(200).send({message:'book deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
        
    }
});


//npm run dev
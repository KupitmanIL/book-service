import * as bookService from '../services/book.services.js';

export const addBook = async (req, res, next) => {
    try {
        const result = await bookService.addBook(req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export const findBookByIsbn = async (req, res, next) => {
    try {
        const result = await bookService.findBookByIsbn(req.params.isbn);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const removeBook = async (req, res, next) => {
    try {
        const result = await bookService.removeBook(req.params.isbn);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const updateBookTitle = async (req, res, next) => {
    try {
        const result = await bookService.updateBookTitle(
            req.params.isbn,
            req.params.title
        );
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const findBooksByAuthor = async (req, res, next) => {
    try {
        const result = await bookService.findBooksByAuthor(req.params.author);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const findBooksByPublisher = async (req, res, next) => {
    try {
        const result = await bookService.findBooksByPublisher(req.params.publisher);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const findBookAuthorsByIsbn = async (req, res, next) => {
    try {
        const result = await bookService.findBookAuthorsByIsbn(req.params.isbn);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const findPublishersByAuthor = async (req, res, next) => {
    try {
        const result = await bookService.findPublishersByAuthor(req.params.author);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export const removeAuthor = async (req, res, next) => {
    try {
        const result = await bookService.removeAuthor(req.params.author);
        res.json(result);
    } catch (err) {
        next(err);
    }
}
import {Router} from 'express';
import {addBook,
    findBookByIsbn,
    removeBook,
    updateBookTitle,
    findBooksByAuthor,
    findBooksByPublisher,
    findBookAuthorsByIsbn,
    findPublishersByAuthor,
    removeAuthor} from '../controllers/book.controller.js';

import validate from "../middlewares/validator.middleware.js";


const router = Router();

router.post('/book', validate('addBook'), addBook );
router.get('/book/:isbn', validate('findBookByIsbn'), findBookByIsbn );
router.delete('/book/:isbn', validate('removeBook'), removeBook );
router.patch('/book/:isbn/title/:title', validate('updateBookTitle'), updateBookTitle );
router.get('/books/author/:author', validate('findBooksByAuthor'), findBooksByAuthor );
router.get('/books/publisher/:publisher', validate('findBooksByPublisher'), findBooksByPublisher );
router.get('/authors/book/:isbn', validate('findBookAuthorsByIsbn'), findBookAuthorsByIsbn);
router.get('/publishers/author/:author', validate('findPublishersByAuthor'), findPublishersByAuthor);
router.delete('/author/:author', validate('removeAuthor'), removeAuthor);

export default router;
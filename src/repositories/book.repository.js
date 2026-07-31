import {Book} from '../models/index.js';

export const addBook = async (book, options = {}) => await Book.create(book);

export const findBookById = async (id, options = {}) => await Book.findByPk(id);
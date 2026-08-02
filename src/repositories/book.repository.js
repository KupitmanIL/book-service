import {Book} from '../models/index.js';

export const addBook = async (book, options = {}) => {return Book.create(book, options);};

export const findBookById = async (id, options = {}) => {return Book.findByPk(id, options);};
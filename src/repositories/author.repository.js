import {Author, Book} from "../models/index.js";
import authorModel from "../models/author.model.js";

export const findAuthorById = async(id,options = {}) => Author.findByPk(id);

export const addAuthor = async (author,options = {}) => Author.create({name: author.name, birth_date: new Date(author.birthDate)});
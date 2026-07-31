import {Publisher} from '../models/index.js';

export const findPublisherById = async (id,options = {}) => Publisher.findByPk(id);

export const addPublisher = async (publisherName,options = {}) => Publisher.create({publisher_name: publisherName});
import { Book, IBook } from './cores';
import { BookDTO, IBookDTO } from './dtos';

/**
 getBook

 @example
 getBook({title:'test', subtitle:'test', image:'test})
 @param {IBook} params
 @property {string} params.title
 @property {string} params.subtitle
 @property {string} params.image
 @returns {Book} Book
 */
export const getBook = (params: IBook) => {
  if (!params) throw new Error('[domain] empty params');
  return new Book(params);
};

/**
 getBookDTO

 @example
 getBookDTO({title:'test', subtitle:'test', image:'test})
 @param {IBookDTO} params
 @property {string} params.title
 @property {string} params.subtitle
 @property {string} params.image
 @returns {BookDTO} BookDTO
 */
export const getBookDTO = (params: IBookDTO) => {
  if (!params) throw new Error('[domain] empty params');
  return new BookDTO(params);
};

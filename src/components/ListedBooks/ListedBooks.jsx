import React, { useContext } from 'react';
import { BookContext } from '../../../src/ContextApi/ContextApi';

const ListedBooks = () => {

    const { readBooks, wishlistBooks } = useContext(BookContext);

    return (
        <div>
            <h1>Read Books</h1>

            {
                readBooks.map(book => (
                    <p key={book.bookId}>{book.bookName}</p>
                ))
            }

            <h1>Wishlist Books</h1>

            {
                wishlistBooks.map(book => (
                    <p key={book.bookId}>{book.bookName}</p>
                ))
            }
        </div>
    );
};

export default ListedBooks;
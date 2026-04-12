import React, { useContext } from 'react';
import { BookContext } from '../../../src/ContextApi/ContextApi';

const PagesToRead = () => {

    const { readBooks } = useContext(BookContext);

    return (
        <div>
            <h1>Pages to Read</h1>

            {
                readBooks.map(book => (
                    <div key={book.bookId}>
                        <p>{book.bookName}</p>
                        <p>Pages: {book.totalPages}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default PagesToRead;
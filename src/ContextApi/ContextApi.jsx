import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const ContextApi = ({ children }) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    const addToRead = (book) => {
        const isExist = readBooks.find(b => b.bookId === book.bookId);
        if (!isExist) {
            setReadBooks([...readBooks, book]);
        }
    };

    const addToWishlist = (book) => {
        const isExist = wishlistBooks.find(b => b.bookId === book.bookId);
        if (!isExist) {
            setWishlistBooks([...wishlistBooks, book]);
        }
    };

    return (
        <BookContext.Provider value={{
            readBooks,
            wishlistBooks,
            addToRead,
            addToWishlist
        }}>
            {children}
        </BookContext.Provider>
    );
};

export default ContextApi;
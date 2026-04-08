import React, { use, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';

const booksPromise = fetch('BooksData.json').then(res => res.json());

const BookDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const books = use(booksPromise);
    const bookDetails = books.find(books => books.bookId == id);

    useEffect(() => {
        if (!bookDetails) {
            Navigate('/');
        }

    }, [bookDetails, navigate]);

    if (!bookDetails) return null;


    return (
        <div className='my-10 '>
            <div className="card lg:card-side max-w-[1070px] border border-[#d6d5d5]  container m-auto bg-base-100 shadow-xl rounded-2xl p-4">

                <div className='bg-base-300 p-18 rounded-2xl'>
                    <img
                    className='h-70 sm:h-120'
                    src={bookDetails.image}
                    alt={bookDetails.bookName} />
                </div>

                <div className="card-body">

                    <h2 className="card-title text-3xl font-bold">{bookDetails.bookName}</h2>
                    <p className='font-semibold text-xl'>By: {bookDetails.publisher}</p>

                    <p className='font-semibold text-xl'>{bookDetails.category}</p>
                    <p className='max-w-130'><span className='font-bold'>Review:</span> {bookDetails.review}</p>
                    <h4>{bookDetails.tags}</h4>

                    <div>
                        <h4>Number of Pages:  {bookDetails.totalPages}</h4>
                        <h4>Publisher:  {bookDetails.publisher}</h4>
                        <h4>Year of Publishing:  {bookDetails.yearOfPublishing}</h4>
                        <h4>Rating:  {bookDetails.rating}</h4>
                    </div>

                    <div className="card-actions justify-end">
                        <button className='btn'>Read</button>
                        <button className="btn btn-accent">Wishlist</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookDetails;
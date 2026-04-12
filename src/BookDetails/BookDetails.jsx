import React, { use, useContext, useEffect,  } from 'react';
import { FaTentArrowTurnLeft } from 'react-icons/fa6';
import { Navigate, useNavigate, useParams } from 'react-router';
import { BookContext } from '../ContextApi/ContextApi';

const booksPromise = fetch('BooksData.json').then(res => res.json());

const BookDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const books = use(booksPromise);

    const { addToRead, addToWishlist } = useContext(BookContext);

    const bookDetails = books.find(books => books.bookId == id);

    useEffect(() => {
        if (!bookDetails) {
            navigate('/');
        }

    }, [bookDetails, navigate]);

    if (!bookDetails) return null;


    


    return (
        <div className='my-10 '>
            <div className="card lg:card-side max-w-[1070px] border border-[#d6d5d5]  container m-auto bg-base-100 shadow-xl rounded-2xl p-4">

                <div className='bg-base-300 p-7 sm:p-18 rounded-2xl'>
                    <img
                    className='h-70 sm:h-120'
                    src={bookDetails.image}
                    alt={bookDetails.bookName} />
                </div>

                <div className="card-body">

                     <div className='flex justify-between items-center '>
                        <h2 className="card-title text-3xl font-bold">{bookDetails.bookName}</h2>
                        <button 
                        onClick={() => navigate(-1)}
                        className='btn btn-accent text-xl font-medium'><FaTentArrowTurnLeft />Back</button>
                     </div>
                    <p className='font-semibold text-xl'>By: {bookDetails.publisher}</p>

                    <p className='font-semibold text-xl'>{bookDetails.category}</p>

                    <p className='max-w-130'>

                        <span className='font-bold'>Review:</span> 

                        <span className='text-[#848383]'>{bookDetails.review}</span>
                    </p>

                    <h4 className='font-bold'>{bookDetails.tags}</h4>

                    <div className='max-w-75'>

                        <h4 className='flex justify-between'>
                            <span className='text-[#848383]'>Number of Pages:</span>

                             <span className='font-bold'>{bookDetails.totalPages}</span>
                        </h4>

                        <h4 className='flex justify-between'>
                            <span className='text-[#848383]'>Publisher: </span> 
                            <span className='font-bold'>{bookDetails.publisher}</span>
                        </h4>

                        <h4 className='flex justify-between'>
                            <span className='text-[#848383]'>Year of Publishing: </span> 
                            <span className='font-bold'>{bookDetails.yearOfPublishing}</span>
                        </h4>

                        <h4 className='flex justify-between'>
                            <span className='text-[#848383]'>Rating: </span> 
                            <span className='font-bold'>{bookDetails.rating}</span>
                        </h4>

                    </div>

                    <div className="card-actions justify-end">
                        <button 
                        onClick={() => addToRead(bookDetails)}
                        className='btn'>Read</button>

                        <button 
                        onClick={()=> addToWishlist(bookDetails)}
                        className="btn btn-accent">Wishlist</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookDetails;
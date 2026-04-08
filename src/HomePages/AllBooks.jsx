import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const booksPromise = fetch('BooksData.json').then(res => res.json());

const AllBooks = () => {

    const books =use(booksPromise);

    return (
        <div className='container m-auto '>

            <div className='flex flex-col justify-center items-center '>

                <h1 className='text-4xl font-extrabold py-5 px-10 my-8 bg-green-100 text-green-600 rounded-2xl'>Books</h1>

                <div className='flex flex-wrap gap-5 justify-between'>

                    {
                        books.map((books) => {
                        return ( 

                            <Link to={`/bookDetails/${books.bookId}`} className="card bg-base-200 p-6 shadow-xl w-80 border border-[#dfdddd]">

                                <figure>
                                    <img
                                    className='h-40 py-8 px-20 sm:px-24 bg-base-300 rounded-2xl'
                                    src={books.image}
                                    alt="Shoes" />
                                </figure>

                                <div className="">
                                    
                                    <div className='flex items-center py-5 gap-3'>

                                        {
                                        books.tags.map((tag) => (

                                            <div className="badge badge-success border-0 bg-green-100 text-green-500">{tag}</div>

                                        ))
                                    }
                                    </div>

                                    <h2 className="card-title font-bold text-3xl">
                                    {books.bookName}
                                    
                                    </h2>

                                    <p className='text-xl py-4'>{books.author}</p>

                                    <div className="flex justify-between border-t pt-4">

                                        <div className="font-medium text-xl">{books.category}

                                        </div>
                                        <div className="flex justify-center items-center gap-1 "> 

                                            <h4 className='font-medium text-xl'>{books.rating}</h4> 
                                            <p className='text-xl'><FaRegStar /></p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                        )})
                    }
                </div>
            </div>
            
        </div>
    );
};

export default AllBooks;
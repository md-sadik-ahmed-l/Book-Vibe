import React from 'react';
import Pngwing from '../assets/pngwing-1.png'
import Pngwing2 from '../assets/pngwing-2.png'

const Banner = () => {
    return (
        <div>

            <div className="hero container m-auto my-10">

                <div className="hero-content max-w-[1070px] bg-base-300 py-20 px-3 sm:px-25 rounded-2xl flex-col lg:flex-row-reverse ">

                    <img
                    src={Pngwing2}
                    className=" max-w-60 sm:max-w-sm rounded-lg bg-base-200 shadow-2xl"
                    />

                    <div>

                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. <br />Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>

                        <button className="btn btn-success">View The List</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;
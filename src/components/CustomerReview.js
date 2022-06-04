

const reviews = [
    { name: 'Robin smith', review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore' },
    { name: 'Robin smith', review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore' },
    { name: 'Robin smith', review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore' },
    { name: 'Robin smith', review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore' },

]

const CustomerReview = () => {

    return (
        <div id="review" className="flex w-full py-24">
            <div className="flex flex-col max-w-7xl mx-auto w-full justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="flex gap-4">
                        <span className=" text-5xl text-gray-600">{`What our`}</span>
                        <span className=" text-5xl text-sky-700">{`Customer`}</span>
                    </h1>
                    <h1 className="flex gap-4">
                        <span className=" text-5xl text-sky-700">{`are Saying`}</span>
                    </h1>
                    <p className=" font-light mt-4">
                        {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu`}
                    </p>
                </div>
                <div className="flex overflow-x-auto w-full">
                    <div className="flex w-full gap-12">
                        {
                            reviews.map((item, key) => {
                                return (
                                    <div key={key} className="flex flex-col items-center w-full py-8 px-8 bg-gradient-to-tr from-sky-500 via-sky-300 to-sky-100 rounded-lg gap-4">
                                        <span className="border-2 border-white w-16 h-16 rounded-full bg-sky-500">
                                        </span>
                                        <span className="text-lg font-light text-sky-600">
                                            {item.name}
                                        </span>
                                        <span className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-sky-500 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-sky-500 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-sky-500 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-sky-500 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-sky-500 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </span>
                                        <span className=" w-full border-b-2 border-sky-800"></span>
                                        <p className="text-sm font-light text-gray-700">
                                            {`" ${item.review} "`}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomerReview
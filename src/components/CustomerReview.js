import Marquee from "react-marquee-slider";
import times from "lodash/times";

const reviews = [
    { id: 0, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_0.jpg' },
    { id: 1, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_1.jpg' },
    { id: 2, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_2.jpg' },
    { id: 3, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_3.jpg' },
    { id: 4, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_4.jpg' },
    { id: 5, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_5.jpg' },
    { id: 6, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_6.jpg' },

    { id: 8, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_8.jpg' },
    { id: 9, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_10.jpg' },
    { id: 10, alt: 'รีวิวจากลูกค้า Vital-X Protein', src: '/asset/review/LINE_11.jpg' },
]

const CustomerReview = () => {

    const r1 = reviews.slice(0, 5)
    const r2 = reviews.slice(5,)

    return (
        <div id="review" className="flex w-full py-12">
            <div className="flex flex-col max-w-7xl mx-auto w-full justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="flex flex-col md:flex-row gap-4">
                        <span className=" text-4xl md:text-5xl text-gray-600">{`What our`}</span>
                        <span className=" text-4xl md:text-5xl text-sky-700">{`Customer`}</span>
                    </h1>
                    <h1 className="flex gap-4">
                        <span className=" text-4xl md:text-5xl text-sky-700">{`are Saying`}</span>
                    </h1>
                </div>
                <div className="flex flex-col overflow-x-auto w-full">

                    <div className="flex py-2 gap-6 md:gap-12">
                        {r1.map(item => {
                            return (<img key={item.id} src={item.src} alt={item.alt} className="object-contain h-auto w-4/5 md:w-2/3 rounded-2xl shadow-md" />)
                        })}
                    </div>
                    <div className="flex py-2 gap-6 md:gap-12">
                        {r2.map(item => {
                            return (<img key={item.id} src={item.src} alt={item.alt} className="object-contain h-auto w-4/5 md:w-2/3 rounded-2xl shadow-md" />)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview
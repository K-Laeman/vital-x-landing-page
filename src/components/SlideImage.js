import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: '/asset/gallery/Vital-x-1.jpg',
        caption: 'Slide 1'
    },
    {
        url: '/asset/gallery/Vital-x-2.jpg',
        caption: 'Slide 1'
    },
    {
        url: '/asset/gallery/Vital-x-3.jpg',
        caption: 'Slide 1'
    },
    {
        url: '/asset/gallery/Vital-x-4.jpg',
        caption: 'Slide 1'
    },
    {
        url: '/asset/gallery/Vital-x-5.jpg',
        caption: 'Slide 1'
    },
    {
        url: '/asset/gallery/Vital-x-6.jpg',
        caption: 'Slide 1'
    },

];

const SlideImage = () => {
    return (
        <div className='flex max-w-7xl mx-auto overflow-x-auto gap-14 snap-x no-scrollbar px-8 py-8 '>
            {
                slideImages.map((item, key) => {
                    return (
                        <img src={item.url} alt={item.caption} key={key} className=" w-[360px] object-contain rounded-xl" />
                    )
                })
            }
        </div>
    )
}

export default SlideImage
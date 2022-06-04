import SlideImage from "../components/SlideImage"

const ProductHowto = () => {
    return (
        <div id="howto" className="flex flex-col max-w-7xl w-full mx-auto py-24 gap-12">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-sky-700 ">
                    {'ผลิตภัณฑ์ VITAL X PROTEIN '}
                </h1>
                <h2 className="text-3xl font-thin text-gray-500 ">
                    {'สัมผัสประสบการณ์ผิวดูดีขึ้น ภายใน 2 สัปดาห์'}
                </h2>
            </div>
            <div className="flex justify-center w-full px-12 gap-24">
                <div className="flex flex-col items-center gap-4">
                    <span className="flex bg-gradient-to-l from-sky-500 to-sky-400 rounded-full w-36 h-36 px-8">
                        <img src="/asset/howto/icon-1.png" className=" object-contain" />
                    </span>
                    <span className="text-3xl text-sky-900">
                        ชง
                    </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <span className="flex bg-gradient-to-l from-sky-500 to-sky-400 rounded-full w-36 h-36 px-8">
                        <img src="/asset/howto/icon-2.png" className=" object-contain" />
                    </span>
                    <span className="text-3xl text-sky-900">
                        เชค
                    </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <span className="flex bg-gradient-to-l from-sky-500 to-sky-400 rounded-full w-36 h-36 px-8">
                        <img src="/asset/howto/icon-3.png" className=" object-contain" />
                    </span>
                    <span className="text-3xl text-sky-900">
                        ดื่ม
                    </span>
                </div>
            </div>
            <div className="flex w-full">
                <SlideImage />
            </div>


        </div>
    )
}

export default ProductHowto
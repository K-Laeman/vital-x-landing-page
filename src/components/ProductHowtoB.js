import SlideImage from "../components/SlideImage"
import AddLine from "./buttons/AddLine"

const ProductHowtoB = () => {
    return (
        <div className="flex flex-col w-full  py-24 gap-12">
            <div className="flex flex-col px-6 md:justify-center md:items-center gap-2 md:gap-12">
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-6xl text-sky-700 font-medium">
                        ผลิตภัณฑ์ <br />VITAL-X PROTEIN
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-sky-900 ">
                        {'สัมผัสประสบการณ์ผิวดูดีขึ้น ภายใน 2 สัปดาห์'}
                    </h2>
                </div>
                <div className="flex md:w-1/2 justify-center">
                    <AddLine />
                </div>
            </div>
            <div className="flex justify-center w-full px-12 md:gap-24 bg-product-howto-background bg-contain bg-no-repeat md:h-[780px]">
                <div id="howto" className="relative flex flex-col justify-between max-w-7xl mx-auto w-full py-12">
                    <div className="flex flex-col px-4 md:py-8">
                        <h1 className="text-4xl font-medium md:text-7xl text-sky-700">
                            {`เพียง 1 ซอง`}
                        </h1>
                        <span className="text-xl md:text-4xl text-sky-700">
                            {`มีโปรตีนและวิตามินครบถ้วน`}
                        </span>
                    </div>
                    <div className="md:absolute flex w-full md:top-1/4  justify-center items-center">
                        <img src="/asset/Vital-x-3.png" className=" w-3/4 md:w-[28rem] object-cotian" />
                    </div>
                    <div className="flex justify-center md:justify-end gap-4">
                        <div className="flex flex-col items-center gap-4">
                            <span className="flex border-2 border-sky-700 rounded-xl w-20 h-20 md:w-28 md:h-28 px-4">
                                <img src="/asset/howto/icon-5.png" className=" object-contain" />
                            </span>
                            <span className="text-3xl text-sky-900">
                                ชง
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <span className="flex border-2 border-sky-700 rounded-xl w-20 h-20 md:w-28 md:h-28 px-4">
                                <img src="/asset/howto/icon-6.png" className=" object-contain" />
                            </span>
                            <span className="text-3xl text-sky-900">
                                เชค
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <span className="flex border-2 border-sky-700 rounded-xl w-20 h-20 md:w-28 md:h-28 px-4">
                                <img src="/asset/howto/icon-4.png" className=" object-contain" />
                            </span>
                            <span className="text-3xl text-sky-900">
                                ดื่ม
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex w-full">
                <SlideImage />
            </div>


        </div>
    )
}

export default ProductHowtoB
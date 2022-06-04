
const Footer = () => {
    return (
        <div className="flex bg-sky-700 w-full">
            <div className="flex flex-col md:flex-row max-7xl mx-auto w-full py-12 px-6 md:px-12 gap-6">
                <div className="flex flex-col w-4/5 gap-6 md:gap-12">
                    <div className="flex flex-col text-white">
                        <span className="text-4xl font-light uppercase">
                            vitalia
                        </span>
                        <span className="text-sm font-thin">
                            supplements
                        </span>
                    </div>
                    <div className="flex flex-col text-white gap-4 text-xl font-thin">
                        <span>{`สนใจผลิตภัณฑ์เสริมอาหาร VITAL X PROTEIN ติดต่อ`}</span>
                        <span>{`Line : @vitalx`}</span>
                        <span>{`Facebook : @Vitaliawellnessclinic`}</span>
                        <span>{`โทรศัพท์ : 02 077 7801`}</span>
                    </div>
                </div>
                <div className="flex md:w-1/5 rounded-xl overflow-hidden">
                    <img src="/asset/map.png" className="w-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Footer
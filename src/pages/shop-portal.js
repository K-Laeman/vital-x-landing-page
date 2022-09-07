

const vitaliaItems = [
    { id: 1, name: 'website', title: 'Website', link: 'https://www.vitaliaclinicthailand.com', icon: '/asset/icons/internet.png' },
    { id: 2, name: 'facebook', title: 'Facebook', link: 'facebook.com/Vitaliawellnessclinic', icon: '/asset/icons/facebook.png' },
    { id: 3, name: 'youtube', title: 'Youtube', link: 'https://www.youtube.com/channel/UC7-YBYjF9HadsvCwbmrwxew', icon: '/asset/icons/youtube.png' },
    { id: 4, name: 'lineoa', title: 'LineOA', link: 'https://lin.ee/lX7RwrY', icon: '/asset/icons/lineoa.png' },
]

const vitalXItems = [
    { id: 1, name: 'website', title: 'Website', link: 'https://vitalxprotein.com/', icon: '/asset/icons/internet.png' },
    { id: 2, name: 'facebook', title: 'Facebook', link: 'https://www.facebook.com/VitalXProteinOfficial', icon: '/asset/icons/facebook.png' },
    { id: 3, name: 'lineoa', title: 'Line', link: 'https://lin.ee/7HUaLAI', icon: '/asset/icons/lineoa.png' },
    { id: 4, name: 'myshop', title: 'MyShop', link: 'https://shop.line.me/@vitalx', icon: '/asset/icons/myshop.png' },
]

const ShopPortal = () => {
    return (
        <div className="flex w-full min-h-screen bg-slate-100">
            <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 md:py-20 px-6 md:px-12">
                <div className="flex flex-col justify-center items-center md:w-2/5">
                    <div className="flex overflow-hidden bg-gradient-to-t from-sky-500 to-sky-200 rounded-t-full aspect-square px-2 pt-16 justify-center">
                        <img src="/asset/quote/doctor.png" className="object-cover w-1/2 object-top" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 py-4">
                        <span className="text-4xl font-bold text-gray-800">หมอแชมป์</span>
                        <span className="text-2xl font-normal text-gray-800">พญ.นภาพร ธรรมพัฒนากูล</span>
                        <span className="text-lg font-light text-center text-gray-800">แพทย์เวชศาสตร์ชะลอวัยและผิวหนัง<br />
                            Vitalia Wellness Clinic
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center md:w-3/5 bg-white rounded-2xl md:mx-12">
                    <div className="flex flex-col justify-center items-center max-w-xl py-6 w-full rounded-3xl md:gap-4">
                        <h1 className="text-2xl md:text-4xl font-bold">ช่องทางการติดตาม</h1>
                        <div className="flex flex-col items-center w-full gap-4 px-8 py-8">
                            <span className="flex w-full text-lg md:text-xl font-bold px-2"> Vitalia Wellness Clinic</span>
                            <ul className="flex w-full flex-wrap justify-between gap-4">
                                {vitaliaItems.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} target={'_blank'} rel={'noreferrer'} className="flex w-32 md:w-28 flex-col justify-center items-center px-4 py-4 bg-slate-100  md:aspect-square rounded-xl hover:opacity-80 hover:shadow-xl">
                                                <div className="flex items-center justify-center w-10 h-16">
                                                    <img src={item.icon} className="w-14 object-center object-contain" />
                                                </div>
                                                <div className="flex">
                                                    <span className=" text-base font-light">{item.title}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="flex flex-col items-center w-full gap-4 px-8 py-8">
                            <span className="flex w-full text-xl  font-bold px-2"> Vital-X Protein</span>
                            <ul className="flex w-full flex-wrap gap-4">
                                {vitalXItems.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} target={'_blank'} rel={'noreferrer'} className="flex w-32 md:w-28 flex-col justify-center items-center px-4 py-4 bg-slate-100  md:aspect-square rounded-xl hover:opacity-80 hover:shadow-xl">
                                                <div className="flex items-center justify-center w-10 h-16">
                                                    <img src={item.icon} className="w-14 object-center object-contain" />
                                                </div>
                                                <div className="flex">
                                                    <span className=" text-base font-light">{item.title}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShopPortal
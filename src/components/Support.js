
const Support = () => {

    const supportItem = [
        { id: 0, title: '@vitalx', text: 'add friend', image: '/asset/support/03.png', link: 'https://page.line.me/379rwtos' },
        { id: 0, title: 'Vital-X Protein', text: 'follow us', image: '/asset/support/04.png', link: 'https://www.facebook.com/VitalXProteinOfficial' },
        { id: 0, title: 'Free Shipping', text: 'every order', image: '/asset/support/01.png', link: null },
        { id: 0, title: 'Support 7 days', text: 'office hours', image: '/asset/support/02.png', link: null },
    ]

    return (
        <div className="flex max-w-7xl mx-auto py-6 md:py-12">
            <div className="flex flex-row flex-wrap w-full items-center justify-center md:justify-between gap-6 md:gap-8">
                {
                    supportItem.map((item, key) => {
                        return (
                            <a href={item.link ? item.link : ''} target={'_blank'} rel="noreferrer" className="flex flex-col md:flex-row justify-start items-center w-40 md:w-72 px-4 py-4 bg-gradient-to-l from-sky-400 to-sky-400 rounded-xl gap-4 hover:scale-110" key={key}>
                                <div className="flex">
                                    <span className="flex justify-center items-center w-16 h-16 rounded-full bg-sky-500">
                                        <img src={item.image} className="w-8 h-8 md:w-10 md:h-10" />
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center  items-center">
                                    <h1 className="text-base font-medium text-white">
                                        {item.title}
                                    </h1>
                                    <span className="text-base font-light text-white">
                                        {item.text}
                                    </span>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Support
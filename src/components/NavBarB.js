
const NavBarB = () => {

    const menuItems = [
        { title: 'product', link: '/landingb/#product' },
        { title: 'benefit', link: '/landingb/#benefit' },
        { title: 'how to', link: '/landingb/#howto' },
        { title: 'review', link: '/landingb/#review' },
    ]
    return (
        <div className="absolute flex w-full top-0">
            <div className="flex justify-between items-baseline max-w-7xl mx-auto w-full px-6 md:px-0 py-4">
                <div className="flex flex-col justify-center items-center gap-0">
                    <span className="text-xl md:text-3xl text-sky-700 font-light uppercase mb-0 py-0">
                        vitalia
                    </span>
                    <span className="text-xs text-sky-700 font-thin mt-0 py-0">
                        supplements
                    </span>
                </div>
                <div className=" md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-sky-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className=" hidden md:flex w-full justify-end gap-10 uppercase font-medium text-base text-sky-700">
                    {
                        menuItems.map((item, key) => {
                            return (
                                <a key={key} href={item.link} className="hover:underline hover:underline-offset-4">
                                    {item.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBarB
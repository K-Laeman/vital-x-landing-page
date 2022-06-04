import { Main } from "next/document"
import Head from "next/head"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>VitalX Protein</title>
                <meta name="description" content="Landing page" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="relative flex flex-col w-full">
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MainLayout
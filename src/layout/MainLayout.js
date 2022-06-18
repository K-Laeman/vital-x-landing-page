import Head from "next/head"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>VitalX Protein</title>
                <meta property="og:url" content="vitalxprotein.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={"Vital-X Protein"} />
                <meta
                    property="og:description"
                    content="Vital-X Protein"
                />
                <meta property="og:image" content={"https://drive.google.com/uc?export=view&id=1HtkVM9tUvEghPNHU0H09uGR2j04YfmBw"} />
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
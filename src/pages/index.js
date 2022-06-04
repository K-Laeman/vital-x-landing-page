import MainLayout from "../layout/MainLayout"
import NavBarB from "../components/NavBarB"
import Hero from "../components/Hero"
import Support from "../components/Support"
import ProductIntro from "../components/ProductIntro"
import ProductDetail from "../components/ProductDetail"
import ProductBenefit from "../components/ProductBenefit"
import CustomerReview from "../components/CustomerReview"
import ProductHowtoB from "../components/ProductHowtoB"
import VideoSection from "../components/VideoSection"
import QouteSection from "../components/QuoteSection"

export default function LandingB() {
    return (
        <MainLayout>
            <NavBarB />
            <Hero />
            <Support />
            <QouteSection />
            <ProductIntro />
            <ProductDetail />
            <VideoSection />
            <ProductBenefit />
            <ProductHowtoB />
            {/*  <CustomerReview /> */}
        </MainLayout>
    )
}
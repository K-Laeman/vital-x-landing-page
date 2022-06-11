import MainLayout from "../layout/MainLayout"
import NavBarB from "../components/NavBarB"
import Hero from "../components/Hero"
import Support from "../components/Support"
import ProductIntro from "../components/ProductIntro"
import ProductDetail from "../components/ProductDetail"
import ProductHowtoB from "../components/ProductHowtoB"
import VideoSection from "../components/VideoSection"
import QouteSection from "../components/QuoteSection"
import ProductBenefitB from "../components/ProductBenefitB"

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
            <ProductBenefitB />
            <ProductHowtoB />
            {/*  <CustomerReview /> */}
        </MainLayout>
    )
}
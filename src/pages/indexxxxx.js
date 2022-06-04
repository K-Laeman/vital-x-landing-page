import MainLayout from "../layout/MainLayout"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Support from "../components/Support"
import Quote from "../components/quote"
import ProductIntro from "../components/ProductIntro"
import ProductDetail from "../components/ProductDetail"
import ProductBenefit from "../components/ProductBenefit"
import ProductHowto from "../components/ProductHowto"
import CustomerReview from "../components/CustomerReview"
import VideoSection from "../components/VideoSection"

export default function Home() {
  return (
    <MainLayout>
      <NavBar />
      <Hero />
      <Support />
      <Quote />
      <ProductIntro />
      <ProductDetail />
      <VideoSection />
      <ProductBenefit />
      <ProductHowto />
      <CustomerReview />
    </MainLayout>
  )
}

import HeroSection from "../components/Home/Hero";
import CategorySection from "../components/Home/Category";
import CommunitySection from "../components/Home/Community";
import BookInfoSection from "../components/Home/BookInfo";
import FooterSection from "../components/Footer";

export default function Home() {
    return (
        <div>

            <HeroSection />
            <CategorySection />
            <BookInfoSection />
            <CommunitySection />
            <FooterSection />
        </div>
    )
}
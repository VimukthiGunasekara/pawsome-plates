import HeroSection from "../components/Hero";
import CategorySection from "../components/Category";
import CommunitySection from "../components/Community";
import FooterSection from "../components/Footer";
import BookInfoSection from "../components/BookInfo";

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